/* Haz que al hacer click en un elemento de la lista,
ese elemento cambie de color según las teclas pulsadas:

ctrl: rojo
ctrl + alt: amarillo
alt: verde
alt + shift: cyan
shift: azul
shit + ctrl: magenta
shift + alt + ctrl: negro

ninguna: aleatorio

*/
`use strict`;

const elemento = document.querySelectorAll(`li`);

function getRandomMax(max) {
  return Math.round(Math.random() * max);
}

function getRandomDarkColor() {
  return `rgb(${getRandomMax(250)},${getRandomMax(250)},${getRandomMax(250)})`;
}

//on click color text change
elemento.forEach((element) => {
  element.addEventListener(`click`, (e) => {
    if (e.ctrlKey && e.altKey && e.shiftKey) {
      return (element.style.color = `black`);
    } else if (e.shiftKey && e.ctrlKey) {
      return (element.style.color = `black`);
    } else if (e.ctrlKey && e.altKey) {
      return (element.style.color = `magenta`);
    } else if (e.ctrlKey) {
      return (element.style.color = `red`);
    } else if (e.altKey) {
      return (element.style.color = `yellow`);
    } else if (e.shiftKey) {
      return (element.style.color = `cyan`);
    } else {
      return (element.style.color = getRandomDarkColor());
    }
  });
});
