const assertEqual = function(actual, expected) {
  (actual === expected ?
    console.log(`🥰🥰 Assertion Passed: ${actual} === ${expected}`)
    :
    console.log(`😱Assertion Failed: ${actual} !== ${expected}`)
  );
};
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

const eqObjects = function(object1, object2) {
  let goodCount = 0;
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (const key in object1) {
    for (let i = 0; i < Object.keys(object1).length; i++) {
      if (object2[key]) {
        goodCount++;
        if (Array.isArray(object1[key])) {
          if (!eqArrays(object1[key],object2[key])) {
            return false;
          }
        } else if (typeof object1[key] === 'object') {
          return eqObjects(object1[key], object2[key]);
        } else if (object1[key] !== object2[key]) {
          return false;
        }
      } else {
        return false;
    }
    if (goodCount !== Object.keys(object1).length) {
      return false;
    } else {
      return true;
    }
  }
};

const ab = { a: { z: 1 }, b: 2 };
const ba = { a: { z: 1 }, b: 2 };
assertEqual(eqObjects(ab, ba), true);

const abc = {a: "1", b: "2", c: "3"};
assertEqual(eqObjects(ab, abc), false);