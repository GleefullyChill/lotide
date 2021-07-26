const flatten = function(_arrays) {
  let finalArr = [];
  for (let i of _arrays) {
    if (Array.isArray(i)) {
      finalArr = finalArr.concat(flatten(i));
    } else {
      finalArr.push(i);
    }
  }
  return finalArr;
};
module.exports = flatten;