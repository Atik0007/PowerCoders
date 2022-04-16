`use strict`;
/**
 * ##################
 * ## Ejercicio 5 ##
 * ##################
 *
 * Utiliza los métodos map, filter o reduce para resolver las siguientes propuestas:
 *
 *  - 1. Obtén la suma total de todas las edades de las personas.
 *  - 2. Obtén la suma total de todas las edades de las personas francesas.
 *  - 3. Obtén un array con el nombre de todas las mascotas.
 *  - 4. Obtén un array con las personas que tengan gato.
 *  - 5. Obtén un array con los coches de los españoles.
 *  - 6. Obtén un array con las personas que tengan un coche de la marca Ford.
 *  - 7. ¡Bonus point! Obtén un array con todas las personas en el que cada persona tenga toda
 *       la info de su coche. Ejemplo a continuación:
 *
 *      [
 *          {
 *               name: 'Berto',
 *               country: 'ES',
 *               age: 44,
 *               car: {
 *                  id: 'LU9286V',
 *                  brand: 'Citroen',
 *                  model: 'Xsara'
 *               },
 *               pet: {
 *                   name: 'Moon',
 *                   type: 'perro'
 *               }
 *           },
 *           (...)
 *      ]
 *
 *  Tip: en algún caso es probable que el método "nombreArray.find()" te sea de ayuda.
 *
 */
const persons = [
  {
    name: 'Berto',
    country: 'ES',
    age: 44,
    car: 'LU9286V',
    pet: {
      name: 'Moon',
      type: 'perro',
    },
  },
  {
    name: 'Jess',
    country: 'UK',
    age: 29,
    car: 'GB2913U',
    pet: {
      name: 'Kit',
      type: 'gato',
    },
  },
  {
    name: 'Tom',
    country: 'UK',
    age: 36,
    car: 'GB8722N',
    pet: {
      name: 'Rex',
      type: 'perro',
    },
  },
  {
    name: 'Alexandre',
    country: 'FR',
    age: 19,
    car: 'FT5386P',
    pet: {
      name: 'Aron',
      type: 'gato',
    },
  },
  {
    name: 'Rebeca',
    country: 'ES',
    age: 32,
    car: 'MD4578T',
    pet: {
      name: 'Carbón',
      type: 'gato',
    },
  },
  {
    name: 'Stefano',
    country: 'IT',
    age: 52,
    car: 'LP6572I',
    pet: {
      name: 'Bimbo',
      type: 'perro',
    },
  },
  {
    name: 'Colette',
    country: 'FR',
    age: 22,
    car: 'FU8929P',
    pet: {
      name: 'Amadeu',
      type: 'gato',
    },
  },
];

const cars = [
  {
    id: 'LU9286V',
    brand: 'Citroen',
    model: 'Xsara',
  },
  {
    id: 'GB2913U',
    brand: 'Fiat',
    model: 'Punto',
  },
  {
    id: 'GB8722N',
    brand: 'Opel',
    model: 'Astra',
  },
  {
    id: 'FT5386P',
    brand: 'Ford',
    model: 'Focus',
  },
  {
    id: 'MD4578T',
    brand: 'Opel',
    model: 'Corsa',
  },
  {
    id: 'LP6572I',
    brand: 'Ford',
    model: 'Fiesta',
  },
  {
    id: 'FU8929P',
    brand: 'Fiat',
    model: 'Uno',
  },
];
// suma total de todas las edades de las personas
const sumaEdades = persons
  .map((persona) => persona.age)
  .reduce((suma, edad) => suma + edad, 0);
console.log(sumaEdades);

//suma total de todas las edades de las personas francesas
const sumaEdadesFrancesas = persons
  .filter((persona) => persona.country === 'FR') // filtro para obtener solo las personas francesas
  .map((persona) => persona.age) // map para obtener solo las edades de las personas francesas
  .reduce((suma, edad) => suma + edad, 0); // reduce para sumar todas las edades de las personas francesas
console.log(sumaEdadesFrancesas);

// nombre de todas las mascotas
const nombreMascotas = persons
  .filter((persona) => persona.pet) // filtro para obtener solo las personas que tengan mascotas
  .map((persona) => persona.pet.name); // map para obtener solo el nombre de las mascotas
console.log(nombreMascotas);

// las personas que tengan gato
const personasConGato = persons.filter(
  (persona) => persona.pet.type === 'gato'
); // filtro para obtener solo las personas que tengan gato
console.log(personasConGato);

// coches de los españoles
const cochesEspañoles = persons.filter((coche) => coche.country === 'ES'); // filtro para obtener solo las personas españolas
console.log(cochesEspañoles);
const idCochesEspañoles = cochesEspañoles.map((coche) => coche.car); // map para obtener solo los car de los coches
console.log(idCochesEspañoles);
const cochesEspañoles2 = cars.filter((coche) =>
  idCochesEspañoles.includes(coche.id)
); // filtro para obtener solo los coches de los españoles
console.log(cochesEspañoles2);
const brandEs = cochesEspañoles2.map((coche) => coche.brand); // map para obtener solo las marcas de los coches
console.log(brandEs);

// personas que tengan un coche de la marca Ford
const personasFord = cars.filter((persona) => persona.brand === 'Ford'); // filtro para obtener solo la brand de la marca Ford
console.log(personasFord);
const idPersonasFord = personasFord.map((persona) => persona.id); // map para obtener solo los id de las personas que tengan un coche de la marca Ford
console.log(idPersonasFord);
const personasFord2 = persons.filter((persona) =>
  idPersonasFord.includes(persona.car)
); // filtro para obtener solo las personas que tengan un coche de la marca Ford
console.log(personasFord2);

// Obtén un array con todas las personas en el que cada persona tenga toda la info de su coche
const personasConCoche = persons.map((persona) => {
  const coche = cars.find((coche) => coche.id === persona.car);
  return { ...persona, coche };
});
console.log(personasConCoche);
