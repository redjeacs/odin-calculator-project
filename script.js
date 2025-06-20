let num1 = '';
let num2 = '';
let mathOperator = null;
const numBtn = document.querySelectorAll('.numBtn');
const operatorBtn = document.querySelectorAll('.operatorBtn')
const equalBtn = document.querySelector('.btnEqual')
let display = document.querySelector('.display');
display.textContent = '';


function add(a, b) {
  return a + b;
};

function subtract(a, b) {
  return a - b;
};

function multiply(a, b) {
  return a * b;
};

function divide(a, b) {
  return a / b;
};



function operate(mathOperator, a, b) {
  a = Number(a);
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
      };
      return divide(a, b);
  };
};

numBtn.forEach((button) => 
  button.addEventListener('click', function() {
    display.textContent = button.textContent;
    if(num1 === '') {
      return num1 = display.textContent;
    }
    return num2 = display.textContent;
  }
));

operatorBtn.forEach((button) => 
  button.addEventListener('click', () => mathOperator = button.textContent)
);

equalBtn.addEventListener('click', () => 
  display.textContent = operate(mathOperator, num1, num2)
);