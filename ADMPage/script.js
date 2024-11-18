// Gráfico de Gastos Públicos
const ctx1 = document.getElementById('gastosPublicosChart').getContext('2d');
const gastosPublicosChart = new Chart(ctx1, {
    type: 'line',
    data: {
        labels: ['1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017'],
        datasets: [
            {
                label: 'Arrecadação Federal',
                data: [13.0, 13.5, 14.0, 15.0, 14.5, 15.5, 16.0, 16.5, 17.0, 17.5, 18.0, 19.0, 18.5, 19.5, 20.0, 19.0, 18.5, 18.0, 17.5, 17.0, 17.0],
                borderColor: 'blue',
                fill: false
            },
            {
                label: 'Gastos Federais (exc. juros e dívida)',
                data: [14.0, 14.2, 14.5, 14.7, 15.0, 15.3, 15.8, 16.0, 16.5, 17.0, 17.3, 18.0, 18.5, 19.0, 19.5, 20.0, 20.5, 21.0, 22.0, 21.0, 20.5],
                borderColor: 'red',
                fill: false
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Os gastos públicos crescem mais que a renda consistentemente'
            }
        }
    }
});

// Gráfico de Despesa Primária
const ctx2 = document.getElementById('despesaPrimariaChart').getContext('2d');
const despesaPrimariaChart = new Chart(ctx2, {
    type: 'line',
    data: {
        labels: ['1986', '1988', '1990', '1992', '1994', '1996', '1998', '2000', '2002', '2004', '2006', '2008', '2010', '2012', '2014', '2016', '2018', '2020', '2022'],
        datasets: [
            {
                label: 'Despesa Primária (% do PIB)',
                data: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 14, 13],
                borderColor: 'blue',
                fill: false
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Despesa Primária (% do PIB)'
            }
        }
    }
});
