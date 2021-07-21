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

const letterPositions = function(str) {
  const obj = [];
  let index = 0;
  for (const char of str) {
    if (char) {
      (obj[char] ? obj[char].push(index) : obj[char] = [index]);
    }
    index++;
  }
  return obj;
};

const hello = letterPositions("hello");
console.log(hello);
assertArraysEqual(hello["h"], [0]);
assertArraysEqual(hello["e"], [1]);
assertArraysEqual(hello["l"], [2, 3]);
assertArraysEqual(hello["o"], [4]);