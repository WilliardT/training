const calcPanelMathLine = document.getElementById("calcPanelMathLine");
const calcPanelResualt = document.getElementById("calcPanelResualt");
const calcButtons = document.getElementById("calcButtons");

let firstNumber = "";
let secondNumber = "";
let operator = "";

calcButtons.addEventListener("click", function (e) {
  const button = e.target;
  const buttonValue = button.textContent;

  if (buttonValue === "%" && firstNumber !== 0) {
    calcPanelResualt.textContent = firstNumber * (secondNumber / 100);
    //calcPanelResualt.textContent = calcPanelMathLine.textContent / 100; // не правильная формула
  }

  if (buttonValue === "C") {
    calcPanelMathLine.textContent = "";
    calcPanelResualt.textContent = "";
    resetVars();
  } else if (button.classList.contains("number")) {
    if (operator.length > 0) {
      secondNumber = secondNumber + buttonValue;
    } else {
      firstNumber = firstNumber + buttonValue;
    }
  } else if (button.classList.contains("operator")) {
    if (firstNumber.length === 0 || secondNumber.length !== 0) {
      return;
    }
    operator = buttonValue;
  } else if (buttonValue === "=") {
    if (secondNumber.length === 0) {
      return;
    }

    firstNumber = +firstNumber;
    secondNumber = +secondNumber;

    if (operator === "/") {
      calcPanelResualt.textContent = firstNumber / secondNumber;
    } else if (operator === "*") {
      calcPanelResualt.textContent = firstNumber * secondNumber;
    } else if (operator === "-") {
      calcPanelResualt.textContent = firstNumber - secondNumber;
    } else if (operator === "+") {
      calcPanelResualt.textContent = firstNumber + secondNumber;
    }
    resetVars();
  } else if (buttonValue === ".") {
    let number = operator.length > 0 ? secondNumber : firstNumber;

    if (number.length === 0 || number.includes(".")) {
      return;
    }

    if (operator.length > 0) {
      secondNumber = secondNumber + buttonValue;
    } else {
      firstNumber = firstNumber + buttonValue;
    }
  }

  calcPanelMathLine.textContent = firstNumber + operator + secondNumber;
});

function resetVars() {
  firstNumber = "";
  secondNumber = "";
  operator = "";
}
