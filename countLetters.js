const assertEqual = function(actual, expected) {
  (actual === expected ?
    console.log(`🥰🥰 Assertion Passed: ${actual} === ${expected}`)
    :
    console.log(`😱Assertion Failed: ${actual} !== ${expected}`)
  );
};
 const countLetters = function(str) {
   const obj = [];
   for (char of str) {
     if (char) {
      if (obj[char]) {
        obj[char] += 1;
      } else {
        obj[char] =1;
      }
     }
   }
  return obj;
 }
 

 console.log(countLetters("friends"))