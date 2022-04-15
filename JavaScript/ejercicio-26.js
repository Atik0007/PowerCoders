`use strict`;
/* #################
 * ## Ejercicio 2 ##
 * #################
 *
 * - Cuenta el número de letras "r" en el siguiente fragmento de texto:
 *   "Tres tristes tigres tragan trigo en un trigal."
 *
 * - Ahora cuenta las "t". Debes contar las mayúsculas y las minúsculas.
 *
 * - Sustituye todas las "e" por "i".
 *
 */

let texto = `Tres tristes tigres tragan trigo en un trigal.`;
let contador_r = 0;
let contador_t = 0;
let e = [];
for (let i = 0; i < texto.length; i++) {
  if (texto[i] == 'r') {
    contador_r++;
  }
  if (texto[i] == 't' || texto[i] == 'T') {
    contador_t++;
  }
}
console.log(contador_r);
console.log(contador_t);

// Sustituye todas las "e" por "i".
for (let i = 0; i < texto.length; i++) {
  if (texto[i] == 'e') {
    e.push(i);
  }
}
for (let i = 0; i < e.length; i++) {
  texto = texto.substring(0, e[i]) + 'i' + texto.substring(e[i] + 1);
}
console.log(texto);
// easy Mode
console.log(texto.replace('e', 'i'));
