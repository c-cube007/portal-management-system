// Sample data for demonstration purposes
// Assuming you have an array of months and corresponding data for new customers and total sales
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var newCustomersData = [10, 21, 23, 23, 21, 4, 5, 6, 7, 6, 41, 21];
var totalSalesData = [20, 25, 23, 34, 32, 32, 32, 20, 30, 32, 23, 43];

// Get the chart canvas element
var ctx = document.getElementById('myChart').getContext('2d');

// Create a grouped bar chart
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: months,
        datasets: [{
            label: 'New Customers',
            data: newCustomersData,
            backgroundColor: 'rgba(75, 12, 192, 1)', // Adjust color as needed
            borderColor: 'rgba(75, 192, 192, 1)', // Adjust color as needed
            borderWidth: 1
        }, {
            label: 'Total Sales',
            data: totalSalesData,
            backgroundColor: 'rgba(25, 99, 222, 1)', // Adjust color as needed
            borderColor: 'rgba(255, 99, 132, 1)', // Adjust color as needed
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
