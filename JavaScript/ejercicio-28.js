`use strict`;
/* #################
 * ## Ejercicio 4 ##
 * #################
 *
 * Crea un programa que compruebe si un string es palíndromo, es decir, que se lee igual
 * del derecho que del revés. Por ejemplo, "Arriba la birra" es un palíndromo.
 *
 * Nota: el string que utilizaremos como input no debe tener caracteres no presentes
 * en el alfabeto inglés ni símbolos.
 *
 */
let texto = 'arriba la birra';
function palindromo(text) {
  let texto = text.toLowerCase().replaceAll(' ', '');
  let texto_reves = texto.split('').reverse().join('');
  if (texto == texto_reves) {
    return true;
  } else {
    return false;
  }
}
if (palindromo(texto)) {
  console.log(`${texto} es un palíndromo`);
} else {
  console.log(`${texto} no es un palíndromo`);
}
