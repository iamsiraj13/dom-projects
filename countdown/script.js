const day = document.getElementById("day");
const hour = document.getElementById("hour");
const min = document.getElementById("min");
const sec = document.getElementById("sec");
const newyear = "1 jan 2026";

function countDown() {
  const newYearDate = new Date(newyear);
  const currentDate = new Date();

  let diff = (newYearDate - currentDate) / 1000;

  const days = Math.floor(diff / 3600 / 24);
  const hours = Math.floor(diff / 3600) % 24;
  const minutes = Math.floor(diff / 60) % 60;
  const seconds = Math.floor(diff) % 60;

  day.innerHTML = days;
  hour.innerHTML = formatTime(hours);
  min.innerHTML = formatTime(minutes);
  sec.innerHTML = formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

countDown();

setInterval(countDown, 1000);
