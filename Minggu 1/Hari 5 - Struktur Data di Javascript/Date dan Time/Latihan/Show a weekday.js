function getWeekDay(date) {
  let days = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];

  let weekDay = date.getDay(date);

  return days[weekDay];
}

let date = new Date(2012, 0, 3); // 3 Jan 2012
console.log(getWeekDay(date)); // should output "TU"
