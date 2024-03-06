const clockHour = document.querySelector(".clock-hour");
const clockMinute = document.querySelector(".clock-minute");
const clockSeconds = document.querySelector(".clock-seconds");

let hour = document.querySelector(".hours");
let minute = document.querySelector(".minutes");
let second = document.querySelector(".seconds");

const date = document.querySelector(".date");
const day = document.querySelector(".day");
const currentDate = new Date();

function updateClock() {
  const currentDate = new Date();
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();

  const hourRotation = (hours % 12) * 30 + minutes / 2;
  const minuteRotation = minutes * 6 + seconds / 10;
  const secondRotation = seconds * 6;

  clockHour.style.transform = `translate(-50%, -100%) rotateZ(${hourRotation}deg)`;
  clockMinute.style.transform = `translate(-50%, -100%) rotateZ(${minuteRotation}deg)`;
  clockSeconds.style.transform = `translate(-50%, -100%) rotateZ(${secondRotation}deg)`;

  requestAnimationFrame(updateClock);
}

function displayCurrentTime() {
  const currentDate = new Date();
  const hours = currentDate.getHours().toString().padStart(2, "0");
  const minutes = currentDate.getMinutes().toString().padStart(2, "0");
  const seconds = currentDate.getSeconds().toString().padStart(2, "0");

  hour.innerHTML = hours;
  minute.innerHTML = minutes;
  second.innerHTML = seconds;

  requestAnimationFrame(displayCurrentTime);
}

displayCurrentTime();

function displayCurrentDate() {
  const formattedDate = currentDate.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
  });
  let formattedDay = currentDate.toLocaleDateString("en-US", {
    day: "numeric",
  });

  formattedDay = formattedDay >= 10 ? formattedDay : "0" + formattedDay;

  date.innerHTML = formattedDate.split(" ").join(", ");
  day.innerHTML = formattedDay;
}

updateClock();
displayCurrentTime();
displayCurrentDate();
