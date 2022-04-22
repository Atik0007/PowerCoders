'use strict';

/**
 * Completa la tabla de temperaturas tomando como referencia
 * este array de ciudades. Tendrás que usar las siguientes
 * clases para cambiar el color de fondo de cada temperatura.
 *
 *  - lower: temp. menor que 4 (fondo azul).
 *
 *  - low: temp. entre 4 y 20 (fondo verde).
 *
 *  - medium: temp. entre 20 y 30 (fondo naranja).
 *
 *  - high: temp. mayor de 30 (fondo rojo).
 *
 */

const cities = [
  {
    name: 'A Coruña',
    min: 17,
    max: 23,
  },
  {
    name: 'Ferrol',
    min: 15,
    max: 32,
  },
  {
    name: 'Lugo',
    min: -20,
    max: 31,
  },
  {
    name: 'Ourense',
    min: 18,
    max: 35,
  },
  {
    name: 'Pontevedra',
    min: 18,
    max: 29,
  },
];

const table = document.createElement('table');
const thead = document.createElement('thead');
const tbody = document.createElement('tbody');
function addCities(cities) {
  const tr = document.createElement('tr');
  const th = document.createElement('th');
  th.textContent = 'Ciudad';
  tr.appendChild(th);
  const thMin = document.createElement('th');
  thMin.textContent = 'Min';
  tr.appendChild(thMin);
  const thMax = document.createElement('th');
  thMax.textContent = 'Max';
  tr.appendChild(thMax);
  thead.appendChild(tr);
  table.appendChild(thead);

  for (let i = 0; i < cities.length; i++) {
    const tr = document.createElement('tr');
    const tdName = document.createElement('td');
    const tdMin = document.createElement('td');
    const tdMax = document.createElement('td');
    tdName.innerHTML = cities[i].name;
    tdMin.innerHTML = cities[i].min;
    if (cities[i].min < 4) {
      tdMin.style.backgroundColor = 'blue';
    } else if (cities[i].min < 20) {
      tdMin.style.backgroundColor = 'green';
    } else {
      tdMin.style.backgroundColor = 'orange';
    }
    tdMax.innerHTML = cities[i].max;
    if (cities[i].max > 30) {
      tdMax.style.backgroundColor = 'red';
    } else if (cities[i].max > 20) {
      tdMax.style.backgroundColor = 'orange';
    } else {
      tdMax.style.backgroundColor = 'green';
    }
    tr.appendChild(tdName);
    tr.appendChild(tdMin);
    tr.appendChild(tdMax);
    tbody.appendChild(tr);
  }
  table.appendChild(tbody);
  document.body.appendChild(table);
}
addCities(cities);
