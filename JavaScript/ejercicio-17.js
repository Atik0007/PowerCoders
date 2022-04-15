`use strict`;
/* #################
 * ## Ejercicio 4 ##
 * #################
 *
 * Define una función a la que le pases como argumento un número y nos diga
 * si dicho número es primo (true) o no (false).
 *
 * [Opcional]: crea una segunda función a la que le pases como parámetro un nº
 * máximo y nos muestre por consola todos los nº primos del 2 al nº que hemos
 * pasado como argumento. La función que creaste al principio comprueba si un
 * número es primo o no, quizás puedas hacer uso de ella.
 *
 */
function esPrimo(numero) {
  let contador = 0;
  for (let i = 1; i <= numero; i++) {
    if (numero % i === 0) {
      contador++;
    }
  }
  if (contador === 2) {
    return true;
  } else {
    return false;
  }
}
console.log(esPrimo(8));
