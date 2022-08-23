function getSecondsToday(date) {
  let now = new Date(date);
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  return hours * 3600 + minutes * 60 + seconds;
}

let date = new Date();
console.log(getSecondsToday(date));
