`use strict`;
/**
 * #################
 * ## Ejercicio 2 ##
 * #################
 *
 * Dado el array [3, 4, 13, 5, 6, 8], muestra por consola qué numeros son pares
 * y qué números son impares.
 *
 * Haz lo mismo pero en este caso indica qué números son primos y cuales no.
 *
 * Por último, crea un nuevo array en el que los valores sean el doble del array
 * original.
 *
 */

let numeros = [3, 4, 13, 5, 6, 8];
let numeros_pares = [];
let numeros_impares = [];
let numeros_dobles = [];
// pares y impares
for (let num of numeros) {
  if (num % 2 == 0) {
    numeros_pares.push(num);
  } else {
    numeros_impares.push(num);
  }
}
console.log(numeros_pares);
console.log(numeros_impares);

// primos y no primos
function esPrimo(num) {
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}
for (let num_1 of numeros) {
  if (esPrimo(num_1)) {
    console.log(`${num_1} es primo`);
  } else {
    console.log(`${num_1} no es primo`);
  }
}

// dobles
for (let num_2 of numeros) {
  numeros_dobles.push(num_2 * 2);
}
console.log(numeros_dobles);
