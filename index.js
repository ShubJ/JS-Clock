setInterval(setClock, 1000);

const secondsHand = document.querySelector(".clock .hand.sec");
const minsHand = document.querySelector(".clock .hand.min");
const hourHand = document.querySelector(".clock .hand.hour");

function setClock() {
  const currentDate = new Date();
  const secRatio = currentDate.getSeconds() / 60;
  const minRatio = (secRatio + currentDate.getMinutes()) / 60;
  const hourRatio = (minRatio + currentDate.getHours()) / 12;

  setRotation(secondsHand, secRatio);
  setRotation(minsHand, minRatio);
  setRotation(hourHand, hourRatio);
}

function setRotation(hand, rotationRatio) {
  hand.style.setProperty("--rotation", rotationRatio * 360);
}

setClock();
