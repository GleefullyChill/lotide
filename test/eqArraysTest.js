const eqArrays = require('../eqArrays');
const assert = require('chai').assert;


describe('testing the test cases for eqArrays', () => {
  it('returns true given two single line arrays', () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it('returns false given two arrays with same values in different indexes', () => {
    assert.deepEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
  });
  it('returns true given nested arrays', () => {
    assert.deepEqual(eqArrays(["1", ['2',['2']], "3"], ["1", ['2', ['2']], "3"]), false)
  });
  it('returns false given nested arrays with a false value after', () => {
    assert.deepEqual(eqArrays(["1", ['2',['2']], "4"], ["1", ['2', ['2']], "3"]), false)
  });
  it('returns false given similar, but not equal values in the same index', () => {
    assert.deepEqual(eqArrays(["1", 2, "3"], ["1", "2", "3"]), false);
  });
});