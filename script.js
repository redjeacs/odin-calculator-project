let num1 = '';
let num2 = '';
let mathOperator = null;


function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}



function operate(mathOperator, a, b) {
  a = Number(a)
  b = Number(b);
  switch(mathOperator) {
    case '+': 
      return add(a, b);
    case '-':
      return subtract(a, b);
    case '*':
      return multiply(a, b);
    case '/':
      if(b === 0) {
        return null;
      }
      return divide(a, b);
  }
}