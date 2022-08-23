function formatDate(date) {
  let dayOfMonth = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let seconds = date.getSeconds();
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let msDiff = new Date() - date;
  let secondsDiff = Math.round(msDiff / 1000);
  let minutesDiff = secondsDiff / 60;
  let hoursDiff = minutesDiff / 60;

  year = year.toString().slice(-2);
  month = month < 10 ? "0" + month : month;
  dayOfMonth = dayOfMonth < 10 ? "0" + dayOfMonth : dayOfMonth;
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;

  if (secondsDiff < 1) {
    return "right now";
  } else if (minutesDiff < 1) {
    return `${secondsDiff} sec ago`;
  } else if (hoursDiff < 1) {
    return `${minutesDiff} min ago`;
  } else {
    return `${dayOfMonth}.${month}.${year} ${hours}:${minutes}`;
  }
}

console.log(formatDate(new Date(new Date() - 1))); // "right now"
console.log(formatDate(new Date(new Date() - 30 * 1000))); // "30 sec. ago"
console.log(formatDate(new Date(new Date() - 5 * 60 * 1000))); // "5 min. ago"
// yesterday's date
console.log(formatDate(new Date(new Date() - 86400 * 1000)));
