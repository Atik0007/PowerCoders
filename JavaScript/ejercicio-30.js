`use strict`;
/**
 * #################
 * ## Ejercicio 6 ##
 * #################
 *
 * Crea una función que interprete el contenido entre paréntisis de
 * un string dado.
 *
 *      - El programa debe devolver el texto rodeando por paréntisis.
 *
 *      - Si no hay paréntisis se devolverá un string vacío.
 *
 *      - Si existe paréntisis de apertura pero no de cierre se devolverá
 *        el contenido desde el primer paréntisis hasta el final del string.
 *
 *      - Si existe paréntisis de cierre pero no de apertura se devolverá
 *        el contenido desde el inicio hasta el paréntisis de cierre.
 *
 * Por ejemplo, si el string fuera "Hola (que) tal" se mostrará el "que".
 *
 * Si fuera "Hola (que tal" se devolvería "que tal".
 *
 */
let texto = 'Hola (que) tal';
function interpretar(text) {
  let leftParenthesis = text.indexOf('(');
  let rightParenthesis = text.lastIndexOf(')');
  if (leftParenthesis > -1 && rightParenthesis > -1) {
    return text.substring(leftParenthesis + 1, rightParenthesis);
  } else if (leftParenthesis > rightParenthesis) {
    return text.slice(leftParenthesis + 1, text.length);
  } else if (leftParenthesis < rightParenthesis) {
    return text.slice(leftParenthesis + 1, rightParenthesis);
  } else {
    return '';
  }
}
console.log(interpretar(texto));
