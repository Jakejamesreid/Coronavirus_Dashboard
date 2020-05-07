async function getData(URL){
    const response = await fetch(URL)
    const json = await response.json()
    countyData = json.features;

    // Get the last date the dataset was updated
    infoUpdated = new Date(json.features[0].attributes['TimeStamp']);
    document.getElementById("infoUpdated").innerHTML = "<strong>Last Updated:</strong>" + infoUpdated.toDateString();

    // Swap key value pairs
    Object.prototype.getKey = function(value){
        for(var key in this){
          if(this[key] == value){
            return key;
          }
        }
        return null;
      };
    
    
    //https://stephanwagner.me/create-world-map-charts-with-svgmap#svgMapDemoGDP
    const values = { 
        "CN": { "cases": 0, "active": 0, "deaths": 0, "recovered": 0},
        "CW": { "cases": 0, "active": 0, "deaths": 0, "recovered": 0},
        "CE": { "cases": 0, "active": 0, "deaths": 0, "recovered": 0},
        "C": { "cases": 0, "active": 0, "deaths": 0, "recovered": 0}, 
        "DL": { "cases": 0, "active": 0, "deaths": 0, "recovered": 0},
        "D": { "cases": 0, "active": 0, "deaths": 0, "recovered": 0}, 
        "G": { "cases": 0, "active": 0, "deaths": 0, "recovered": 0}, 
        "KY": { "cases": 0, "active": 0, "deaths": 0, "recovered": 0},
        "KE": { "cases": 0, "active": 0, "deaths": 0, "recovered": 0},
        "KK": { "cases": 0, "active": 0, "deaths": 0, "recovered": 0},
        "LS": { "cases": 0, "active": 0, "deaths": 0, "recovered": 0},
        "LM": { "cases": 0, "active": 0, "deaths": 0, "recovered": 0},
        "LK": { "cases": 0, "active": 0, "deaths": 0, "recovered": 0},
        "LD": { "cases": 0, "active": 0, "deaths": 0, "recovered": 0},
        "LH": { "cases": 0, "active": 0, "deaths": 0, "recovered": 0},
        "MO": { "cases": 0, "active": 0, "deaths": 0, "recovered": 0},
        "MH": { "cases": 0, "active": 0, "deaths": 0, "recovered": 0},
        "MN": { "cases": 0, "active": 0, "deaths": 0, "recovered": 0},
        "OY": { "cases": 0, "active": 0, "deaths": 0, "recovered": 0},
        "RN": { "cases": 0, "active": 0, "deaths": 0, "recovered": 0},
        "SO": { "cases": 0, "active": 0, "deaths": 0, "recovered": 0},
        "T": { "cases": 0, "active": 0, "deaths": 0, "recovered": 0}, 
        "WD": { "cases": 0, "active": 0, "deaths": 0, "recovered": 0},
        "WH": { "cases": 0, "active": 0, "deaths": 0, "recovered": 0},
        "WX": { "cases": 0, "active": 0, "deaths": 0, "recovered": 0},
        "WW": { "cases": 0, "active": 0, "deaths": 0, "recovered": 0}
    }
    counties = svgMap.prototype.counties
    
    // Get key for specific value (https://stackoverflow.com/questions/9907419/how-to-get-a-key-in-a-javascript-object-by-its-value)
    date = countyData[0].attributes['TimeStamp'];
    for (i=0; i<26; i++) {
        countyName = countyData[i].attributes['CountyName'];
        var key = counties.getKey(countyName);
        values[key]["cases"] = countyData[i].attributes['ConfirmedCovidCases'];
    }

    new svgMap({
        targetElementID: 'svgMap',
        data: {
            data: {
                cases: {
                    name: 'Confirmed',
                    format: '{0}',
                    thousandSeparator: ',',
                    thresholdMax: 4000,
                    thresholdMin: 1
                },
                active: {
                    name: 'Active',
                    format: '{0}',
                    thousandSeparator: ','
                },
                deaths: {
                    name: 'Deceased',
                    format: '{0}',
                    thousandSeparator: ',',
                    thresholdMax: 1000,
                    thresholdMin: 1
                },
                recovered: {
                    name: 'Recovered',
                    format: '{0}',
                    thousandSeparator: ','
                }
            },
            applyData: 'Coronavirus',
            values
        }
    });
}

const URL = `https://services1.arcgis.com/eNO7HHeQ3rUcBllm/arcgis/rest/services/Covid19CountyStatisticsHPSCIreland/FeatureServer/0/query?where=1%3D1&outFields=CountyName,ConfirmedCovidCases,ConfirmedCovidDeaths,ConfirmedCovidRecovered,ORIGID,TimeStamp&returnGeometry=false&orderByFields=TimeStamp desc&outSR=4326&f=json`
//const URL = `https://services1.arcgis.com/eNO7HHeQ3rUcBllm/arcgis/rest/services/Covid19CountyStatisticsHPSCIreland/FeatureServer/0/query?where=TimeStamp%20%3E%3D%20TIMESTAMP%20'2020-05-04%2000%3A00%3A00'%20AND%20TimeStamp%20%3C%3D%20TIMESTAMP%20'2020-05-06%2000%3A00%3A00'&outFields=CountyName,TimeStamp,ConfirmedCovidCases,ConfirmedCovidDeaths,ConfirmedCovidRecovered&returnGeometry=false&orderByFields=TimeStamp desc&outSR=4326&f=json`
getData(URL)