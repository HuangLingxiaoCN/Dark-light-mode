const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

// Dark or Light Images
function imageMode(color) {
  image1.src = `img/undraw_Online_learning_${color}.svg`;
  image2.src = `img/undraw_teamwork_${color}.svg`;
  image3.src = `img/undraw_city_life_${color}.svg`;
}

// Toggle Dark Mode and Light Mode
function toggleMode(isDark) {
  nav.style.backgroundColor = isDark ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';
  textBox.style.backgroundColor = isDark ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)';
  toggleIcon.children[0].textContent = isDark ? 'Dark Mode' : 'Light Mode';
  isDark ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon') 
  : toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
  isDark ? imageMode('dark') 
  : imageMode('light');
}

// Switch Theme Dynamically
function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme-color', 'dark');
    toggleMode(true);
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme-color', 'light');
    toggleMode(false);
  }
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);

// Check Local Storage For Theme
const currentTheme = localStorage.getItem('theme-color');
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);

  if (currentTheme === 'dark') {
    toggleSwitch.checked = true;  // To automatically check the toggle switch
    toggleMode(true);
  }
}

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
// function myFunction() {
//   var x = document.querySelector('.icon');
//   if (x.className === "nav") {
//     x.className += " responsive";
//   } else {
//     x.className = "nav";
//   }
// }