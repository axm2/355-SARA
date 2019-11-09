function googlesearch() {
    var searchterm = document.getElementById("query").value
    var url = "https://www.googleapis.com/customsearch/v1/siterestrict?key=AIzaSyBPRakZQjv780pIeU1w_v5m0so7AZHT7c0&cx=017168851564985857371:ocrlfzfoqwy&q=" + searchterm;
    var titles = [];
    var urls = [];
    var descriptions = [];
    fetch(url)
        .then(response => {
            return response.json()
        })
        .then(data => {
            // Work with JSON data here
            console.log(data.items[0]);
            var i;
            for (i = 0; i < data.items.length; i++) {
                titles[i] = data.items[i].title;
                urls[i] = data.items[i].link;
                descriptions[i] = data.items[i].snippet;
            }
            resultsDisplayer(titles, urls, descriptions);
        })
        .catch(err => {
            // Do something for an error here
        })

}

function filesearch() {
    var resultDiv = document.getElementById('resultsDiv');

    var files = document.getElementById('selectFiles').files;
    if (files.length <= 0) {
        return false;
    }
    var jsonregex = new RegExp(/([a-zA-Z0-9\s_\\.\-\(\):])+(.json)$/i);
    var xmlregex = new RegExp(/([a-zA-Z0-9\s_\\.\-\(\):])+(.xml)$/i);
    var csvregex = new RegExp(/([a-zA-Z0-9\s_\\.\-\(\):])+(.csv)$/i);

    var titles = [];
    var urls = [];
    var descriptions = [];

    //JSONPARSER
    if (jsonregex.test(files[0].name)) {
        var fr = new FileReader();
        fr.onload = function (e) {
            var result = JSON.parse(e.target.result);
            //document.getElementById('resultsDiv').innerHTML = result.Result[0].title;
            var i;
            for (i = 0; i < result.Result.length; i++) {
                titles[i] = result.Result[i].title;
                urls[i] = result.Result[i].url;
                descriptions[i] = result.Result[i].description;
            }
            resultsDisplayer(titles, urls, descriptions);
        }
        fr.readAsText(files.item(0));

    }
    //XMLPARSER
    if (xmlregex.test(files[0].name)) {
        var fr = new FileReader();
        fr.onload = function (e) {
            var xmlparser = new DOMParser();
            var result = xmlparser.parseFromString(e.target.result, "text/xml");
            //document.getElementById('resultsDiv').innerHTML = result.getElementsByTagName("result")[0].getElementsByTagName("title")[0].childNodes[0].nodeValue;
            var i;
            for (i = 0; i < result.getElementsByTagName("result").length; i++) {
                titles[i] = result.getElementsByTagName("result")[i].getElementsByTagName("title")[0].childNodes[0].nodeValue;
                urls[i] = result.getElementsByTagName("result")[i].getElementsByTagName("url")[0].childNodes[0].nodeValue;
                descriptions[i] = result.getElementsByTagName("result")[i].getElementsByTagName("description")[0].childNodes[0].nodeValue;
                resultsDisplayer(titles, urls, descriptions);
            }
        }

        fr.readAsText(files.item(0));
    }
    //CSVPARSER
    if (csvregex.test(files[0].name)) {
        var fr = new FileReader();
        fr.onload = function (e) {
            var result = e.target.result;
            resultarr = result.split("\n");
            var i;
            for (i = 0; i < resultarr.length; i++) {
                if (resultarr[i] != "") {
                    splitresults = resultarr[i].split(",");
                    titles[i] = splitresults[0];
                    urls[i] = splitresults[1];
                    descriptions[i] = splitresults[2];
                }
            }
            resultsDisplayer(titles, urls, descriptions);
        }

        fr.readAsText(files.item(0));
    }

}

function search() {

}

function resultsDisplayer(T, U, D) {
    document.getElementById("resultsDiv").innerHTML = "";
    var i;
    for (i = 0; i < T.length; i++) {
        var section = document.createElement("section");
        section.style = "border: #B8D68C; border-style: solid; border-width:1px";

        var titleheader = document.createElement("h2");
        titleheader.innerHTML = T[i];
        section.appendChild(titleheader);

        var url = document.createElement("a");
        url.innerHTML = U[i];
        url.href = U[i];
        url.style = "color: #E84F4F";
        section.appendChild(url);

        var description = document.createElement("p");
        description.innerHTML = D[i];
        section.appendChild(description);

        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = "checkbox" + i;
        section.appendChild(checkbox);

        document.getElementById("resultsDiv").appendChild(section);
    }

}

function selectAll() {
    var inputs = document.getElementsByTagName("input");
    var i;
    for (i = 0; i < inputs.length; i++) {
        if (inputs[i].type == "checkbox") {
            inputs[i].checked = true;
        }
    }
    document.getElementById("togglebox").innerHTML = "Deselect All";
    document.getElementById("togglebox").setAttribute("onClick", "deselectAll()");

}
//Probably should consolidate into one function but yolo
function deselectAll() {
    var inputs = document.getElementsByTagName("input");
    var i;
    for (i = 0; i < inputs.length; i++) {
        if (inputs[i].type == "checkbox") {
            inputs[i].checked = false;
        }
    }
    document.getElementById("togglebox").innerHTML = "Select All";
    document.getElementById("togglebox").setAttribute("onClick", "selectAll()");
}

function download() {
    var format = document.getElementById("formatdd").value;
    var sections = document.getElementsByTagName("section");
    var i;
    var titles = [];
    var urls = [];
    var descriptions = [];
    for (i = 0; i < sections.length; i++) {
        if (sections[i].childNodes[3].checked) {
            titles[i] = sections[i].childNodes[0].innerText;
            urls[i] = sections[i].childNodes[1].innerText;
            descriptions[i] = sections[i].childNodes[2].innerText;
        }
    }
    fileBuilder(titles,urls,descriptions,format);
}

function fileBuilder(titles,urls,descriptions,format){
    if(format="JSON"){

    }
    if(format="XML"){

    }
    if(format="CSV"){

    }
}