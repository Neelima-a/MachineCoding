const indicator = document.querySelector(".indicator");
const input = document.querySelector("#password");
const weak = document.querySelector(".weak");
const medium = document.querySelector(".medium");
const strong = document.querySelector(".strong");
const text = document.querySelector(".text");
const showButton = document.querySelector(".showBtn");
console.log(showButton.onClick);
let regExpWeak = /[A-Za-z]/;
let regExpMedium = /\d+/;
let regExpStrong = /[A-Za-z0-9@,#,$,%,!,]/;
function trigger() {
  if (input.value !== "") {
    indicator.style.display = "flex";
    if (
      input.value.length <= 3 &&
      (input.value.match(regExpWeak) ||
        input.value.match(regExpMedium) ||
        input.value.match(regExpStrong))
    )
      no = 1;
    if (
      input.value.length >= 6 &&
      ((input.value.match(regExpWeak) && input.value.match(regExpMedium)) ||
        (input.value.match(regExpMedium) && input.value.match(regExpStrong)) ||
        (input.value.match(regExpStrong) && input.value.match(regExpWeak)))
    )
      no = 2;
    if (
      input.value.length >= 6 &&
      input.value.match(regExpWeak) &&
      input.value.match(regExpMedium) &&
      input.value.match(regExpStrong)
    )
      no = 3;
    if (no == 1) {
      weak.classList.add("active");
      text.style.display = "block";
      text.innerText = "Your password is weak";
      text.classList.add("weak");
    }
    if (no == 2) {
      medium.classList.add("active");
      text.innerText = "Your password is medium";
      text.classList.add("medium");
    } else {
      medium.classList.remove("active");
      text.classList.remove("strong");
    }

    if (no == 3) {
      medium.classList.add("active");
      strong.classList.add("active");
      text.innerText = "Your password is strong";
      text.classList.add("strong");
    } else {
      strong.classList.remove("active");
      text.classList.remove("strong");
    }
    showButton.style.display = "block";
  } else {
    indicator.style.display = "none";
    text.style.display = "none";
  }
}

function showPassword() {
  if (input.type == "password") {
    input.type = "text";
    showButton.textContent = "SHOW";
  } else {
    input.type = "password";
    showButton.innerText = "HIDE";
  }
}
