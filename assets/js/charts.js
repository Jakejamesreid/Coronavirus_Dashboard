// Make API call
async function getData(URL){
    const response = await fetch(URL);
    const json = await response.json();
    return json
}

function renderDailyData(json){
    // Get daily figures for Coronavirus in Ireland
    let dailyCases = json.features[0].attributes['ConfirmedCovidCases'];
    let dailyDeaths = json.features[0].attributes['ConfirmedCovidDeaths'];
    let dailyRecoveries = json.features[0].attributes['ConfirmedCovidRecovered'];
    
    // Update HTML elements with daily figures
    document.getElementById("dailyCases").innerHTML = dailyCases;
    document.getElementById("dailyDeaths").innerHTML = dailyDeaths;
    document.getElementById("dailyRecoveries").innerHTML = dailyRecoveries;
}

function renderTotalData(json){
    // Get total figures for Coronavirus in Ireland
    let totalCases = json.features[0].attributes['TotalConfirmedCovidCases'];
    let totalDeaths = json.features[0].attributes['TotalCovidDeaths'];
    let totalRecovered = json.features[0].attributes['TotalCovidRecovered'];
    
    // Update HTML elements with total figures
    document.getElementById("totalCases").innerHTML = totalCases;
    document.getElementById("totalDeaths").innerHTML = totalDeaths;
    document.getElementById("totalRecovered").innerHTML = totalRecovered;
}

function renderAgeChart(json){
    // Get figures for Age graphs
    let aged1Cases = json.features[0].attributes['Aged1'];
    let aged1to4Cases = json.features[0].attributes['Aged1to4'];
    let aged5to14Cases = json.features[0].attributes['Aged5to14'];
    let aged15to24Cases = json.features[0].attributes['Aged15to24'];    
    let aged25to34Cases = json.features[0].attributes['Aged25to34'];    
    let aged35to44Cases = json.features[0].attributes['Aged35to44'];    
    let aged45to54Cases = json.features[0].attributes['Aged45to54']; 
    let aged55to64Cases = json.features[0].attributes['Aged55to64']; 
    let aged65upCases = json.features[0].attributes['Aged65up']; 
    
    // https://www.chartjs.org/docs/latest/
    // Age chart	
    new Chart(ageChartCtx, {
        type: 'bar',
        data: {
            labels: ['< 1', '1 to 4', '5 to 14', '15 to 24', '25 to 34', '35 to 44', '45 to 54', '55 to 64', '65 plus'],
            datasets: [{
                label: 'Age Profile',
                data: [aged1Cases, aged1to4Cases, aged5to14Cases, aged15to24Cases, aged25to34Cases, aged35to44Cases, aged45to54Cases, aged55to64Cases, aged65upCases],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(96, 245, 66, 0.2)',
                    'rgba(237, 12, 173, 0.2)',
                    'rgba(237, 132, 12, 0.2)',
                    'rgba(237, 237, 12, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(96, 245, 66, 1)',
                    'rgba(237, 12, 173, 1)',
                    'rgba(237, 132, 12, 1)',
                    'rgba(237, 237, 12, 1)',
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        stepSize: 2000,
                    }
                }]
            }
        }
    });

}

function renderGenderChart(json){
    // Get figures for Gender graphs
    let maleCases = json.features[0].attributes['Male'];
    let femaleCases = json.features[0].attributes['Female'];
    let unknownCases = json.features[0].attributes['Unknown'];   

    // Gender chart	
    new Chart(genderChartCtx, {
        type: 'pie',
        data: {
            labels: ["Male", "Female", "Other"],
            datasets: [{
                label: "Gender",
                data: [maleCases, femaleCases, unknownCases],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)'
                ]
            }]
        }
    });
}

function renderTransmissionChart(json){
    // Get figures for Transmission graphs
    let communityCases = json.features[0].attributes['CommunityTransmission'];
    let closeContactCases = json.features[0].attributes['CloseContact'];
    let travelAbroadCases = json.features[0].attributes['TravelAbroad'];

    // Transmission Chart	
    new Chart(transmissionChartCtx, {
        type: 'doughnut',
        data: {
            labels: ['Community Transmission', 'Close Contact', 'Travel Abroad'],
            datasets: [{
                label: 'Transmission (%) Breakdown',
                data: [communityCases, closeContactCases, travelAbroadCases],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)'
                ],
            }]
        },
    });
}

function renderHospitalisationChart(json){
    // Get figures for Hospitalisation graph
    let hospitalisedAged5 = json.features[0].attributes['HospitalisedAged5'];
    let hospitalisedAged5to14 = json.features[0].attributes['HospitalisedAged5to14'];
    let hospitalisedAged15to24 = json.features[0].attributes['HospitalisedAged15to24'];   
    let hospitalisedAged25to34 = json.features[0].attributes['HospitalisedAged25to34'];   
    let hospitalisedAged35to44 = json.features[0].attributes['HospitalisedAged35to44'];   
    let hospitalisedAged45to54 = json.features[0].attributes['HospitalisedAged45to54'];
    let hospitalisedAged55to64 = json.features[0].attributes['HospitalisedAged55to64'];
    let hospitalisedAged65up = json.features[0].attributes['HospitalisedAged65up'];
    
    // Hospitalisation Chart	
    new Chart(hospitalisationChartCtx, {
        type: 'horizontalBar',
        data: {
            labels: ['< 5', '5 to 14', '15 to 24', '25 to 34', '35 to 44', '45 to 54', '55 to 64', '65 plus'],
            datasets: [{
                label: 'Age Profile',
                data: [hospitalisedAged5, hospitalisedAged5to14, hospitalisedAged15to24, hospitalisedAged25to34, hospitalisedAged35to44, hospitalisedAged45to54, hospitalisedAged55to64, hospitalisedAged65up],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(96, 245, 66, 0.2)',
                    'rgba(237, 12, 173, 0.2)',
                    'rgba(237, 132, 12, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(96, 245, 66, 1)',
                    'rgba(237, 12, 173, 1)',
                    'rgba(237, 132, 12, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}

async function renderGraphs(URL) {

    // Get json data from API
    const json = await getData(URL)

    // Get the last date the dataset was updated
    let infoUpdated = new Date(json.features[0].attributes['Date']);
    document.getElementById("infoUpdated").innerHTML = "<strong>Last Updated:</strong> " + infoUpdated.toDateString();

    // Render each graph
    renderDailyData(json);
    renderTotalData(json);
    renderAgeChart(json);
    renderGenderChart(json);
    renderTransmissionChart(json);
    renderHospitalisationChart(json);
}

renderGraphs(chartURL)