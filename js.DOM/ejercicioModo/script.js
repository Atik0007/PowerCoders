'use strict';
// dark and light mode with html local storage
const html = document.querySelector('html');
const darkMode = document.querySelector('#moon');
const lightMode = document.querySelector('#sun');
const mix = document.querySelector('#mix');

// one button dark and light mode with html local storage
mix.addEventListener('click', () => {
  html.classList.toggle('dark');
  if (html.classList.contains('dark')) {
    document.querySelector('h1').innerHTML = 'Dark Mode';
  } else {
    document.querySelector('h1').innerHTML = 'Light Mode';
  }
  toggleDisabled(darkMode);
  toggleDisabled(lightMode);
});

// dark boton
darkMode.addEventListener('click', () => {
  document.querySelector('h1').innerHTML = 'Dark Mode';
  html.classList.add('dark');
  darkMode.setAttribute('disabled', 'true');
  lightMode.removeAttribute('disabled');
});

// light boton
lightMode.addEventListener('click', () => {
  document.querySelector('h1').innerHTML = 'Light Mode';
  html.classList.remove('dark');
  darkMode.removeAttribute('disabled');
  lightMode.setAttribute('disabled', 'true');
});

if (html.classList.contains('dark')) {
  darkMode.setAttribute('disabled', 'true');
} else {
  lightMode.setAttribute('disabled', 'true');
}

function toggleDisabled(button) {
  if (button.disabled) {
    button.removeAttribute('disabled');
  } else {
    button.setAttribute('disabled', 'true');
  }
}
