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

const takeUntil = function(array, callback) {
  let theArr = [];
  for (const item of array) {
    if (!callback(item)) {
      theArr.push(item);
    } else {
      return theArr;
    }
  }
  
};
// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// let expected = [1, 2, 5, 7, 2 ]
// assertArraysEqual(results1, expected);

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// expected = [ 'I\'ve', 'been', 'to', 'Hollywood' ];
// assertArraysEqual(results2, expected);
