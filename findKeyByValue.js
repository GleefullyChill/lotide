const assertEqual = function(actual, expected) {
  (actual === expected ?
    console.log(`🥰🥰 Assertion Passed: ${actual} === ${expected}`)
    :
    console.log(`😱Assertion Failed: ${actual} !== ${expected}`)
  );
};

const findKeyByValue = function(obj, val) {
  for (const item in obj) {
    if (obj[item] === val) {
      return item;
    }
  }
  return;
};
const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);