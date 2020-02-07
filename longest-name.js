const instructorWithLongestName = function(arr) {
  // Put your solution here
  let index = 0,
    maxLength = 0;
  for (let i = 0; i < arr.length; i++) {
    let l = arr[i].name.length;
    if (l > maxLength) {
      maxLength = l;
      index = i;
    }
  }
  return arr[index];
};

console.log(
  instructorWithLongestName([
    { name: "Samuel", course: "iOS" },
    { name: "Jeremiah", course: "Web" },
    { name: "Ophilia", course: "Web" },
    { name: "Donald", course: "Web" }
  ])
);
console.log(
  instructorWithLongestName([
    { name: "Matthew", course: "Web" },
    { name: "David", course: "iOS" },
    { name: "Domascus", course: "Web" }
  ])
);
