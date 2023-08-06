const display = document.getElementById("display");
const numberButtons = document.querySelectorAll(".btn.number");
const operatorButtons = document.querySelectorAll(".btn.operator");
const clearButton = document.querySelector(".btn.clear");
const equalButton = document.querySelector(".btn.equal");

class Calculator {
  constructor(inputValue) {
    this.inputValue = inputValue;

    if (inputValue) {
      const [num1Str, operator, num2Str] = inputValue.split(" ");

      this.num1 = parseFloat(num1Str);
      this.num2 = parseFloat(num2Str);
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
  const calculator = new Calculator(display.value);
  const [num1, operator, num2] = display.value.split(" ");
  switch (operator) {
    case "+":
      display.value = calculator.add();
      break;
    case "-":
      display.value = calculator.subs();
      break;
    case "*":
      display.value = calculator.multiply();
      break;
    case "/":
      if (num2 === 0) {
        display.value = "Cannot divide by zero";
        return;
      }
      display.value = calculator.divide();
      break;
    default:
      display.value = "Invalid operator";
  }
});
