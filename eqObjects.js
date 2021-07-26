const eqArrays = require('./eqArrays');

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
    }
    if (goodCount !== Object.keys(object1).length) {
      return false;
    } else {
      return true;
    }
  }
};
module.exports = eqObjects;
// const ab = { a: { z: 1 }, b: 2 };
// const ba = { a: { z: 1 }, b: 2 };
// assertEqual(eqObjects(ab, ba), true);

// const abc = {a: "1", b: "2", c: "3"};
// assertEqual(eqObjects(ab, abc), false);
