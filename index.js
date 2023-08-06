const display = document.getElementById("display");
const numberButtons = document.querySelectorAll(".btn.number");
const operatorButtons = document.querySelectorAll(".btn.operator");
const clearButton = document.querySelector(".btn.clear");
const equalButton = document.querySelector(".btn.equal");
let result = 0;
const operations = ["+", "-", "*", "/"];

class Calculator {
  constructor(inputValue) {
    this.inputValue = inputValue;
    let operatorRegex = new RegExp(`[${operations.join("\\")}]`, "g");
    if (inputValue) {
      this.parts = inputValue.split(operatorRegex);
      this.num1 = parseFloat(parts[0]);
      this.num2 = parseFloat(parts[1]);
    }
  }

  add() {
    return this.num1 + this.num2;
  }

  subs() {
    return this.num1 - this.num2;
  }

  multiply() {
    return this.num1 * this.num2;
  }

  divide() {
    return this.num1 / this.num2;
  }
}

let calculator = new Calculator();

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    display.value += button.textContent;
  });
});

operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    display.value += ` ${button.textContent} `;
  });
});

clearButton.addEventListener("click", () => {
  display.value = "";
});

equalButton.addEventListener("click", () => {
  const inputValue = display.value;
  const parts = inputValue.split(" ");

  if (parts.length !== 3) {
    display.value = "Invalid input";
    return;
  }

  const [num1Str, operator, num2Str] = parts;
  console.log(operator, "operator");
  const num1 = parseFloat(num1Str);
  const num2 = parseFloat(num2Str);

  if (isNaN(num1) || isNaN(num2) || !operations.includes(operator)) {
    display.value = "Invalid input";
    return;
  }

  calculator.num1 = num1;
  calculator.num2 = num2;

  switch (operator) {
    case "+":
      result = calculator.add();
      break;
    case "-":
      result = calculator.subs();
      break;
    case "*":
      result = calculator.multiply();
      break;
    case "/":
      if (num2 === 0) {
        display.value = "Cannot divide by zero";
        return;
      }
      result = calculator.divide();
      break;
    default:
      display.value = "Invalid operator";
      return;
  }

  display.value = result;
});
