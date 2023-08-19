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

  calculate() {
    const [num1, operator, num2] = this.inputValue.split(" ");
    switch (operator) {
      case "+":
        return this.add();
      case "-":
        return this.subs();
      case "*":
        return this.multiply();
      case "/":
        if (this.num2 === 0) {
          return "Cannot divide by zero";
        }
        return this.divide();
      default:
        return "Invalid operator";
    }
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
  display.value = calculator.calculate();
});
