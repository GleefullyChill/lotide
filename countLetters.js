const assertEqual = function(actual, expected) {
  (actual === expected ?
    console.log(`🥰🥰 Assertion Passed: ${actual} === ${expected}`)
    :
    console.log(`😱Assertion Failed: ${actual} !== ${expected}`)
  );
};
const countLetters = function(str) {
  const obj = [];
  for (const char of str) {
    if (char) {
      (obj[char] ? obj[char] += 1 : obj[char] = 1);
    }
  }
  return obj;

};
 

const printOut = countLetters("friends are free and freedom is free");
assertEqual(printOut["f"], 4);