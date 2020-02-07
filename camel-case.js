let camelCase = function(input) {
  // Your code here
  let trimmed = input.trim();
  let res = "";
  for (let i = 0; i < trimmed.length; i++) {
    if (trimmed[i] === " ") {
      res += trimmed[i + 1].toUpperCase();
      i++;
    } else {
      res += trimmed[i];
    }
  }
  return res;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
