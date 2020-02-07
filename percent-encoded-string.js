const urlEncode = function(text) {
  // Put your solution here
  let trimmed = text.trim();
  let res = "";
  for (let i = 0; i < trimmed.length; i++) {
    if (trimmed[i] === " ") {
      res += "%20";
    } else {
      res += trimmed[i];
    }
  }
  return res;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
