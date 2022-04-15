`use strict`;
/* #################
 * ## Ejercicio 8 ##
 * #################
 *
 * Tenemos 3 equipos de baloncesto. Estos son los resultados de cada equipo
 * en los últimos 4 partidos:
 *
 *      - Equipo A: 35, 46, 29, 58
 *      - Equipo B: 46, 72, 26, 36
 *      - Equipo C: 38, 62, 47, 44
 *
 * Muestra por consola el equipo con la mejor media en estos cuatro partidos.
 * Debes mostrar el nombre del equipo y la media de dicho equipo.
 *
 */
let equipoA = (35, 46, 29, 58) / 4;
let equipoB = (46, 72, 26, 36) / 4;
let equipoC = (38, 62, 47, 44) / 4;
if (equipoA > equipoB && equipoA > equipoC) {
  console.log(`El equipo A tiene una media de ${equipoA}`);
} else if (equipoB > equipoC) {
  console.log(`El equipo B tiene una media de ${equipoB}`);
} else {
  console.log(`El equipo C tiene una media de ${equipoC}`);
}
