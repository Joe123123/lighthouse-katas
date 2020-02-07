const makeCase = function(input, format) {
  const camelCase = function(input) {
    let reg = / (\w)/g;
    let res = input.replace(reg, p1 => p1.toUpperCase());
    return res.split(" ").join("");
  };

  const pascalCase = function(input) {
    let reg = /\b(\w)/g;
    let res = input.replace(reg, p1 => p1.toUpperCase());
    return res.split(" ").join("");
  };

  const snakeCase = function(input) {
    let reg = / /g;
    let res = input.replace(reg, "_");
    return res;
  };

  const kebabCase = function(input) {
    let reg = / /g;
    let res = input.replace(reg, "-");
    return res;
  };

  const titleCase = function(input) {
    let reg = /\b(\w)/g;
    let res = input.replace(reg, p1 => p1.toUpperCase());
    return res;
  };

  const vowelCase = function(input) {
    let reg = /[aeiou]/g;
    let res = input.replace(reg, p1 => p1.toUpperCase());
    return res;
  };

  const consonantCase = function(input) {
    let reg = /[^aeiou]/g;
    let res = input.replace(reg, p1 => p1.toUpperCase());
    return res;
  };

  const upperCase = function(input) {
    return input.toUpperCase();
  };

  const lowerCase = function(input) {
    return input.toLowerCase();
  };

  const change = function(input, format) {
    let res = table[format](input);
    return res;
  };

  const table = {
    camel: camelCase,
    pascal: pascalCase,
    snake: snakeCase,
    kebab: kebabCase,
    title: titleCase,
    vowel: vowelCase,
    consonant: consonantCase,
    upper: upperCase,
    lower: lowerCase
  };

  if (typeof format === "string") {
    return change(input, format);
  }
  if (typeof format === "object") {
    let res = input;
    for (let i = 0; i < format.length; i++) {
      res = change(res, format[i]);
    }
    return res;
  }
};

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));
