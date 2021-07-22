const eqArrays = function(_first, _second) {
  //false if not same length
  if (_first.length !== _second.length) {
    return false;
  }
  for (let i = 0; i <= _first.length - 1; i++) {
    if (_first[i] !== _second[i]) {
      return false;
    }
  }
  return true;
};
const assertArraysEqual = function(_first, _second) {
  (eqArrays(_first, _second) ?
    console.log(`🥰🥰 Assertion Passed: ${_first} === ${_second}`)
    :
    console.log(`😱Assertion Failed: ${_first} !== ${_second}`)
  );
};

const words = ["I", "am", "going", "to", "Party", "Hardly"];
const firstLetter = ["I", "a", "g", "t", "P", "H"];

const map = function(array, callback) {
  const results = [];
  for (const item of array) {
    results.push(callback(item));
  }
  return results;
};

const mapIt = map(words, word => word[0]);
assertArraysEqual(mapIt, firstLetter);