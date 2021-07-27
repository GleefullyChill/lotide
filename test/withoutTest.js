const without = require('../without');
const assert = require('chai').assert;

describe('#Without', () => {
  it('given an array and an item in an array to remove, it returns a copy of the array without the item(s)', () => {
    assert.deepEqual(without([2, 1, 2, 4, 2, 5, 3, 2], [2]), [1, 4, 5, 3]);
  });
  it('given an array and array of items to remove, it returns a copy of the array without the item(s)', () => {
    assert.deepEqual(without([2, 1, 2, 4, 2, 5, 3, 2], [1, 4, 5, 3]), [2, 2, 2, 2]);
  });
});