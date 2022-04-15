`use strict`;
/* #################
 * ## Ejercicio 6 ##
 * #################
 *
 * Crea una calculadora con "if" que opere con dos números. La calculadora
 * utilizará la variable "option" para decidir el tipo de operación a realizar.
 * Debe poder sumar, restar, multiplicar y dividir. A mayores debe permitir
 * elevar el nº A a la potencia de B.
 *
 * Bonus point: no se puede dividir entre 0.
 *
 */
let option = '-';
let a = 10;
let b = 2;

if (option === '+') {
  console.log(`${a} + ${b} = ${a + b}`);
} else if (option === '-') {
  console.log(`${a} - ${b} = ${a - b}`);
} else if (option === '*') {
  console.log(`${a} * ${b} = ${a * b}`);
} else if (option === `**`) {
  console.log(`${a} ** ${b} = ${a ** b}`);
} else if (option === '/') {
  if (b === 0) {
    console.log(`No se puede dividir entre 0`);
  }
  console.log(`${a} / ${b} = ${a / b}`);
}
