`use strict`;
/**
 * #################
 * ## Ejercicio 3 ##
 * #################
 *
 * ¿Te suena el juego piedra, papel o tijera? Pues manos a la obra.
 *
 *      - Tu oponente será la computadora.
 *
 *      - El ganador se decide al mejor de 3.
 *
 *      - Almacena la puntuación del jugador y de la computadora
 *        en el objeto Game como propiedades del mismo. Ejemplo:
 *
 *          const Game = {
 *              player: 0,
 *              computer: 0
 *          }
 *
 */

const Game = { player: 0, computer: 0 };
for (let i = 0; i < 3; i++) {
  const player = prompt('¿Piedra, papel o tijera?');
  const computer = Math.floor(Math.random() * 3);
  if (player === 'piedra') {
    if (computer === 0) {
      console.log('Empate');
    } else if (computer === 1) {
      console.log('Perdiste');
      Game.computer++;
    } else {
      console.log('Ganaste');
      Game.player++;
    }
  } else if (player === 'papel') {
    if (computer === 0) {
      console.log('Ganaste');
      Game.player++;
    } else if (computer === 1) {
      console.log('Empate');
    } else {
      console.log('Perdiste');
      Game.computer++;
    }
  } else if (player === 'tijera') {
    if (computer === 0) {
      console.log('Perdiste');
      Game.computer++;
    } else if (computer === 1) {
      console.log('Ganaste');
      Game.player++;
    } else {
      console.log('Empate');
    }
  } else {
    console.log('No has elegido ninguna opción');
  }
}
console.log(Game);
