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

const middle = function(arr) {
  //find middle of an array
  let midArray = [];
  const midIndex = Math.floor(arr.length / 2);
  if (arr.length < 2) {
    return midArray;
  }
  (arr.length % 2 === 0 ?
    midArray.push(arr[midIndex - 1], arr[midIndex])
    : midArray.push(arr[midIndex])
  );
  return midArray;
};
//if 0 or 1 return an empty array
//odd # return single element array
//even # return 2 elements in an array



assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0]), [8, 9]);
