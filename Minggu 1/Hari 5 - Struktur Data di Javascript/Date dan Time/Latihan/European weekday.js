function getLocalDay(date) {
  let day = date.getDay(date);

  if (day === 0) {
    day = 7;
  }

  return day;
}

let date = new Date(2012, 0, 3); // 3 Jan 2012
console.log(getLocalDay(date)); // tuesday, should show 2
