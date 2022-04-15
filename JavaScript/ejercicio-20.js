`use strict`;
/**
 * ################
 * ## Pirámide 3 ##
 * ################
 *
 * Crea una función que reciba una altura y dibuje una figura
 * como la que sigue:
 *
 *    1
 *    12
 *    123
 *    1234
 *    12345
 *
 */
function piramide(altura) {
  let asteriscos = '';
  for (let i = 1; i <= altura; i++) {
    asteriscos += i;
    console.log(asteriscos);
  }
}
piramide(5);
