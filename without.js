const without = function(source, itemsToRemove) {
  let desired = [];
  for (let i of source) {
    (!itemsToRemove.includes(i) ? desired.push(i) : null);
  }
  return desired;
};
module.exports = without;