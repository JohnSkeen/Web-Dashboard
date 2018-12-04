
// Select Chart

$('.hourly-chart').show();
$('.daily-chart').hide();
$('.weekly-chart').hide();
$('.monthly-chart').hide();

$('.hourly').click(function() {
  $('.hourly-chart').show();
  $('.daily-chart').hide();
  $('.weekly-chart').hide();
  $('.monthly-chart').hide();
});

$('.daily').click(function() {
  $('.hourly-chart').hide();
  $('.daily-chart').show();
  $('.weekly-chart').hide();
  $('.monthly-chart').hide();
});

$('.weekly').click(function() {
  $('.hourly-chart').hide();
  $('.daily-chart').hide();
  $('.weekly-chart').show();
  $('.monthly-chart').hide();
});

$('.monthly').click(function() {
  $('.hourly-chart').hide();
  $('.daily-chart').hide();
  $('.weekly-chart').hide();
  $('.monthly-chart').show();
});

// Hourly Traffic Chart

var ctx1 = document.getElementById('hourlyChart').getContext('2d');
var hourlyChart = new Chart(ctx1, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ["12am - 4am", "4am - 8am", "8am - 12pm", "12pm - 4pm", "4pm - 8pm", "8pm - 12am"],
        datasets: [{
            backgroundColor: '#e2e3f6',
            borderColor: '#7477BF',
            data: [0, 10, 5, 2, 20, 30, 45],
        }]
    },

    // Configuration options go here
    options: {
      legend: {
        display: false
      },
      maintainAspectRatio: false
    }
});

// Daily Traffic Chart

var ctx2 = document.getElementById('dailyChart').getContext('2d');
var dailyChart = new Chart(ctx2, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        datasets: [{
            backgroundColor: '#e2e3f6',
            borderColor: '#7477BF',
            data: [22, 12, 15, 12, 30, 41, 93],
        }]
    },

    // Configuration options go here
    options: {
      legend: {
        display: false
      },
      maintainAspectRatio: false
    }
});

// Weekly Traffic Chart

var ctx3 = document.getElementById('weeklyChart').getContext('2d');
var weeklyChart = new Chart(ctx3, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ["4-7 - 4-13", "4-14 - 4-20", "4-21 - 4-27", "4-27 - 5-4"],
        datasets: [{
            backgroundColor: '#e2e3f6',
            borderColor: '#7477BF',
            data: [43, 85, 102, 93],
        }]
    },

    // Configuration options go here
    options: {
      legend: {
        display: false
      },
      maintainAspectRatio: false
    }
});

// Monthly Traffic Chart

var ctx4 = document.getElementById('monthlyChart').getContext('2d');
var monthlyChart = new Chart(ctx4, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ["April", "May", "June", "July", "August", "September", "October"],
        datasets: [{
            backgroundColor: '#e2e3f6',
            borderColor: '#7477BF',
            data: [122, 212, 115, 312, 230, 441, 493],
        }]
    },

    // Configuration options go here
    options: {
      legend: {
        display: false
      },
      maintainAspectRatio: false
    }
});

// Bar Chart
var barChart = document.getElementById('myBarChart').getContext('2d');
var myBarChart = new Chart(barChart, {
    type: 'bar',
    data: {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
        backgroundColor: '#7477BF',
        borderColor: '#7477BF',
        data: [15, 19, 25, 32, 22, 30, 24],
      }]
    },
    // Configuration options go here
    options: {
      legend: {
        display: false
      }
    }
});

// Doughnut Chart
var doughnutChart = document.getElementById('myDoughnutChart').getContext('2d');
var myDoughnutChart = new Chart(doughnutChart, {
    type: 'doughnut',
    data: {
    labels: ["Phones", "Tablets", "Desktop"],
    datasets: [
      {
        backgroundColor: ['#74b1bf', '#81c98f', '#7477BF'],
        data: [15, 19, 65]
      }
    ]
  },
  options: {
    cutoutPercentage: 35,
    legend: {
      position: 'right',
      labels: {
          boxWidth: 13,
          padding: 15,
          fontColor: '#797979'
        }
      },
    animations: {
      animateScale: true
    }
  }
});

// Alert close
$('#alertClose').click(function(){
  $('.alertBox').fadeOut();
});

// ALert open
$('#alertIcon').click(function(){
  $('.alertBox').fadeIn();
  $('#alertIndicator').hide();
});
