const tail = function(_array) {
  let newArray = [];
  for (let i = 1; i < _array.length; i++) {
    newArray.push(_array[i]);
  }
  return newArray;
};

module.exports = tail;
