// https://www.chartjs.org/docs/latest/
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['< 1', '1 to 4', '5 to 14', '15 to 24', '25 to 34', '35 to 44', '45 to 54', '55 to 64', '65 plus'],
        datasets: [{
            label: 'Age Profile',
            data: [30, 63, 184, 1193, 2977, 3181, 3403, 2513, 4862],
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