const hour = document.querySelector(".hour h1");
const minute = document.querySelector(".minute h1");
const second = document.querySelector(".second h1");
const Am = document.querySelector(".am h1");

let clock = () => {
  let date = new Date();

  let hrs = date.getHours();
  let mins = date.getMinutes();
  let secs = date.getSeconds();
  let period = "AM";
  if (hrs == 0) {
    hrs = 12;
  } else if (hrs > 12) {
    hrs = hrs - 12;
    period = "PM";
  }
  hour.innerHTML = hrs < 10 ? `0${hrs}` : hrs;
  minute.innerHTML = mins < 10 ? `0${mins}` : mins;
  second.innerHTML = secs < 10 ? `0${secs}` : secs;
  Am.innerHTML = period;
};

setInterval(clock, 1000);
