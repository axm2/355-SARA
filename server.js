const express = require('express');
const bodyParser = require('body-parser');
const app = express()
const puppeteer = require('puppeteer');
const mysql = require('mysql');

var connection = mysql.createConnection({
  host: '*',
  user: '*',
  password: '*',
  database: '*'
});

app.use(express.static('public'));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.set('view engine', 'ejs')

app.get('/search', function (req, res) {
  res.render('search');
})

app.post('/urlinput', function (req, res, next) {
  parseURL2(req.body.urlInput); // This should go to the 
  res.redirect('search');
})

app.post('/searchinput', function (req, res, next) {
  console.log(req.body.query);
  res.redirect('search'); // We somehow need to do some javascript here to out the pages similar to 
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
  console.log('-'.repeat(process.stdout.columns));
})

function makeQuery(query) {
  // Also need to take in the current values of checkboxes and go from there (check document)
  /*
  SELECT * 
  FROM page, word, page_word 
  WHERE page.pageId = page_word.pageId
  AND word.wordId = page_word.wordId 
  AND word.wordName = ‘wordEntered ‘
  ORDER BY freq desc
  */

  connection.query('SELECT * from word', function (err, rows, fields) {
    if (!err)
      console.log('The solution is: ', rows);
    else
      console.log('Error while performing Query.');
  });
}

async function parseURL2(url) {
  // This snippet spins up an instance of chrome on the server, then loads the page, then returns only the text for the whole page.
  // https://stackoverflow.com/questions/52256799/how-to-use-document-getelementbyid-in-nodejs?noredirect=1&lq=1
  // We could optimize this so that we don't have to open and close a new instance everytime we parse, but that's a lot of work so
  var browser = await puppeteer.launch();
  var page = await browser.newPage();
  //get url from page
  //var url = 'http://reddit.com';
  // We should probably do some regex for valid url and then throw if not valid 
  await page.goto(url);
  var text = await page.evaluate(() => {
    return document.body.innerText;
  });
  var description = await page.evaluate(() => { // could return null
    //return document.head.querySelector("[name~=description][content]").content;
    try {
      return document.head.querySelector("[name~=description][content]").content;
    } catch (err) {
      return;
    }
  });
  var title = await page.evaluate(() => {
    return document.title;
  });
  var lastModified = await page.evaluate(() => { // will almost always be null
    //return document.head.querySelector("[http-equiv~=last-modified][content]").content;
    try {
      return document.head.querySelector("[http-equiv~=last-modified][content]").content;
    } catch (err) {
      return;
    }
  });
  var lastIndexed = new Date();
  browser.close();
  var uniques = uniqueCounter(text); // uniques is a set of the words in the url
  pushtodB(uniques, url, description, title, lastModified, lastIndexed); // now lets push it to the DB
  //debug(uniques, url, description, title, lastModified, lastIndexed);

}

function uniqueCounter(x) { // x is a string
  //we should also throw out stupid big words that are over our primary key length
  var y = x.replace(/\n/g, " ").replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()@\+\?><\[\]\+]/g, '').split(" ");
  // https://stackoverflow.com/questions/19395257/how-to-count-duplicate-value-in-an-array-in-javascript
  var counts = {};
  y.forEach(function (x) {
    counts[x] = (counts[x] || 0) + 1;
  });
  return counts;
}

function pushtodB(uniques, url, description, title, lastModified, lastIndexed) {
  //we also should take in the split up results so that we can count repeats.
  //make the timeToIndex
  var timeToIndex = new Date().getTime() - lastIndexed.getTime();
  //Create page, if it doesn't exist then we create.
  connection.query('INSERT INTO page (url, title, description, lastModified, lastIndexed, timeToIndex) values (' + connection.escape(url) + ',' + connection.escape(title) + ',' + connection.escape(description) + ',' + connection.escape(lastModified) + ',' + connection.escape(lastIndexed) + ',' + timeToIndex + ') ON DUPLICATE KEY UPDATE lastIndexed =' + connection.escape(lastIndexed) + ',timeToIndex =' + timeToIndex + ';', function (err, result) {
    if (!err)
      console.log('inserted');
    else
      console.log('Error while performing Query.');
      console.log(err);
  });
  // https://stackoverflow.com/questions/921789/how-to-loop-through-a-plain-javascript-object-with-the-objects-as-members
  Object.keys(uniques).forEach(function (key) {
    // For each word, new word save word 
    //console.log(key, uniques[key]);
    // https://stackoverflow.com/questions/19714308/mysql-how-to-insert-into-table-that-has-many-to-many-relationship
    connection.query('INSERT INTO word (wordName) VALUES (' + connection.escape(key) + ');', function(err, result){
      if(!err)
        console.log('inserted a word!');
      else
        console.log(err);
    });
    // TODO: do a select LAST_INSERT_ID() here and then use that var for the next QUERY
    connection.query('SET @word_id = LAST_INSERT_ID();', function(err, result){
      if(!err)
        console.log('setting word_id');
      else
        console.log(err);
    });
    connection.query('INSERT IGNORE INTO page_word(pageId, wordId) VALUES (' + connection.escape(url) + ',@word_id);', function(err, result){
      if(!err)
        console.log('inserted a page_word!');
      else
        console.log(err);
    });
  });
}

function debug(uniques, url, description, title, lastModified, lastIndexed) {

  //make the timeToIndex
  var timeToIndex = new Date().getTime() - lastIndexed.getTime();
  //console.log(uniques);
  console.log("The url is: " + url);
  console.log("The description is " + description);
  console.log("The title is " + title);
  console.log("The lastModified is " + lastModified);
  console.log("The lastIndexed is " + lastIndexed);
  console.log("The timeToIndex is " + timeToIndex);
  console.log('-'.repeat(process.stdout.columns));

}