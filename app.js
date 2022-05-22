const calculatorDisplay = document.querySelector("#calculatorDisplay");
const operators = document.querySelectorAll(".operators");
const numbers = document.querySelectorAll(".numbers");
const ac = document.querySelector("#ac");
const equal = document.querySelector("#equal");

let firstValue = 0;
let selectedOperation = "";
let secondValue = 0;

numbers.forEach((number) => {
  number.addEventListener("click", clickOnNumber);
});

operators.forEach((operator) => {
  operator.addEventListener("click", clickOnOperator);
});

equal.addEventListener("click", clickOnEqual);

ac.addEventListener("click", clickOnAc);

// function for clicking on number
function clickOnNumber(element) {
  calculatorDisplay.innerText += element.target.innerText;

  // assigning input to firstValue if operator is not selected
  // otherwise assigning input to secondValue

  if (selectedOperation === "") {
    console.log("i am not else");
    firstValue = Number(calculatorDisplay.innerText);
  } else {
    console.log("I AM ELSE");
    secondValue = Number(calculatorDisplay.innerText);
  }
}

// function for clicking on operation
function clickOnOperator(element) {
  // adding selected class to button
  element.target.classList.add("selected");

  // disabling rest of the buttons
  operators.forEach((button) => {
    if (button.id === element.target.id) {
      button.disabled = false;
    } else {
      button.disabled = true;
    }
  });

  // setting value of selectedOperation
  selectedOperation = element.target.innerText;

  // clearing calculatorDisplay
  calculatorDisplay.innerText = "";
}

// calcuting result
function clickOnEqual() {
  let result = 0;

  // calculating result
  switch (selectedOperation) {
    case "+":
      result = firstValue + secondValue;
      break;

    case "-":
      result = firstValue - secondValue;
      break;

    case "/":
      if (secondValue === 0) {
        result = 0;
      } else {
        result = firstValue / secondValue;
      }
      break;

    case "*":
      result = firstValue * secondValue;
      break;
  }

  // checking if result has decimals
  if (!Number.isSafeInteger(result)) {
    result = result.toFixed(2);
  }

  // putting result in firstValue
  firstValue = result;

  // displaying result
  calculatorDisplay.innerText = result;

  // removing disabled from operations

  operators.forEach((operation) => {
    operation.disabled = false;
    operation.classList.remove("selected");
  });
}

function clickOnAc() {
  firstValue = 0;
  secondValue = 0;
  selectedOperation = "";
  calculatorDisplay.innerText = "";

  // removing disabled from operations

  operators.forEach((operation) => {
    operation.disabled = false;
    operation.classList.remove("selected");
  });
}
