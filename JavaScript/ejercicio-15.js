`use strict`;
/**
 * #################
 * ## Ejercicio 2 ##
 * #################
 *
 * Utiliza lo aprendido sobre funciones para reestructurar el ejercicio de la bomba.
 * Crea la función "deactivateBomb" con los parámetros "limit" y "bombCode":
 *
 *  - limit: nº de intentos que le daremos al usuario.
 *
 *  - bombCode: código de desactivación.
 *
 */

function deactivateBomb(limit, bombCode) {
  let numeroUsuario;
  for (let intentos = limit; intentos > 0; ) {
    numeroUsuario = Number(prompt('Introduce un número'));
    if (numeroUsuario === bombCode) {
      break;
    } else if (numeroUsuario !== bombCode) {
      intentos--;
      alert(`te quedan ${intentos} intentos `);
    }
  }
  if (numeroUsuario !== bombCode) {
    alert('La bomba ha explotado');
  } else {
    alert('La bomba ha sido desactivada');
  }
}
console.log(deactivateBomb(3, 1234));
