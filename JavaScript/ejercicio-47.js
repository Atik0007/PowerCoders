`use strict`;
/* #################
 * ## Ejercicio 3 ##
 * #################
 *
 * Dada la siguiente API, obtén un array con el nombre de todos los municipios de la
 * provincia de Lugo.
 *
 * Además, el nombre de los municipios debe estar ordenado por orden alfabético inverso.
 *
 * Documentación: https://www.el-tiempo.net/api
 *
 */
fetch(`https://www.el-tiempo.net/api/json/v2/municipios`)
  .then((response) => response.json())
  .then((data) => {
    const municipalities = data.filter(
      (municipality) => municipality.NOMBRE_PROVINCIA === 'Lugo'
    );
    const municipalitiesNames = municipalities
      .map((municipality) => municipality.NOMBRE)
      .sort()
      .reverse();
    console.log(municipalitiesNames);
  })
  .catch((error) => console.log(error));
