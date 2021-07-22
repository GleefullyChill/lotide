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
        } else if (object1[key] !== object2[key]) {
          return false;
        }
      } else {
        return false;
      }
    }
    if (goodCount !== Object.keys(object1).length) {
      return false;
    } else {
      return true;
    }
  }
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  (eqObjects(inspect(actual), inspect(expected)) ?
    console.log(`🥰🥰 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`)
    :
    console.log(`😱Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`)
  );
};
//const object1 = {a: 2, b: 2, c: "bigger"};
const object2 = {a: 2, b: 3, c: "bigger"};
const object3 = {a: 2, b: 3, c: "bigger"};
assertObjectsEqual(object3, object2);
