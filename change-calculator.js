let calculateChange = function(total, cash) {
  // Your code here
  let change = cash - total;
  let obj = {
    twentyDollar: 2000,
    tenDollar: 1000,
    fiveDollar: 500,
    twoDollar: 200,
    oneDollar: 100,
    quarter: 25,
    dime: 10,
    nickel: 5,
    penny: 1
  };
  let changeName = Object.keys(obj);
  let changeChart = Object.values(obj);
  let res = {};

  for (let i = 0; i < changeChart.length; i++) {
    if (Math.floor(change / changeChart[i]) > 0) {
      res[changeName[i]] = Math.floor(change / changeChart[i]);
      change -= changeChart[i] * res[changeName[i]];
    }
  }
  return res;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));
