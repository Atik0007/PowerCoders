`use strict`;
/* #################
 * ## Ejercicio 1 ##
 * #################
 *
 * - Crea un bucle "while" que recorra los números del 0 al 100 saltando de 10 en 10.
 *
 * - Posteriormente crea otro bucle "while" que recorra los números del 100 al 0 de
 *   25 en 25.
 */

// bucle "while" del 0 al 100 saltando de 10 en 10.
i = 0;
while (i < 101) {
  console.log(i);
  i += 10;
}

// bucle "while" del 100 al 0 de 25 en 25.
b = 100;
while (b >= 0) {
  console.log(b);
  b -= 25;
}
