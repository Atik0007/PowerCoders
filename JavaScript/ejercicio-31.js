`use strict`;
/* #################
 * ## Ejercicio 1 ##
 * #################
 *
 * Crea un programa que simule las tiradas de un dado:
 *
 *      - El dado debe generar en cada tirada un valor entre 1 y 6 (incluídos).
 *
 *      - En cada tirada mostrar el valor del dado y el total acumulado. Por ejemplo:
 *        "Tirada nº 4: ha salido un 6, tienes un total de 15 puntos"
 *
 *      - Cuando el total de tiradas supere o iguale los 100 puntos muestra
 *        un mensaje indicando que se han alcanzado los 100 puntos y que el juego
 *        ha finalizado.
 *
 */

let puntos = 0;
let tiradas = 0;
for (let i = 0; i < 100; i++) {
  tiradas++;
  let dado = Math.floor(Math.random() * 6) + 1;
  puntos += dado;
  console.log(
    `Tirada nº ${tiradas}: ha salido un ${dado}, tienes un total de ${puntos} puntos`
  );
  if (puntos >= 100) {
    console.log(`Has alcanzado los 100 puntos, has ganado`);
    break;
  }
}
