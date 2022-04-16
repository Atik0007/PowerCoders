`use strict`;
/**
 * #################
 * ## Ejercicio 1 ##
 * #################
 *
 * Crea una función "alarm" que reciba como argumento un número de
 * segundos.
 *
 * La función deberá mostrar por consola una cuenta atrás hasta llegar
 * a 0, en ese momento muestra un mensaje que indique que la alarma está
 * sonando.
 *
 */

const alarm = (seconds) => {
  let count = seconds;
  while (count > 0) {
    console.log(count);
    count--;
  }
  console.log('Alarma sonando');
};
alarm(10);
