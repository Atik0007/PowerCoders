`use strict`;
/* #################
 * ## Ejercicio 1 ##
 * #################
 *
 * Dada la siguiente API, obtén un array con el nombre de todas las provincias de España.
 *
 * - Resuélvelo con async / await.
 *
 * API: https://www.el-tiempo.net/api
 *
 */
const api = async () => {
  try {
    const response = await fetch(
      `https://www.el-tiempo.net/api/json/v2/provincias`
    );
    const data = await response.json();
    const provinces = data.provincias;
    const provincesNames = provinces.map(
      (province) => province.NOMBRE_PROVINCIA
    );
    console.log(provincesNames);
  } catch (error) {
    console.error(error);
  }
};
api();
