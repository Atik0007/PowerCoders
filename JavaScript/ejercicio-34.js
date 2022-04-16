`use strict`;
/**
 * #################
 * ## Ejercicio 4 ##
 * #################
 *
 * Ordena el siguiente array numérico de menor a mayor: [4, 10, 7, 1, 2]
 *
 * ¡No se puede usar el método sort()!
 *
 */
const numbers = [4, 10, 7, 1, 2];
let aux = 0;
for (let i = 0; i < numbers.length; i++) {
  for (let j = 0; j < numbers.length - 1; j++) {
    if (numbers[j] > numbers[j + 1]) {
      aux = numbers[j];
      numbers[j] = numbers[j + 1];
      numbers[j + 1] = aux;
    }
  }
}
console.log(numbers);
