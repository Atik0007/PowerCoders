`use strict`;
/**
 * #################
 * ## Ejercicio 2 ##
 * #################
 *
 * Algoritmo que calcule la letra del DNI:
 *
 * - El número debe ser entre 10000000 y 99999999.
 *
 * - Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
 *   ¿Qué ocurre cuando obtenemos un valor NaN? JavaScript lo considera un número. Busca una
 *   forma de comprobar que el valor es realmente numérico.
 *
 * - Debemos calcular el resto de la división entera entre el DNI y
 *   el número 23.
 *
 * - Según el resultado, de 0 a 22, le corresponderá una letra de las
 *   siguientes:  [T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E]
 *
 */
let dni = prompt('Introduce tu DNI');
let letras = [
  'T',
  'R',
  'W',
  'A',
  'G',
  'M',
  'Y',
  'F',
  'P',
  'D',
  'X',
  'B',
  'N',
  'J',
  'Z',
  'S',
  'Q',
  'V',
  'H',
  'L',
  'C',
  'K',
  'E',
];
let letra = '';
if (isNaN(dni)) {
  alert('No es un número');
} else {
  let numero = parseInt(dni);
  if (numero >= 10000000 && numero <= 99999999) {
    let resto = numero % 23;
    letra = letras[resto];
    alert(`Tu DNI es ${dni} y su letra es ${letra}`);
  } else {
    alert('El número no está entre 10000000 y 99999999');
  }
}
