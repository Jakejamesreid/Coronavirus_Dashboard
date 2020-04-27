//https://www.w3schools.com/xml/xml_http.asp
function getData(URL, cb){
    // xhr = XmlHttpRequest
    var xhr = new XMLHttpRequest(); 

    /* xhr Ready States
    0 Unsent
    1 Opened
    2 Headers Received
    3 Loading
    4 Done
    */
    xhr.onreadystatechange = function() {

        // When Data is received
        if (this.readyState == 4 && this.status == 200){
            // Change the inner HTML of the DIV to JSON response text
             cb(JSON.parse(this.responseText));
        }
    };

    xhr.open("GET", URL);
    xhr.send();
}

function writeToDocument(URL){
    jsonObj = getData(URL, function(data){
        jsonObj = data.features[0].attributes['ConfirmedCovidCases']
        document.getElementById("result").innerHTML = jsonObj

    });
    //document.getElementById("result").innerHTML = jsonObj
}