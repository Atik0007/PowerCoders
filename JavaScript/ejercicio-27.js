`use strict`;
/**
 * #################
 * ## Ejercicio 3 ##
 * #################
 *
 * Crea una función que pida una cadena de texto y la devuelva al revés.
 * Es decir, si tecleo "hola que tal" deberá mostrar "lat euq aloh".
 *
 */
function reverse(cadena) {
  return cadena.split('').reverse().join('');
}
console.log(reverse('hola que tal'));
