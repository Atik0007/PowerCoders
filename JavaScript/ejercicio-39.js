`use strict`;
/**
 * #################
 * ## Ejercicio 1 ##
 * #################
 *
 * Crea un nuevo array cuyos elementos sean los mismos que los del array original
 * pero sumándoles 10.
 *
 */
const nums = [0, 23, 21, 13, 100];
const newNums = [];
for (let i = 0; i < nums.length; i++) {
  newNums.push(nums[i] + 10);
}
console.log(newNums);
