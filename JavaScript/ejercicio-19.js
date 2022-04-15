`use strict`;
/**
 * ################
 * ## Pirámide 2 ##
 * ################
 *
 * Crea una función que reciba una altura y dibuje una figura
 * como la que sigue:
 *
 *    1
 *    22
 *    333
 *    4444
 *    55555
 *
 */
function piramide(altura) {
  let asteriscos = '';
  for (let i = 1; i <= altura; i++) {
    for (let j = 1; j <= i; j++) {
      asteriscos += i;
    }
    console.log(asteriscos);
    asteriscos = '';
  }
}
piramide(5);
