`use strict`;
/* #################
 * ## Ejercicio 2 ##
 * #################
 *
 * Dada la siguiente API, obtén un array con el nombre de todas las provincias de España.
 *
 * Documentación: https://www.el-tiempo.net/api
 *
 */

fetch(`https://www.el-tiempo.net/api/json/v2/provincias`)
  .then((response) => response.json())
  .then((data) => {
    const provinces = data.provincias;
    const provincesNames = provinces.map(
      (province) => province.NOMBRE_PROVINCIA
    );
    console.log(provincesNames);
  })
  .catch((error) => console.log(error));
