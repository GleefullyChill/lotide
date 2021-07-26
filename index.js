const head = require('./head');
const tail = require('./tail');
const middle = require('./middle');
const without = require('./without');
const takeUntil = require('./takeUntil');
const flatten = require('./flatten');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const map = require('./map');
const letterPositions = require('./letterPositions');
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');
const assertEqual = require('./assertEqual');
const assertArraysEqual = require('./assertArraysEqual');
const assertObjectEqual = require('./assertObjectEqual');

module.exports = {
  head,
  tail,
  middle,
  without,
  flatten,
  findKey,
  takeUntil,
  findKeyByValue,
  map,
  letterPositions,
  countLetters,
  countOnly,
  eqArrays,
  eqObjects,
  assertEqual,
  assertArraysEqual,
  assertObjectEqual
};