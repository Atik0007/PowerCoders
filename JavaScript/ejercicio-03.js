`use strict`;
/* #################
 * ## Ejercicio 3 ##
 * #################
 *
 * Escribir un programa que dados 2 valores de entrada imprima siempre la división
 * del mayor entre el menor.
 *
 * Bonus point: en caso de que el número menor sea 0 muestra un mensaje que indique
 *              que no se puede dividir entre 0.
 *
 */
let value1 = 10;
let value2 = 5;
if (value1 == 0 || value2 == 0) {
  console.log(`No se puede dividir entre 0`);
} else if (value1 > value2) {
  console.log(value1 / value2);
} else if (value2 > value1) {
  console.log(value2 / value1);
} else {
  console.log(`Los valores ingresados son iguales`);
}
