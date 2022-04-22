`use strict`;

/* 

Crear un suelo de discoteca (maya de minimo 4 x 4 cuadrdos).
Cada cuadrado cambiará a un color aleatorio periódicamente

*/

const card = document.querySelectorAll('li');

// generate random color

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
card.forEach(function (card) {
  card.style.backgroundColor = getRandomColor();
});

// evry 1 sec change color

function changeColor() {
  card.forEach(function (card) {
    card.style.backgroundColor = getRandomColor();
  });
}
setInterval(changeColor, 1000);
