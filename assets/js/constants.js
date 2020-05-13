export const chartURL = `https://services1.arcgis.com/eNO7HHeQ3rUcBllm/arcgis/rest/services/CovidStatisticsProfileHPSCIrelandOpenData/FeatureServer/0/query?where=1%3D1&outFields=*&returnGeometry=false&orderByFields=date desc&outSR=4326&f=json`
export const mapURL = `https://services1.arcgis.com/eNO7HHeQ3rUcBllm/arcgis/rest/services/Covid19CountyStatisticsHPSCIreland/FeatureServer/0/query?where=1%3D1&outFields=CountyName,ConfirmedCovidCases,ConfirmedCovidDeaths,ConfirmedCovidRecovered,ORIGID,TimeStamp&returnGeometry=false&orderByFields=TimeStamp desc&outSR=4326&f=json`

export const values = { 
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

export const ageChartCtx = document.getElementById('ageChart');
export const genderChartCtx = document.getElementById("genderChart");
export const transmissionChartCtx = document.getElementById('transmissionChart');
export const hospitalisationChartCtx = document.getElementById("hopitalisationChart");