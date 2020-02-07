const urlDecode = function(text) {
  // Put your solution here
  let arr;
  let res = {};
  let reg = /(\w+)=([\w|%]+)&?/g;
  while ((arr = reg.exec(text)) !== null) {
    let key = arr[1];
    let value = arr[2].replace(/%20/g, " ");
    res[key] = value;
  }
  return res;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);
