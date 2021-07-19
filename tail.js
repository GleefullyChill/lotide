const assertEqual = function(actual, expected) {
  (actual === expected ?
    console.log(`🥰🥰 Assertion Passed: ${actual} === ${expected}`)
    :
    console.log(`😱Assertion Failed: ${actual} !== ${expected}`)
  );
};

const tail = function(_array) {
  let newArray = [];
  for (let i = 1; i < _array.length; i++) {
    newArray.push(_array[i]);
  }
  return newArray;
};
const words = [1];
tail(words);
assertEqual(words.length, 1);
const result = tail(words).length;
assertEqual(result, 0);
