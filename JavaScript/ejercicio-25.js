`use strict`;
/**
 * #################
 * ## Ejercicio 1 ##
 * #################
 *
 * Crea una función que reciba una cadena de texto y la muestre poniendo
 * el signo "–" entre cada carácter sin usar el método replace ni replaceAll.
 *
 * Por ejemplo, si tecleo "hola qué tal", deberá salir "h-o-l-a- -q-u-e- -t-a-l".
 *
 */

let string = 'hola qué tal';
let resultado = '';
for (let i = 0; i < string.length; i++) {
  resultado += string[i];
  if (i < string.length - 1) {
    resultado += '-';
  }
}
console.log(resultado);
