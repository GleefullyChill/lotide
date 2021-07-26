const letterPositions = function(str) {
  const obj = [];
  let index = 0;
  for (const char of str) {
    if (char) {
      (obj[char] ? obj[char].push(index) : obj[char] = [index]);
    }
    index++;
  }
  return obj;
};

module.exports = letterPositions;