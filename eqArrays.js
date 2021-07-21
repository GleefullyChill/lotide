const assertEqual = function(actual, expected) {
  (actual === expected ?
    console.log(`🥰🥰 Assertion Passed: ${actual} === ${expected}`)
    :
    console.log(`😱Assertion Failed: ${actual} !== ${expected}`)
  );
};

const eqArrays = function(_first, _second) {
  //false if not same length
  if (_first.length !== _second.length){
    return false;
  }
  for (let i of _first) {
    console.log(i)
    if (_first[i] !== _second[i]) {
      return false;
    }
  } 
  return true;
};





//call both functions
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);