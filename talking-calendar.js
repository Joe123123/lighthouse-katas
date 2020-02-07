let talkingCalendar = function(date) {
  // Your code here
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  let month = Number(date.substring(5, 7));
  month = months[month - 1];
  let day = Number(date.substring(8, 10));
  switch (day) {
    case 1:
      day += "st";
      break;
    case 2:
      day += "nd";
      break;
    case 3:
      day += "rd";
      break;
    default:
      day += "th";
      break;
  }
  let year = Number(date.substring(0, 4));

  let res = month + " " + day + ", " + year;
  return res;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
