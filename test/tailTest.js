const tail = require('../tail');
const assert = require('chai').assert;


describe('Tail', () => {
  it('returns everything, but the head of an array', () => {
    const given = ['normal', 'gorge', 'get into it!', 'jantasy', 'back rolls'];
    assert.deepEqual(tail(given), ['gorge', 'get into it!', 'jantasy', 'back rolls']);
  });
  it('returns an empty array when given an array with a single object', () => {
    const given = ['hate speech'];
    assert.deepEqual(tail(given), []);
  })
})
