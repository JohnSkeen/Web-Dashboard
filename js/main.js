//===========================================
//  Chart Building & Functionality
//===========================================

// Select Chart

$('.hourly-chart').show();
$('.daily-chart').hide();
$('.weekly-chart').hide();
$('.monthly-chart').hide();

$('.hourly').click(function() {
  $('.hourly-chart').fadeIn();
  $('.daily-chart').hide();
  $('.weekly-chart').hide();
  $('.monthly-chart').hide();
});

$('.daily').click(function() {
  $('.hourly-chart').hide();
  $('.daily-chart').fadeIn();
  $('.weekly-chart').hide();
  $('.monthly-chart').hide();
});

$('.weekly').click(function() {
  $('.hourly-chart').hide();
  $('.daily-chart').hide();
  $('.weekly-chart').fadeIn();
  $('.monthly-chart').hide();
});

$('.monthly').click(function() {
  $('.hourly-chart').hide();
  $('.daily-chart').hide();
  $('.weekly-chart').hide();
  $('.monthly-chart').fadeIn();
});

//===========================================
//  Chart Layout
//===========================================

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

//===========================================
//  Closing the Alert Box
//===========================================

// Alert close
$('#alertClose').click(function(){
  $('.alertBox').fadeOut();
});

//===========================================
//  Autocomplete Functions
//===========================================

//supply userName array
const userNames = ["Victoria Chambers", "Dale Byrd", "Dawn Wood","Dan Oliver", "Josh Sullivan"];

//Grab element to append to
const srchBar = document.getElementById("user_search-container");

function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
              b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
      x[i].parentNode.removeChild(x[i]);
    }
  }
}

/*execute a function when someone clicks in the document:*/
document.addEventListener("click", function (e) {
    closeAllLists(e.target);
  });
}

document.addEventListener("DOMContentLoaded", function() {
  autocomplete(document.getElementById("userSearch"), userNames);
});

//===========================================
//  Counter and Notification Dropdowns
//===========================================

$(document).ready(function () {

    // ANIMATEDLY DISPLAY THE NOTIFICATION COUNTER.
    $('#notiCounter')
        .css({ opacity: 0 })
        .text('2')  // ADD DYNAMIC VALUE (YOU CAN EXTRACT DATA FROM DATABASE OR XML).
        .css({ top: '-10px' })
        .animate({ top: '-2px', opacity: 1 }, 500);

    $('#alertIcon').click(function () {

        // TOGGLE (SHOW OR HIDE) NOTIFICATION WINDOW.
        $('#notifications').fadeToggle('fast', 'linear', function () {
            if ($('#notifications').is(':hidden')) {
                $('#alertIcon').css('background-color', '#7477BF');
            }
            // CHANGE BACKGROUND COLOR OF THE BUTTON.
            else $('#alertIcon').css('background-color', '#7477BF');
        });

        $('#notiCounter').fadeOut('slow');     // HIDE THE COUNTER.

        return false;
    });

    // HIDE NOTIFICATIONS WHEN CLICKED ANYWHERE ON THE PAGE.
    $(document).click(function () {
        $('#notifications').hide();

        // CHECK IF NOTIFICATION COUNTER IS HIDDEN.
        if ($('#notiCounter').is(':hidden')) {
            // CHANGE BACKGROUND COLOR OF THE BUTTON.
            $('#alertIcon').css('background-color', '#7477BF');
        }
    });

    $('#notifications').click(function () {
        return false;       // DO NOTHING WHEN CONTAINER IS CLICKED.
    });
});

//===========================================
//  Creating and Implementing Local Storage
//===========================================

// Create const for saved values
const emailPref = localStorage.getItem('email-notification');
const setProfile = localStorage.getItem('set-public');
const tmznSettings = localStorage.getItem('timezone');

// Grab each dom item per ID
const emailNotes = document.getElementById("email-notification");
const setPublic = document.getElementById("set-public");
const timezone = document.getElementById("timezone");

// Sets value of ID based on saved profile settings
const loadSettings = function() {
  if (emailPref !== null) {
    emailNotes.checked = (emailPref === 'true');
  }
  if (setProfile !== null) {
    setPublic.checked = (setProfile === 'true');
  }
  if (tmznSettings !== null) {
    timezone.value = tmznSettings;
  }
}

// Check if localStorage is available
function testStorage() {
  var test = 'test';
    try {
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch(e) {
      return false;
  }
}

// Runs function if localStorage is enabled
if(testStorage() === true){
  // Run function after DOM loaded
  document.addEventListener("DOMContentLoaded", function() {

    // Save settings to local storage when save button pushed
    document.getElementById("save").addEventListener("click", function() {
      localStorage.setItem('email-notification', emailNotes.checked);
      localStorage.setItem('set-public', setPublic.checked);
      localStorage.setItem('timezone', timezone.value);
      alert('Settings successfully saved!');
    });

    // Send all settings back to default values when cancel pushed
  document.getElementById("cancel").addEventListener("click", function() {
      const cancel = confirm('Are you sure you want to cancel changes?');

      if (cancel) {
        localStorage.setItem('email-notification', emailNotes.checked = null)
        localStorage.setItem('set-public', setPublic.checked = null)
        localStorage.setItem('timezone', timezone.value = 'select-timezone')
      }
    });

    // Run function to load correct settings
    loadSettings();
  });
}

//===========================================
//  Message Form Validation
//===========================================

function messageValidation() {
  const userSearch = document.getElementById('userSearch').value;
  const userMsg = document.getElementById('userMsg').value;
  if (userSearch == "") {
    alert("Please enter a user name.");
    return false;
  }
    if (userMsg == "") {
    alert("Please add a message.");
    return false;
  }
    if (userMsg && userSearch != "") {
    alert("Thank you, your message has been sent!")
    return true;
  }
}
