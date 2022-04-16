`use strict`;
/**
 * #################
 * ## Ejercicio 2 ##
 * #################
 *
 * Utiliza el método filter para dejar pasar únicamente los nº
 * impares y mayores que 5.
 *
 */
const nums = [1, 5, 23, 4, 12, 45, 78, 8, 9, 10, 11];
const newNums = nums.filter((num) => num % 2 !== 0 && num > 5);
console.log(newNums);
