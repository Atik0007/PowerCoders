`use strict`;
/**
 * #################
 * ## Ejercicio 3 ##
 * #################
 *
 * Crea una función que imprima X resultados aleatorios de una
 * quiniela 1 X 2. Ejemplo, si le decimos que imprima 14 resultados:
 *
 *      Resultado 1: 1
 *      Resultado 2: X
 *      Resultado 3: 2
 *      (...)
 *      Resultado 14: 2
 *
 */
function quiniela(numero) {
  for (let i = 0; i < numero; i++) {
    let resultado = Math.floor(Math.random() * 3) + 1;
    if (resultado === 3) {
      resultado = 'X';
    }
    console.log(`Resultado ${i + 1}: ${resultado}`);
  }
  return resultado;
}
console.log(quiniela(14));
