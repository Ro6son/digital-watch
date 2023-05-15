// Html selectors - DOM
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

// Update Clock Time
function updateClock() {
  const dateToday = new Date();
  const hr = addZero(dateToday.getHours());
  const min = addZero(dateToday.getMinutes());
  const sec = addZero(dateToday.getSeconds());

  hours.textContent = hr;
  minutes.textContent = min;
  seconds.textContent = sec;
}

function addZero(value) {
  return value < 10 ? `0${value}` : value;
}

// Update interval
const relogio = setInterval(updateClock, 1000);
