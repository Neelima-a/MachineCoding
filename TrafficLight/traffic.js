let redShow = document.querySelector(".red");
let yellowShow = document.querySelector(".yellow");
let greenShow = document.querySelector(".green");
let showTimer = document.querySelector(".timer");

let red = true,
  yellow = false,
  green = false;

let container = 10;

let timer = setInterval(() => {
  if (container === -1 && red) {
    green = true;
    red = false;
    showTimer.style.border = "3px solid #0c8e1f";
    showTimer.style.color = "#0c8e1f";
    showTimer.style.boxShadow = "0px 0px 100px #0c8e1f";
    container = 10;
  } else if (container === -1 && yellow) {
    red = true;
    yellow = false;
    showTimer.style.border = "3px solid #ff0000";
    showTimer.style.color = "#ff0000";
    showTimer.style.boxShadow = "0px 0px 100px #ff0000";
    container = 10;
  } else if (container === -1 && green) {
    yellow = true;
    green = false;
    showTimer.style.border = "3px solid #ffd500";
    showTimer.style.color = "#ffd500";
    showTimer.style.boxShadow = "0px 0px 50px #ffd500";
    container = 10;
  }
  if (red) {
    greenShow.classList.add("disable");
    redShow.classList.remove("disable");
    yellowShow.classList.add("disable");
  } else if (yellow) {
    greenShow.classList.add("disable");
    redShow.classList.add("disable");
    yellowShow.classList.remove("disable");
  } else if (green) {
    greenShow.classList.remove("disable");
    redShow.classList.add("disable");
    yellowShow.classList.add("disable");
  }

  if (container < 10) {
    showTimer.innerText = `0${container}`;
  } else {
    showTimer.innerText = `${container}`;
  }

  container--;
}, 1000);
