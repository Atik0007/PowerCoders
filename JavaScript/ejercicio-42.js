`use strict`;
/**
 * #################
 * ## Ejercicio 4 ##
 * #################
 *
 *   1. Obtén todos los coches de la marca Audi.
 *
 *   2. Obtén una lista con todos los colores de los coches de marca BMW.
 *
 *   3. Obtén la media de precio de los coches de marca Ford.
 *
 *   4. Obtén un array con los coches de transmisión manual y de color negro.
 *
 *   5. Obtén la suma total de todos los precios.
 *
 *   Opcional: obtén un array con las distintas marca de coches (no se pueden repetir).
 *
 */
const cars = [
  {
    brand: 'BMW',
    model: 'Serie 3',
    year: 2012,
    price: 30000,
    doors: 4,
    color: 'Blanco',
    transmition: 'automatico',
  },
  {
    brand: 'Audi',
    model: 'A4',
    year: 2018,
    price: 40000,
    doors: 4,
    color: 'Negro',
    transmition: 'automatico',
  },
  {
    brand: 'Ford',
    model: 'Mustang',
    year: 2015,
    price: 20000,
    doors: 2,
    color: 'Blanco',
    transmition: 'automatico',
  },
  {
    brand: 'Audi',
    model: 'A6',
    year: 2010,
    price: 35000,
    doors: 4,
    color: 'Negro',
    transmition: 'automatico',
  },
  {
    brand: 'BMW',
    model: 'Serie 5',
    year: 2016,
    price: 70000,
    doors: 4,
    color: 'Rojo',
    transmition: 'automatico',
  },
  {
    brand: 'Mercedes Benz',
    model: 'Clase C',
    year: 2015,
    price: 25000,
    doors: 4,
    color: 'Blanco',
    transmition: 'automatico',
  },
  {
    brand: 'Chevrolet',
    model: 'Camaro',
    year: 2018,
    price: 60000,
    doors: 2,
    color: 'Rojo',
    transmition: 'manual',
  },
  {
    brand: 'Ford',
    model: 'Mustang',
    year: 2019,
    price: 80000,
    doors: 2,
    color: 'Rojo',
    transmition: 'manual',
  },
  {
    brand: 'Dodge',
    model: 'Challenger',
    year: 2017,
    price: 40000,
    doors: 4,
    color: 'Blanco',
    transmition: 'automatico',
  },
  {
    brand: 'Audi',
    model: 'A3',
    year: 2017,
    price: 55000,
    doors: 2,
    color: 'Negro',
    transmition: 'manual',
  },
  {
    brand: 'Dodge',
    model: 'Challenger',
    year: 2012,
    price: 25000,
    doors: 2,
    color: 'Rojo',
    transmition: 'manual',
  },
  {
    brand: 'Mercedes Benz',
    model: 'Clase C',
    year: 2018,
    price: 45000,
    doors: 4,
    color: 'Azul',
    transmition: 'automatico',
  },
  {
    brand: 'BMW',
    model: 'Serie 5',
    year: 2019,
    price: 90000,
    doors: 4,
    color: 'Blanco',
    transmition: 'automatico',
  },
  {
    brand: 'Ford',
    model: 'Mustang',
    year: 2017,
    price: 60000,
    doors: 2,
    color: 'Negro',
    transmition: 'manual',
  },
  {
    brand: 'Dodge',
    model: 'Challenger',
    year: 2015,
    price: 35000,
    doors: 2,
    color: 'Azul',
    transmition: 'automatico',
  },
  {
    brand: 'BMW',
    model: 'Serie 3',
    year: 2018,
    price: 50000,
    doors: 4,
    color: 'Blanco',
    transmition: 'automatico',
  },
  {
    brand: 'BMW',
    model: 'Serie 5',
    year: 2017,
    price: 80000,
    doors: 4,
    color: 'Negro',
    transmition: 'automatico',
  },
  {
    brand: 'Mercedes Benz',
    model: 'Clase C',
    year: 2018,
    price: 40000,
    doors: 4,
    color: 'Blanco',
    transmition: 'automatico',
  },
  {
    brand: 'Audi',
    model: 'A4',
    year: 2016,
    price: 30000,
    doors: 4,
    color: 'Azul',
    transmition: 'automatico',
  },
];
// coches de la marca Audi
const audi = cars.filter((car) => car.brand === 'Audi');
console.log(audi);

// coches de la marca BMW
const bmw = cars.filter((car) => car.brand === 'BMW');
console.log(bmw);
// colores de los coches de marca BMW
const bmwColors = bmw.map((car) => car.color);
console.log(bmwColors);

// media de precio de los coches de marca Ford
const ford = cars.filter((car) => car.brand === 'Ford');
const fordPrice = ford.reduce((acc, car) => acc + car.price, 0);
console.log(fordPrice);
const avgFord = fordPrice / ford.length;
console.log(avgFord);

// coches de transmision manual
const fordManual = cars.filter((car) => car.transmition === 'manual');
console.log(fordManual);
// coches de color Negro
const fordManualBlack = fordManual.filter((car) => car.color === 'Negro');
console.log(fordManualBlack);

//la suma total de todos los precios.
const totalPrice = cars.reduce((acc, car) => acc + car.price, 0);
console.log(totalPrice);

// marca de coches.
const brands = cars.map((car) => car.brand);
const brandsUnique = [...new Set(brands)];
console.log(brandsUnique);
