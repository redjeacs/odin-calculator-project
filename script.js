let num1 = '';
let num2 = '';
let mathOperator = null;
const numBtn = document.querySelectorAll('.numBtn');
const operatorBtn = document.querySelectorAll('.operatorBtn');
const equalBtn = document.querySelector('.btnEqual');
const clearBtn = document.querySelector('.clearBtn');
let display = document.querySelector('.display');
display.textContent = '';


function add(a, b) {
  return Math.round((a + b)*100)/100;
};

function subtract(a, b) {
  return Math.round((a - b)*100)/100;
};

function multiply(a, b) {
  return Math.round((a * b)*100)/100;
};

function divide(a, b) {
  return Math.round((a / b)*100)/100;
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
        return 'Undefined';
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
  button.addEventListener('click', function() {
    if (mathOperator !== null) {
      display.textContent = operate(mathOperator, num1, num2);
      num1 = display.textContent;
    }
    mathOperator = button.textContent;
  }
))

equalBtn.addEventListener('click', function() {
  if(num1 === '' || num2 === '' || mathOperator == null) {
    return;
  };
  display.textContent = operate(mathOperator, num1, num2);
}
);

clearBtn.addEventListener('click', function() {
  display.textContent = '';
  num1 = '';
  num2 = '';
  mathOperator = null;
})