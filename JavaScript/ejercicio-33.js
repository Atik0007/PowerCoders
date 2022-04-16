`use strict`;
/**
 * #################
 * ## Ejercicio 3 ##
 * #################
 *
 * Crea una función que reciba como parámetro un array cualquiera y retorne
 * otro array con los elementos del primero en orden inverso.
 *
 * ¡No vale utilizar el método "reverse"!
 *
 */
const colors = ['blue', 'yellow', 'black', 'pink'];
const reverseColors = [];
for (let i = colors.length - 1; i >= 0; i--) {
  reverseColors.push(colors[i]);
}
console.log(reverseColors);
