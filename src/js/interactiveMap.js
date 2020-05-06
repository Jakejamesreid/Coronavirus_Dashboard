async function getData(URL){
    const response = await fetch(URL)
    const json = await response.json()
    confirmedCases = json.features[0].attributes['ConfirmedCovidCases'];

    
    //https://stephanwagner.me/create-world-map-charts-with-svgmap#svgMapDemoGDP
    const values = { 
        "C": { "cases": confirmedCases, "active": 0, "deaths": 0, "recovered": 0}, 
        "CE": { "cases": 0, "active": 0, "deaths": 0, "recovered": 0},
        "CN": { "cases": 0, "active": 0, "deaths": 0, "recovered": 0},
        "CW": { "cases": 0, "active": 0, "deaths": 0, "recovered": 0},
        "D": { "cases": 20000, "active": 0, "deaths": 0, "recovered": 0}, 
        "DL": { "cases": 0, "active": 0, "deaths": 0, "recovered": 0},
        "G": { "cases": 0, "active": 0, "deaths": 0, "recovered": 0}, 
        "KE": { "cases": 0, "active": 0, "deaths": 0, "recovered": 0},
        "KK": { "cases": 0, "active": 0, "deaths": 0, "recovered": 0},
        "KY": { "cases": 0, "active": 0, "deaths": 0, "recovered": 0},
        "LD": { "cases": 0, "active": 0, "deaths": 0, "recovered": 0},
        "LH": { "cases": 560, "active": 0, "deaths": 0, "recovered": 0},
        "LK": { "cases": 0, "active": 0, "deaths": 0, "recovered": 0},
        "LM": { "cases": 0, "active": 0, "deaths": 0, "recovered": 0},
        "LS": { "cases": 0, "active": 0, "deaths": 0, "recovered": 0},
        "MH": { "cases": 0, "active": 0, "deaths": 0, "recovered": 0},
        "MN": { "cases": 0, "active": 0, "deaths": 0, "recovered": 0},
        "MO": { "cases": 0, "active": 0, "deaths": 0, "recovered": 0},
        "OY": { "cases": 0, "active": 0, "deaths": 0, "recovered": 0},
        "RN": { "cases": 0, "active": 0, "deaths": 0, "recovered": 0},
        "SO": { "cases": 0, "active": 0, "deaths": 0, "recovered": 0},
        "T": { "cases": 0, "active": 0, "deaths": 0, "recovered": 0}, 
        "WD": { "cases": 0, "active": 0, "deaths": 0, "recovered": 0},
        "WH": { "cases": 0, "active": 0, "deaths": 0, "recovered": 0},
        "WW": { "cases": 0, "active": 0, "deaths": 0, "recovered": 0},
        "WX": { "cases": 0, "active": 0, "deaths": 0, "recovered": 0},
        "AM": { "cases": 0, "active": 0, "deaths": 0, "recovered": 0},
        "AH": { "cases": 0, "active": 0, "deaths": 0, "recovered": 0},
        "DN": { "cases": 0, "active": 0, "deaths": 0, "recovered": 0},
        "DY": { "cases": 0, "active": 0, "deaths": 0, "recovered": 0},
        "FH": { "cases": 0, "active": 0, "deaths": 0, "recovered": 0},
        "TE": { "cases": 0, "active": 0, "deaths": 0, "recovered": 0},
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

const URL = `https://services1.arcgis.com/eNO7HHeQ3rUcBllm/arcgis/rest/services/CovidStatisticsProfileHPSCIrelandOpenData/FeatureServer/0/query?where=1%3D1&outFields=Date,ConfirmedCovidCases&returnGeometry=false&orderByFields=date desc&outSR=4326&f=json`
getData(URL)