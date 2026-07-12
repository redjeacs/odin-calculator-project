let num1 = "";
let num2 = "";
let mathOperator = null;
const numBtn = document.querySelectorAll(".numBtn");
const operatorBtn = document.querySelectorAll(".operatorBtn");
const equalBtn = document.querySelector(".btnEqual");
const clearBtn = document.querySelector(".clearBtn");
const deleteBtn = document.querySelector(".deleteBtn");
let display = document.querySelector(".display");

function add(a, b) {
  return Math.round((a + b) * 100) / 100;
}

function subtract(a, b) {
  return Math.round((a - b) * 100) / 100;
}

function multiply(a, b) {
  return Math.round(a * b * 100) / 100;
}

function divide(a, b) {
  return Math.round((a / b) * 100) / 100;
}

function modulo(a, b) {
  return Math.round((a % b) * 100) / 100;
}

function operate(mathOperator, a, b) {
  a = Number(a);
  b = Number(b);
  switch (mathOperator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      if (b === 0) {
        return "Undefined";
      }
      return divide(a, b);
    case "%":
      if (b === 0) {
        return "Undefined";
      }
      return modulo(a, b);
  }
}

numBtn.forEach((button) =>
  button.addEventListener("click", function () {
    if (mathOperator === null && num1.length < 10) {
      if (num1 === "0") {
        num1 = button.textContent;
      } else {
        num1 += button.textContent;
      }
      display.textContent = num1;
    } else if (mathOperator !== null && num2.length < 10) {
      num2 += button.textContent;
      display.textContent = num2;
    }
  }),
);

operatorBtn.forEach((button) =>
  button.addEventListener("click", function () {
    if (num1 === "") {
      num1 = "0";
    }
    if (mathOperator !== null && num2 !== "") {
      num1 = operate(mathOperator, num1, num2);
      display.textContent = num1;
      num2 = "";
    }
    mathOperator = button.textContent;
  }),
);

equalBtn.addEventListener("click", function () {
  if (num1 === "" || mathOperator === null || num2 === "") {
    return alert("Please complete the operation.");
  }
  display.textContent = operate(mathOperator, num1, num2);
  num1 = display.textContent;
  num2 = "";
  mathOperator = null;
});

clearBtn.addEventListener("click", function () {
  display.textContent = "0";
  num1 = "0";
  num2 = "";
  mathOperator = null;
});

deleteBtn.addEventListener("click", function () {
  if (mathOperator === null) {
    if (num1.length > 0) {
      num1 = num1.slice(0, -1);
      display.textContent = num1 || "0";
    }
  } else if (num2 !== "") {
    num2 = num2.slice(0, -1);
    display.textContent = num2;
  }
});
