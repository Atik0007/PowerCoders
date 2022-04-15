`use strict`;
/* ################
 * ## Pirámide 4 ##
 * ################
 *
 * Utiliza el bucle "for" para crear las siguiente figura con asteriscos (*). Debe existir
 * una variable que permita modificar la altura de la pirámide. Para el ejemplo expuesto a
 * continuación se ha tomado como referencia una altura de 4:
 *
 * - Figura:
 *
 *        * --> La relación entre altura y espacios sería "altura - 1".
 *       ** --> La relación entre altura y espacios sería "altura - 2".
 *      *** --> La relación entre altura y espacios sería "altura - 3".
 *     **** --> La relación entre altura y espacios sería "altura - 4".
 */
for (let i = 1; i <= 4; i++) {
  let asteriscos = '';
  for (let j = 1; j <= i; j++) {
    asteriscos += '*';
  }
  console.log(asteriscos);
}
