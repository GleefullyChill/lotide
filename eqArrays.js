
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

