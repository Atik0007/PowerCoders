'use strict';
/**
 * #################
 * ## 👻 B O O 👻 ##
 * #################
 *
 * Haz que, cada segundo que pase, el div "boo" aparezca ubicado en una
 * posición aleatoria de la ventana y que el color del body cambie, también
 * de forma aleatoria "rgb(?, ?, ?)".
 *
 * ¡Ojo! No dejes que Boo se salga de los márgenes de la ventana, debemos
 * poder ver a Boo sin hacer scroll en ningún momento.
 *
 * element.getBoundingClientRect() --> devuelve una serie de propiedades
 * del nodo seleccionado, entre ellas, la altura y el ancho del elemento.
 *
 * Recuerda también que window.innerHeight nos da la altura del viewport
 * y window.innerWidth, el ancho
 *
 * Bonus point --> haz que aparezcan más emojis acompañando a Boo. Para ello
 *                 deberás crear más divs y seleccionarlos a todos. Esto
 *                 requerirá a mayores que cambies cositas en el código.
 *
 */

const boo = document.querySelector('.boo');
const body = document.querySelector('body');

// change the position of boo
function moveBoo() {
  const randomX = Math.floor(
    Math.random() * (window.innerWidth - boo.offsetWidth)
  );
  const randomY = Math.floor(
    Math.random() * (window.innerHeight - boo.offsetHeight)
  );
  boo.style.left = `${randomX}px`;
  boo.style.top = `${randomY}px`;
}
// change the color of body
function changeColor() {
  const randomR = Math.floor(Math.random() * 256);
  const randomG = Math.floor(Math.random() * 256);
  const randomB = Math.floor(Math.random() * 256);
  body.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
}

// evry 1 second change the position of boo and the color of body
setInterval(() => {
  moveBoo();
  changeColor();
}, 1000);

//  add more emojis
const emojis = [
  '🐶',
  '🐱',
  '🐭',
  '🐹',
  '🐰',
  '🦊',
  '🐻',
  '🐼',
  '🐨',
  '🐯',
  '🦁',
  '🐮',
  '🐷',
  '🐸',
  '🐵',
  '🙈',
  '🙉',
  '🙊',
  '🐒',
  '🐔',
  '🐧',
  '🐦',
  '🐤',
  '🐣',
  '🐥',
  '🦆',
  '🦅',
  '🦉',
  '🦇',
  '🐺',
  '🐗',
  '🐴',
  '🦄',
  '🐝',
  '🐛',
  '🦋',
  '🐌',
  '🐚',
  '🐞',
  '🐜',
  '🦗',
  '🕷',
  '🕸',
  '🦂',
  '🦟',
  '🦠',
  '🐢',
  '🐍',
  '🦎',
  '🦖',
  '🦕',
  '🐙',
  '🦑',
  '🦐',
  '🦀',
  '🐡',
  '🐠',
  '🐟',
  '🐬',
  '🐳',
  '🐋',
  '🐊',
  '🐆',
  '🐅',
  '🐃',
  '🐂',
  '🐄',
  '🐪',
  '🐫',
];
// add and move emojis to random position
function addAndMoveEmojis() {
  const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
  const newEmoji = document.createElement('div');
  newEmoji.innerHTML = randomEmoji;
  newEmoji.classList.add('emoji');
  document.body.appendChild(newEmoji);
  const randomX = Math.floor(
    Math.random() * (window.innerWidth - newEmoji.offsetWidth)
  );
  const randomY = Math.floor(
    Math.random() * (window.innerHeight - newEmoji.offsetHeight)
  );
  newEmoji.style.left = `${randomX}px`;
  newEmoji.style.top = `${randomY}px`;
}

// every 1 seconds add and move emojis
setInterval(addAndMoveEmojis, 1000);
