'use strict';

/* A partir de los datos de la API https://rickandmortyapi.com/api/character
generar una ficha por cada personaje que devuelva que incluya, por lo menos, la imagen,
el nombre, el estado y la especie.


BONUS: algún elemento diferenciará visualmente el estado*/

// Personaje de PRUEBA
const rick = {
  id: 1,
  name: 'Rick Sanchez',
  status: 'Alive',
  species: 'Human',
  type: '',
  gender: 'Male',
  origin: {
    name: 'Earth (C-137)',
    url: 'https://rickandmortyapi.com/api/location/1',
  },
  location: {
    name: 'Citadel of Ricks',
    url: 'https://rickandmortyapi.com/api/location/3',
  },
  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  episode: [
    'https://rickandmortyapi.com/api/episode/1',
    'https://rickandmortyapi.com/api/episode/2',
    'https://rickandmortyapi.com/api/episode/3',
    'https://rickandmortyapi.com/api/episode/4',
    'https://rickandmortyapi.com/api/episode/5',
    'https://rickandmortyapi.com/api/episode/6',
    'https://rickandmortyapi.com/api/episode/7',
    'https://rickandmortyapi.com/api/episode/8',
    'https://rickandmortyapi.com/api/episode/9',
    'https://rickandmortyapi.com/api/episode/10',
    'https://rickandmortyapi.com/api/episode/11',
    'https://rickandmortyapi.com/api/episode/12',
    'https://rickandmortyapi.com/api/episode/13',
    'https://rickandmortyapi.com/api/episode/14',
    'https://rickandmortyapi.com/api/episode/15',
    'https://rickandmortyapi.com/api/episode/16',
    'https://rickandmortyapi.com/api/episode/17',
    'https://rickandmortyapi.com/api/episode/18',
    'https://rickandmortyapi.com/api/episode/19',
    'https://rickandmortyapi.com/api/episode/20',
    'https://rickandmortyapi.com/api/episode/21',
    'https://rickandmortyapi.com/api/episode/22',
    'https://rickandmortyapi.com/api/episode/23',
    'https://rickandmortyapi.com/api/episode/24',
    'https://rickandmortyapi.com/api/episode/25',
    'https://rickandmortyapi.com/api/episode/26',
    'https://rickandmortyapi.com/api/episode/27',
    'https://rickandmortyapi.com/api/episode/28',
    'https://rickandmortyapi.com/api/episode/29',
    'https://rickandmortyapi.com/api/episode/30',
    'https://rickandmortyapi.com/api/episode/31',
    'https://rickandmortyapi.com/api/episode/32',
    'https://rickandmortyapi.com/api/episode/33',
    'https://rickandmortyapi.com/api/episode/34',
    'https://rickandmortyapi.com/api/episode/35',
    'https://rickandmortyapi.com/api/episode/36',
    'https://rickandmortyapi.com/api/episode/37',
    'https://rickandmortyapi.com/api/episode/38',
    'https://rickandmortyapi.com/api/episode/39',
    'https://rickandmortyapi.com/api/episode/40',
    'https://rickandmortyapi.com/api/episode/41',
    'https://rickandmortyapi.com/api/episode/42',
    'https://rickandmortyapi.com/api/episode/43',
    'https://rickandmortyapi.com/api/episode/44',
    'https://rickandmortyapi.com/api/episode/45',
    'https://rickandmortyapi.com/api/episode/46',
    'https://rickandmortyapi.com/api/episode/47',
    'https://rickandmortyapi.com/api/episode/48',
    'https://rickandmortyapi.com/api/episode/49',
    'https://rickandmortyapi.com/api/episode/50',
    'https://rickandmortyapi.com/api/episode/51',
  ],
  url: 'https://rickandmortyapi.com/api/character/1',
  created: '2017-11-04T18:48:46.250Z',
};

// FUncion que vale para hacer cualquier fetch
async function getData(url) {
  const res = await fetch(url);
  const data = res.json();

  return data;
}

// Función que coge el array de personajes de RIck y Morty
// De momento solo los saca por consola, habrá que modificarla para usarla
async function getCharacterData() {
  const { results } = await getData(
    'https://rickandmortyapi.com/api/character'
  );

  console.log(results);
}

getCharacterData();

// algún elemento diferenciará visualmente el estado

async function getCharacterData() {
  const { results } = await getData(
    'https://rickandmortyapi.com/api/character'
  );
  for (let i = 0; i < results.length; i++) {
    const { name, status, species, image } = results[i];

    const container = document.createElement('div');
    container.classList.add('character');

    const img = document.createElement('img');
    img.src = image;

    const nameContainer = document.createElement('div');
    nameContainer.classList.add('name');
    nameContainer.innerText = name;

    const statusContainer = document.createElement('div');
    statusContainer.classList.add('status');
    statusContainer.innerText = status;

    const speciesContainer = document.createElement('div');
    speciesContainer.classList.add('species');
    speciesContainer.innerText = species;

    container.appendChild(img);
    container.appendChild(nameContainer);
    container.appendChild(statusContainer);
    container.appendChild(speciesContainer);

    document.body.appendChild(container);

    if (status === 'Alive') {
      statusContainer.style.backgroundColor = 'green';
    } else if (status === 'Dead') {
      statusContainer.style.backgroundColor = 'red';
    } else {
      statusContainer.style.backgroundColor = 'yellow';
    }
  }
}
