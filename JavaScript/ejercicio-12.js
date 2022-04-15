`use strict`;
/* #################
 * ## Ejercicio 4 ##
 * #################
 *
 * Escribe un programa que permita al usuario concatenar elementos en un string.
 * El programa finalizará cuando el usuario introduzca el string "fin", y se
 * mostrará por consola el contenido de la variable.
 *
 */
let cadena = '';
let elemento;
do {
  elemento = prompt('Introduce un elemento');
  cadena += elemento;
} while (elemento !== 'fin');
console.log(cadena);
