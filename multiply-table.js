const multiplicationTable = function(maxValue) {
  // Your code here
  let res = "";
  for (let i = 1; i <= maxValue; i++) {
    let row = "";
    for (let j = 1; j <= maxValue; j++) {
      row += String(i * j) + " ";
    }
    res += "\n" + row.trim();
  }
  return res;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));
