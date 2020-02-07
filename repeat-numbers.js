let repeatNumbers = function(arrs) {
  // Put your solution here
  let res = "";
  for (let i = 0; i < arrs.length; i++) {
    let arr = arrs[i];
    let str = "";
    for (let j = 0; j < arr[1]; j++) {
      str += String(arr[0]);
    }
    res += str + ", ";
  }
  res = res.slice(0, -2);
  return res;
};

console.log(repeatNumbers([[1, 10]]));
console.log(
  repeatNumbers([
    [1, 2],
    [2, 3]
  ])
);
console.log(
  repeatNumbers([
    [10, 4],
    [34, 6],
    [92, 2]
  ])
);
