const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

// getElementsByClassName and other DOM methods with plural Elements
// returns html collection like an array.
const navIcon = document.getElementsByClassName('icon')[0]; 

let isNavBarOpen = false;

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

// Check Local Storage For Theme
const currentTheme = localStorage.getItem('theme-color');
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);

  if (currentTheme === 'dark') {
    toggleSwitch.checked = true;  // To automatically check the toggle switch
    toggleMode(true);
  }
}

// toggle mobile navBar
function toggleNavBar() {
  let navBar = document.getElementsByClassName('nav-bar');
  if (!isNavBarOpen) {
    // Here navBar is not an array but a html collection.
    Array.from(navBar).forEach((nav) => {
      nav.style.display = 'block';
    });
    nav.style.backgroundColor = 'rgb(84, 104, 151, 50%)';
    isNavBarOpen = true;
  } else {
    Array.from(navBar).forEach((nav) => {
      nav.style.display = 'none';
    });
    nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    isNavBarOpen = false;
  }
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);
navIcon.addEventListener('click', toggleNavBar);