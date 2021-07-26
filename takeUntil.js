const takeUntil = function(array, callback) {
  let theArr = [];
  for (const item of array) {
    if (!callback(item)) {
      theArr.push(item);
    } else {
      return theArr;
    }
  }
};
module.exports = takeUntil;