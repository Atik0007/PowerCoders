`use strict`;
/* #################
 * ## Ejercicio 2 ##
 * #################
 *
 * Dada la siguiente API, obtén un array con el nombre de todos los municipios de la
 * provincia de Lugo.
 *
 * Además, el nombre de los municipios debe estar ordenado por orden alfabético inverso.
 *
 * - Resuélvelo con async / await.
 *
 * API: https://www.el-tiempo.net/api
 *
 */

const api = async () => {
  try {
    const response = await fetch(
      `https://www.el-tiempo.net/api/json/v2/municipios`
    );
    const data = await response.json();
    const municipalities = data.filter(
      (municipality) => municipality.NOMBRE_PROVINCIA === 'Lugo'
    );
    const municipalitiesNames = municipalities
      .map((municipality) => municipality.NOMBRE)
      .sort()
      .reverse();
    console.log(municipalitiesNames);
  } catch (error) {
    console.error(error);
  }
};
api();
