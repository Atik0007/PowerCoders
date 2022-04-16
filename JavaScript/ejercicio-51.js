`use strict`;
/**
 * #################
 * ## Ejercicio 4 ##
 * #################
 *
 * Obtener un array con los todos personajes. Debe existir la posibilidad
 * de filtrar por "status" y por "species", así que lo ideal será agregar
 * a la función asíncrona dichos parámetros. Puedes asignarles como valor
 * por defecto un string vacío para evitar problemas: (status = '', species = '')
 *
 * ¡No utilizar el método filter!
 *
 * De nuevo necesitarás la ayuda de los query strings. En este caso: "page",
 * "status" y "species". Ejemplo: "?page=2&status=alive&species=alien".
 *
 *  - status: "alive", "dead", "unknown".
 *
 *  - species: "human", "alien".
 *
 *
 * API: https://rickandmortyapi.com/
 *
 */
const api = async (status = '', species = '') => {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?${status}${species}`
    );
    const data = await response.json();
    const characters = data.results;
    console.log(characters);
  } catch (error) {
    console.error(error);
  }
};
api();
