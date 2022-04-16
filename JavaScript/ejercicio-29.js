`use strict`;
/**
 * #################
 * ## Ejercicio 5 ##
 * #################
 *
 * A partir del string dado crea un array en el que cada una de las distintas palabras
 * (palabras, no letras) del string sea una posición del array.
 *
 *  - No debe haber letras mayúsculas.
 *
 *  - El array no debe contener signos de puntuación, SOLO LETRAS.
 *
 *  - El array debe estar ordenado por orden alfabético inverso, ¿método "sort"? ;)
 *
 * Resultado esperado: ["sit", "lorem", "ipsum", "elit", "dolor", "consectetur", "amet", "adipisicing"]
 *
 */
const text = '¡Lorem Ipsum Dolor Sit Amet, Consectetur Elit Adipisicing!';
const texto = text
  .toLowerCase()
  .replaceAll('!', '')
  .replaceAll('¡', '')
  .replaceAll(',', '');
const texto_array = texto.split(' ');
// orden alfabético
const texto_array_ordenado = texto_array.sort();
// orden alfabético inverso
const texto_array_ordenado_inverso = texto_array_ordenado.reverse();
console.log(texto_array_ordenado_inverso);
