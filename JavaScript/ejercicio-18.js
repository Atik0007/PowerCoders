`use strict`;
/* ################
 * ## Pirรกmide 1 ##
 * ################
 *
 * Utiliza el bucle "for" para crear las siguiente figura con asteriscos (*). Debe existir
 * una variable que permita modificar la altura de la pirรกmide. Para el ejemplo expuesto a
 * continuaciรณn se ha tomado como referencia una altura de 4:
 *
 * - Figura 1:
 *
 *      ๐
 *      ๐๐
 *      ๐๐๐
 *      ๐๐๐๐
 */
for (let i = 1; i <= 4; i++) {
  let asteriscos = '';
  for (let j = 1; j <= i; j++) {
    asteriscos += '๐';
  }
  console.log(asteriscos);
}
