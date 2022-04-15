`use strict`;
/* #################
 * ## Ejercicio 5 ##
 * #################
 *
 * Escribir un programa que, dados 3 números los cuales signican una fecha (día, mes,
 * año), compruebe que la fecha sea. Si no es válida, que imprima un mensaje de error,
 * y si es válida, que imprima el mes con su nombre.
 *
 * Se considerará que:
 *
 *  - Todos los meses tienen 31 días.
 *
 *  - Todos los años tienen 5 meses (enero, febrero, marzo, abril, mayo).
 *
 *  - Solo serán válidos los años del 0 al 2030.
 *
 */

let day = 7;
let month = 7;
let year = 2020;

if (day > 31 || day < 1) {
  console.log(`El día ${day} no es válido`);
} else if (month > 12 || month < 1) {
  console.log(`El mes ${month} no es válido`);
} else if (year > 2030 || year < 0) {
  console.log(`El año ${year} no es válido`);
} else {
  switch (month) {
    case 1:
      console.log(`Enero`);
      break;
    case 2:
      console.log(`Febrero`);
      break;
    case 3:
      console.log(`Marzo`);
      break;
    case 4:
      console.log(`Abril`);
      break;
    case 5:
      console.log(`Mayo`);
      break;
    case 6:
      console.log(`Junio`);
      break;
    case 7:
      console.log(`Julio`);
      break;
    case 8:
      console.log(`Agosto`);
      break;
    case 9:
      console.log(`Septiembre`);
      break;
    case 10:
      console.log(`Octubre`);
      break;
    case 11:
      console.log(`Noviembre`);
      break;
    case 12:
      console.log(`Diciembre`);
      break;
  }
}
