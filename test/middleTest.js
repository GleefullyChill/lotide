const assert = require('chai').assert;
const middle = require('../middle');

describe('#middle', () => {
  it('Return [8,9] when given an even long array of numbers, centered on 8 and 9', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0]), [8, 9]);
  });
});
