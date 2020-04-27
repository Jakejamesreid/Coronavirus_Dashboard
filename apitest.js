// https://dev.to/johnpaulada/synchronous-fetch-with-asyncawait
function writeToDocument(URL){
    const request = async () => {
        const response = await fetch(URL);
        const json = await response.json();

        document.getElementById("result").innerHTML =json.features[0].attributes['ConfirmedCovidCases'];
    }
    
    request();
    
}

    
    