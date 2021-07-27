const flatten = require('../flatten');
const assert = require('chai').assert;

describe('#flatten', () => {
  it('returns a single level array of all the input in a nested array', () => {
    assert.deepEqual(flatten([6, [1, [3, 4, 6, [4, 5], 4], 12], 3]), [6, 1, 3, 4, 6, 4, 5, 4, 12, 3]);
  });
});