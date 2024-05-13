
const checkbox = document.getElementById("status");

// Add event listener to the switch
checkbox.addEventListener('change', function() {
  // Check if the switch is checked or not
  if (checkbox.checked) {
    // Enable dark mode
    enableDarkMode();
  } else {
    // Disable dark mode
    disableDarkMode();
  }
});

// Function to enable dark mode
function enableDarkMode() {
  var darkModeButton = document.querySelector('.dark-body');
  var footer = document.querySelector('.foot-cont');
  var body = document.querySelector('.middle');

  body.classList.add("dark-body");


  // Store the dark mode state in local storage
  localStorage.setItem('darkMode', 'enabled');
}

// Function to disable dark mode
function disableDarkMode() {
  var body = document.querySelector('.middle');
  var footer = document.querySelector('.foot-cont');

  body.classList.remove('dark-body');
  footer.classList.remove('dark-body');
  
  var tassk = document.querySelectorAll('.task');
  for (var i = 0; i < tassk.length; i++) {
    tassk[i].classList.remove("dark-body");
  }

  // Remove the dark mode state from local storage
  localStorage.removeItem('darkMode');
}

// Check if the dark mode state is stored in local storage
var darkModeState = localStorage.getItem('darkMode');

// Set the initial state of the dark mode switch based on the stored value
if (darkModeState === 'enabled') {
  checkbox.checked = true;
  enableDarkMode();
} else {
  checkbox.checked = false;
  disableDarkMode();
}
