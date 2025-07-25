let clock = document.getElementById("clock1");
let clock2 = document.getElementById("clock2");
let clock3 = document.getElementById("clock3");

setInterval(() => {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  clock.textContent = `${hours}`;
  clock2.textContent = `${minutes}`;
  clock3.textContent = `${seconds}`;
}, 1000);
