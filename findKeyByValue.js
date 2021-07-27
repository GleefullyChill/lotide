const findKeyByValue = function(obj, val) {
  for (const item in obj) {
    if (obj[item] === val) {
      return item;
    }
  }
  return;
};
// const bestTVShowsByGenre = {
//   sciFi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama: "The Wire"
// };
module.exports = findKeyByValue;