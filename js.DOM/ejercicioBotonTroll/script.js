'use strict';
// when the a tag is hover, it well move the a tag to the random position on the screen

const aTag = document.querySelector('button');
const body = document.querySelector('body');

// get the width and height of the screen
function moveAtag() {
  const randomX = Math.floor(
    Math.random() * (window.innerWidth - aTag.offsetWidth)
  );
  const randomY = Math.floor(
    Math.random() * (window.innerHeight - aTag.offsetHeight)
  );
  aTag.style.left = `${randomX}px`;
  aTag.style.top = `${randomY}px`;
}
moveAtag();
// when the mouse is over the button, it will move the button to the random position on the screen
aTag.addEventListener('mouseover', moveAtag);

// when button is move, it will change the background of buttoncolor randomly
function changeColor() {
  const randomColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
    Math.random() * 255
  )}, ${Math.floor(Math.random() * 255)})`;
  aTag.style.backgroundColor = randomColor;
}
aTag.addEventListener('mousemove', changeColor);

// when the button is clicked, will stop the button from moving and change type of button
function stopMove() {
  aTag.removeEventListener('mouseover', moveAtag);
  aTag.removeEventListener('mousemove', changeColor);
  aTag.innerHTML = 'Good job';
}
aTag.addEventListener('click', stopMove);
