`use strict`;
/* #################
 * ## Ejercicio 2 ##
 * #################
 *
 * Utiliza un bucle "do...while" para dar al usuario 3 intentos para acertar una contraseña.
 *
 * Deberíamos salir del bucle si:
 *
 *  - El usuario acierta la contraseña.
 *
 *  - Los intentos llegan a 0.
 *
 * Cuando salgamos del bucle muestra un mensaje indicando si ha acertado o no.
 *
 */
let password = '12345';
let intentos = 3;
let passwordUsuario;
do {
  passwordUsuario = prompt('Introduce la contraseña');
  intentos--;
  alert(`Te quedan ${intentos} intentos`);
} while (passwordUsuario !== password && intentos > 0);
if (passwordUsuario === password) {
  console.log('Has acertado');
} else {
  console.log('Has fallado');
}
