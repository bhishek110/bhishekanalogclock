let hour = document.getElementById('hour');
let minute = document.getElementById('minute');
let second = document.getElementById('second');

function displayTime(){
  let date = new Date();

  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();

  let hourrotation = 30*hh + mm/2;
  let minrotation = 6*mm;
  let secrotation = 6*ss;

  hour.style.transform = `rotate(${hourrotation}deg)`;
  minute.style.transform = `rotate(${minrotation}deg)`;
  second.style.transform = `rotate(${secrotation}deg)`;
}

setInterval(displayTime, 1000);