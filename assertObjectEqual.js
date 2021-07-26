const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  (eqObjects(inspect(actual), inspect(expected)) ?
    console.log(`🥰🥰 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`)
    :
    console.log(`😱Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`)
  );
};

module.exports = assertObjectsEqual;
//const object1 = {a: 2, b: 2, c: "bigger"};
// const object2 = {a: 2, b: 3, c: "bigger"};
// const object3 = {a: 2, b: 3, c: "bigger"};
// assertObjectsEqual(object3, object2);
