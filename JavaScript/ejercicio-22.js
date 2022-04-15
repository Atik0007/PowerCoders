`use strict`;
/* #################
 * ## Ejercicio 1 ##
 * #################
 *
 * Dado el array = [1, 3, 9, 14, 17, 22]
 *
 *  - Iterar por todos los elementos dentro de un array utilizando "while" y mostrarlos en pantalla.
 *
 *  - Iterar por todos los elementos dentro de un array utilizando "for" y mostrarlos en pantalla.
 *
 *  - Iterar por todos los elementos dentro de un array utilizando "for of" y mostrarlos en pantalla.
 *
 *  - Mostrar todos los elementos dentro de un array sumándole uno a cada uno.
 *
 *  - Generar otro array con todos los elementos del primer array incrementados en 1. ¿Con el método push?
 *
 *  - Calcular el promedio.
 *
 */
// while

let numeros = [1, 3, 9, 14, 17, 22];
i = 0;
while (i < numeros.length) {
  console.log(numeros[i]);
  i++;
}

// for
for (let j = 0; j < numeros.length; j++) {
  console.log(numeros[j]);
}

// for of
for (let num of numeros) {
  console.log(num);
}

// sumar uno a cada uno
for (let num of numeros) {
  console.log(num + 1);
}

// push

let push = [];
for (let num of numeros) {
  push.push(num + 1);
}
console.log(push);

//Calcular el promedio.
let suma = 0;
for (let num_1 of numeros) {
  suma += num_1;
}
console.log(suma / numeros.length);
