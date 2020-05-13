// Make API call
async function getData(URL){
    const response = await fetch(URL);
    const json = await response.json();
    return json
}

// Swap key value pairs
function getKeyByValue(data, value) {
    for(key in data ){
      if(data[key] == value){
        return key;
      }
    }
    return null;
}

// Render the interactive map with the Coronavirus statistics
async function renderMap(URL){

    // Get json data from API
    const json = await getData(URL)
    let countyData = json.features;

    // Get the last date the dataset was updated
    let infoUpdated = new Date(json.features[0].attributes['TimeStamp']);
    document.getElementById("infoUpdated").innerHTML = "<strong>Last Updated:</strong> " + infoUpdated.toDateString();    

    // No option in API to get last day only so I get the last 26 results (26 as there are 26 counties in Ireland)
    for (i=0; i<26; i++) {
        countyName = countyData[i].attributes['CountyName'];
        var key = getKeyByValue(svgMap.prototype.counties, countyName);
        values[key]["cases"] = countyData[i].attributes['ConfirmedCovidCases'];
    }

    new svgMap({
        targetElementID: 'svgMap',
        data: {
            data: {
                cases: {
                    name: 'Cases',
                    format: '{0}',
                    thousandSeparator: ',',
                    thresholdMax: 4000,
                    thresholdMin: 1
                },
                active: {
                    name: 'Active',
                    format: '{0}',
                    thousandSeparator: ',',
                    thresholdMax: 4000,
                    thresholdMin: 1
                },
                deaths: {
                    name: 'Deaths',
                    format: '{0}',
                    thousandSeparator: ',',
                    thresholdMax: 4000,
                    thresholdMin: 1
                },
                recovered: {
                    name: 'Recovered',
                    format: '{0}',
                    thousandSeparator: ',',
                    thresholdMax: 4000,
                    thresholdMin: 1
                }
            },
            applyData: 'Coronavirus',
            values
        }
    });
}

renderMap(mapURL)