async function getData(URL) {
    const response = await fetch(URL)
    const json = await response.json()

    // Get the last date the dataset was updated
    infoUpdated = new Date(json.features[0].attributes['Date']);
    document.getElementById("infoUpdated").innerHTML = "<strong>Last Updated:</strong>" + infoUpdated.toDateString();

    // Get daily figures for Coronavirus in Ireland
    dailyCases = json.features[0].attributes['ConfirmedCovidCases'];
    dailyDeaths = json.features[0].attributes['ConfirmedCovidDeaths'];
    dailyRecoveries = json.features[0].attributes['ConfirmedCovidRecovered'];
    
    // Update HTML elements with daily figures
    document.getElementById("dailyCases").innerHTML = dailyCases;
    document.getElementById("dailyDeaths").innerHTML = dailyDeaths;
    document.getElementById("dailyRecoveries").innerHTML = dailyRecoveries;
    
    // Get total figures for Coronavirus in Ireland
    totalCases = json.features[0].attributes['TotalConfirmedCovidCases'];
    totalDeaths = json.features[0].attributes['TotalConfirmedCovidDeaths'];
    totalRecovered = json.features[0].attributes['TotalConfirmedCovidRecovered'];
    
    // Update HTML elements with total figures
    document.getElementById("totalCases").innerHTML = totalCases;
    document.getElementById("totalDeaths").innerHTML = totalCases;
    document.getElementById("totalRecovered").innerHTML = totalCases;

    // Get figures for Age graphs
    aged1Cases = json.features[0].attributes['Aged1'];
    aged1to4Cases = json.features[0].attributes['Aged1to4'];
    aged5to14Cases = json.features[0].attributes['Aged5to14'];
    aged15to24Cases = json.features[0].attributes['Aged15to24'];    
    aged25to34Cases = json.features[0].attributes['Aged25to34'];    
    aged35to44Cases = json.features[0].attributes['Aged35to44'];    
    aged45to54Cases = json.features[0].attributes['Aged45to54']; 
    aged55to64Cases = json.features[0].attributes['Aged55to64']; 
    aged65upCases = json.features[0].attributes['Aged65up']; 

    // https://www.chartjs.org/docs/latest/
    // Age chart	
    const ageChartCtx = document.getElementById('ageChart').getContext('2d');
    const ageChart = new Chart(ageChartCtx, {
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
                        beginAtZero: true
                    }
                }]
            }
        }
    });
    
    // Get figures for Gender graphs
    maleCases = json.features[0].attributes['Male'];
    femaleCases = json.features[0].attributes['Female'];
    unknownCases = json.features[0].attributes['Unknown'];   

    // Gender chart	
    var genderChartCtx = document.getElementById("genderChart");
    var genderChart = new Chart(genderChartCtx, {
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

    // Get figures for Transmission graphs
    communityCases = json.features[0].attributes['CommunityTransmission'];
    closeContactCases = json.features[0].attributes['CloseContact'];
    travelAbroadCases = json.features[0].attributes['TravelAbroad'];
    
    // Transmission Chart	
    const transmissionChartCtx = document.getElementById('transmissionChart').getContext('2d');
    const transmissionChart = new Chart(transmissionChartCtx, {
        type: 'doughnut',
        data: {
            labels: ['Community Transmission', 'Close Contact', 'Travel Abroad'],
            datasets: [{
                label: 'Transmission (%) Breakdown',
                data: [communityCases, aged1to4Cases, aged5to14Cases],
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


    // Get figures for Hospitalisation graph
    hospitalisedAged5 = json.features[0].attributes['HospitalisedAged5'];
    hospitalisedAged5to14 = json.features[0].attributes['HospitalisedAged5to14'];
    hospitalisedAged15to24 = json.features[0].attributes['HospitalisedAged15to24'];   
    hospitalisedAged25to34 = json.features[0].attributes['HospitalisedAged25to34'];   
    hospitalisedAged35to44 = json.features[0].attributes['HospitalisedAged35to44'];   
    hospitalisedAged45to54 = json.features[0].attributes['HospitalisedAged45to54'];
    hospitalisedAged55to64 = json.features[0].attributes['HospitalisedAged55to64'];
    hospitalisedAged65up = json.features[0].attributes['HospitalisedAged65up'];
      
    // Hospitalisation Chart	
    var hospitalisationChartCtx = document.getElementById("hopitalisationChart");
    const hospitalisationChart = new Chart(hospitalisationChartCtx, {
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


const URL = `https://services1.arcgis.com/eNO7HHeQ3rUcBllm/arcgis/rest/services/CovidStatisticsProfileHPSCIrelandOpenData/FeatureServer/0/query?where=1%3D1&outFields=*&returnGeometry=false&orderByFields=date desc&outSR=4326&f=json`
getData(URL)