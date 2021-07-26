
const assertEqual = require('./assertEqual');

const eqArrays = function(firstArray, secondArray) {
  //false if not same length
  if (firstArray.length !== secondArray.length) {
    return false;
  } //else if (firstArray[0] === undefined)
  for (let i = 0; i < firstArray.length - 1; i++) {
    if (Array.isArray(firstArray[i])) {
      if (eqArrays(firstArray[i], secondArray[i]) === false) {
        return false;
      }
    }
    if (firstArray[i] !== secondArray[i]) {
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;



//call both functions
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays(["1", ['2',['2']], "4"], ["1", ['2', ['2']], "3"]), false);
assertEqual(eqArrays(["1", 2, "3"], ["1", "2", "3"]), false);