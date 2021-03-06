`use strict`;
/**
 * #################
 * ## Ejercicio 3 ##
 * #################
 *
 * Hemos visto como podemos recorrer automáticamente un array empleando el bloque
 * for y la propiedad nombreArray.length. Pues de igual modo que recorremos arrays
 * es posible recorrer strings utilizando ese mismo método.
 *
 * Tomemos como referencia el string "JavaScript mola mucho". En este ejercicio
 * deberás mostrar por consola el número total de caracteres que tiene este string
 * SIN CONTAR los espacios. El resultado debería ser 19 para el string anterior.
 *
 */

let string = 'JavaScript mola mucho';
let total = 0;
for (let i = 0; i < string.length; i++) {
  if (string[i] != ' ') {
    total++;
  }
}
console.log(total);
