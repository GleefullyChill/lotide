const eqArrays = function(_first, _second) {
  //false if not same length
  if (_first.length !== _second.length){
    return false;
  }
  for (let i = 0; i <= _first.length - 1; i++) {
    console.log(i)
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
}

assertArraysEqual([1, 2], [1, 2])