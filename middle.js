const assertArraysEqual = require('./assertArraysEqual');

const middle = function(arr) {
  //find middle of an array
  let midArray = [];
  const midIndex = Math.floor(arr.length / 2);
  if (arr.length < 2) {
    return midArray;
  }
  (arr.length % 2 === 0 ?
    midArray.push(arr[midIndex - 1], arr[midIndex])
    : midArray.push(arr[midIndex])
  );
  return midArray;
};
module.exports = middle;



