const displayBox = document.querySelector(".display"),
  displayInput = document.querySelector(".display-input"),
  displayResult = document.querySelector(".display-result"),
  buttons = document.querySelectorAll(".buttons"),
  operators = ["+", "-", "*", "%", "÷"];

let input = "",
  result = "";

const calculate = (btnValue) => {
  if (btnValue === "C") {
    input = "";
    result = "";
  } else if (btnValue === "Del") {
    input = input.slice(0, -1);
  } else if (btnValue === "=") {
    try {
      const calculatedValue = eval(input);
      result = calculatedValue;
    } catch {
      return "error";
    }
  } else {
    input += btnValue;
  }
  displayInput.value = input || 0;
  displayResult.value = result;
  displayInput.scrollLeft = displayInput.scrollWidth;
};

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const value = e.target.innerText;
    console.log(value, e.target);
    calculate(value);
  });
});
