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
console.log(flatten([1,[1,2,[1,2,3],6 , 7 , 8, [9,[10,[11,[15]]]]]]));