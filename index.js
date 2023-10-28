const hours = document.getElementById("hours");
const minuts = document.getElementById("minuts");

const updatedClock = () => {
  let today = new Date();

  let clockHours = today.getHours();
  let clockMinuts = today.getMinutes();

  hours.textContent = clockHours;
  minuts.textContent = clockMinuts;
};

setInterval(updatedClock, 1000);
