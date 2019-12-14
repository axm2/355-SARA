const express = require('express');
const bodyParser = require('body-parser');
const app = express()
const puppeteer = require('puppeteer');
const mysql = require('mysql');
// I should have used mysql2 here which has support for promises, async, await

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
  res.render('search', {data: []});
})

app.post('/urlinput', function (req, res, next) {
  parseURL2(req.body.urlInput, res); // This should go to the 
  //res.redirect('search');
})

app.post('/searchinput', function (req, res, next) {
  switch (typeof (req.body.cbox)) {
    case 'undefined':
      makeQuery(req.body.query, false, false, res);
      break;
    case 'string':
      if (req.body.cbox == 'case') makeQuery(req.body.query, true, false, res);
      else makeQuery(req.body.query, false, true, res);
      break;
    case 'object':
      makeQuery(req.body.query, true, true, res);
      break;
    default:
      console.log("uh oh...");
  }
});

const server = app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
  console.log('-'.repeat(process.stdout.columns));
})

function makeQuery(query, c, p, res) {
  // If c is true, case is selected, if p is true, partial match is selected
  /*
  SELECT * 
  FROM page, word, page_word 
  WHERE page.pageId = page_word.pageId
  AND word.wordId = page_word.wordId 
  AND word.wordName = ‘wordEntered ‘
  ORDER BY freq desc
  */

  //Now lets account for the case and partial matches.
  if (!c && !p) {
    connection.query('SELECT * from page, word, page_word WHERE page.url = page_word.pageId AND word.wordId = page_word.wordId AND word.wordName = ' + connection.escape(query) + 'ORDER by freq desc;', function (err, rows, fields) {
      if (!err) {
        res.render('search', {data: rows});
      }
      else
        console.log(err);
    });
  }
  else if (c && !p) {
    connection.query('SELECT * from page, word, page_word WHERE page.url = page_word.pageId AND word.wordId = page_word.wordId AND BINARY word.wordName = ' + connection.escape(query) + 'ORDER by freq desc;', function (err, rows, fields) {
      if (!err) {
        res.render('search', {data: rows});
      }
      else
        console.log(err);
    });
  }
  else if (!c && p) {
    var query2 = '%' + query + '%'
    connection.query('SELECT * from page, word, page_word WHERE page.url = page_word.pageId AND word.wordId = page_word.wordId AND word.wordName LIKE ' + connection.escape(query2) + 'ORDER by freq desc;', function (err, rows, fields) {
      if (!err) {
        res.render('search', {data: rows});
      }
      else
        console.log(err);
    });

  }
  else if (c && p) {
    var query2 = '%' + query + '%'
    connection.query('SELECT * from page, word, page_word WHERE page.url = page_word.pageId AND word.wordId = page_word.wordId AND BINARY word.wordName LIKE ' + connection.escape(query2) + 'ORDER by freq desc;', function (err, rows, fields) {
      if (!err) {
        res.render('search', {data: rows});
      }
      else
        console.log(err);
    });

  }
}

async function parseURL2(url, res) {
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
  pushtodB(uniques, url, description, title, lastModified, lastIndexed, res); // now lets push it to the DB
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

function pushtodB(uniques, url, description, title, lastModified, lastIndexed, res) {
  //we also should take in the split up results so that we can count repeats.
  //make the timeToIndex
  var timeToIndex = new Date().getTime() - lastIndexed.getTime();
  //Create page, if it doesn't exist then we create.
  connection.query('INSERT INTO page (url, title, description, lastModified, lastIndexed, timeToIndex) values (' + connection.escape(url) + ',' + connection.escape(title) + ',' + connection.escape(description) + ',' + connection.escape(lastModified) + ',' + connection.escape(lastIndexed) + ',' + timeToIndex + ') ON DUPLICATE KEY UPDATE lastIndexed =' + connection.escape(lastIndexed) + ',timeToIndex =' + timeToIndex + ';', function (err, result) {
    if (err)
      console.log(err);
  });
  // https://stackoverflow.com/questions/921789/how-to-loop-through-a-plain-javascript-object-with-the-objects-as-members
  Object.keys(uniques).forEach(function (key) {
    connection.query('INSERT INTO word (wordName) VALUES (' + connection.escape(key) + ');', function (err, result, fields) {
      if (err)
        console.log(err);
    });
    connection.query('INSERT INTO page_word(pageId, wordId, freq) VALUES (' + connection.escape(url) + ', (SELECT LAST_INSERT_ID()),' + uniques[key] + ');', function (err, result) {
      if (err)
        console.log(err);
    });
  });
  res.redirect('/search');
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

