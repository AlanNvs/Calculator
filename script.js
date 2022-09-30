'use strict'
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

function operate(a, b, operator) {
  switch (operator) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case '*':
      return multiply(a, b);
    case '/':
      return divide(a, b);
  }
}
function populateDisplay(numbersArray) {
  const display = document.querySelector('.display');
    display.textContent = +numbersArray.join('');
}
function clear(numberDisplay) {
  numberDisplay.length = 0;
}

function calcButtons() {
  const number = document.querySelectorAll('.number');
  const numberArray = [];
  let operation = '';
  let firstOperand;
  function getFirstNumber() {
    number.forEach(number => {
      number.addEventListener('click', () => {
        numberArray.push(number.textContent);
        populateDisplay(numberArray);
      });
    });
  }
  function operatorButtons() {
    const operator = document.querySelectorAll('.operator');

    operator.forEach(operator => {
      operator.addEventListener('click', () => {
        if(operation.length === 0) {
          operation = operator.textContent.valueOf();
          firstOperand = +numberArray.join('');
          numberArray.length = 0;
        } else {
          console.log(firstOperand, +numberArray.join(''), operation);
          let result = operate(firstOperand, +numberArray.join(''), operation);
          console.log(result);
          firstOperand = result;
          console.log(firstOperand);
          numberArray.length = 0;
          numberArray.push(result);
          populateDisplay(numberArray);
          numberArray.length = 0;
          operation = '';
          operation = operator.textContent.valueOf();
        }
      });
    });
  }
  function calculate() {
    const equal = document.querySelector('.equal');
    console.log(firstOperand, numberArray, operation);

      equal.addEventListener('click', () => {
        if((firstOperand === undefined) || (numberArray.length === 0) || (operation === '')) {

        } else {
          console.log(firstOperand, +numberArray.join(''), operation);
          let result = operate(firstOperand, +numberArray.join(''), operation);
          console.log(result);
          firstOperand = result;
          console.log(firstOperand);
          numberArray.length = 0;
          numberArray.push(result);
          populateDisplay(numberArray);
          numberArray.length = 0;
        }
      });
    

  }
  getFirstNumber();
  operatorButtons();
  calculate();
}
calcButtons();