const takeUntil = require('../takeUntil');
const assert = require('chai').assert;

describe('#takeUntil', () => {
  it('returns an array equal to the single level array given up to the conditions of a given function', () => {
    const greaterThanSeven = (item) => (item > 7 ? true : false);
    assert.deepEqual(takeUntil([4, 5, 1, 5, 7, 8, 9,], greaterThanSeven), [4, 5, 1, 5, 7]);
  });
});