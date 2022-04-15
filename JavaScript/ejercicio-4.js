`use strict`;
/* #################
 * ## Ejercicio 4 ##
 * #################
 *
 * Escribir un programa que, dados tres valores, se indique cual es el mayor
 * de ellos.
 *
 */

let value1 = 10;
let value2 = 55;
let value3 = 333;

if (value1 > value2 && value1 > value3) {
  console.log(`El valor ${value1} es mayor`);
} else if (value2 > value1 && value2 > value3) {
  console.log(`El valor ${value2} es mayor`);
} else {
  console.log(`El valor ${value3} es mayor`);
}
