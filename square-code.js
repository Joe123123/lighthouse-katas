const squareCode = function(message) {
  // Put your solution here
  let str = message.replace(/\s/g, "");
  let len = str.length;
  let col = Math.ceil(Math.sqrt(len));
  let res = "";
  for (let i = 0; i < col; i++) {
    let word = "";
    for (let j = i; j < len; j += col) {
      word += str[j];
    }
    res += word + " ";
  }
  return res.trim();
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(
  squareCode(
    "if man was meant to stay on the ground god would have given us roots"
  )
);
