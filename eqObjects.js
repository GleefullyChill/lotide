const assertEqual = function(actual, expected) {
  (actual === expected ?
    console.log(`🥰🥰 Assertion Passed: ${actual} === ${expected}`)
    :
    console.log(`😱Assertion Failed: ${actual} !== ${expected}`)
  );
};

const eqObjects = function(object1, object2) {

};

const ab = {a: "1", b: "2"};
const ba = {b: "2", a: "1"};
eqObjects(ab, ba);

const abc = {a: "1", b: "2", c: "3"};
eqObjects(ab, abc);