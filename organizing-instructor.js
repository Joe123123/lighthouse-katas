const organizeInstructors = function(instructors) {
  // Put your solution here
  let res = {};
  for (let i = 0; i < instructors.length; i++) {
    let instructor = instructors[i];
    res.hasOwnProperty(instructor.course)
      ? res[instructor.course].push(instructor.name)
      : (res[instructor.course] = [instructor.name]);
  }
  return res;
};

console.log(
  organizeInstructors([
    { name: "Samuel", course: "iOS" },
    { name: "Victoria", course: "Web" },
    { name: "Karim", course: "Web" },
    { name: "Donald", course: "Web" }
  ])
);
console.log(
  organizeInstructors([
    { name: "Brendan", course: "Blockchain" },
    { name: "David", course: "Web" },
    { name: "Martha", course: "iOS" },
    { name: "Carlos", course: "Web" }
  ])
);
