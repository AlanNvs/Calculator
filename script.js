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
  display.textContent = numbersArray.join('');
}
function clear() {
  const numberArray = numbersButtons();
  numberArray.length = 0;
}
function numbersButtons() {
  const number = document.querySelectorAll('.number');
  const firstArray = [];

  number.forEach(number => {
    number.addEventListener('click', () => {
      firstArray.push(number.textContent.valueOf());
      populateDisplay(firstArray);
    });
  });
  return firstArray;
}
function operatorButtons() {
  const operator = document.querySelectorAll('.operator');
  let operation = '';
  numbersButtons();
  //const numberArray = numbersButtons();
  operator.forEach(operator => {
    operator.addEventListener('click', () => {
      clear();
      //numberArray.length = 0;
      if(operation.length === 0) {
        operation = operator.textContent.valueOf();
      } else {
        operation = '';
        operation = operator.textContent.valueOf();
      }
    });
  });
  return operation;
}
function getOperations() {
  const equal = document.querySelector('.equal');
  let firstNumber = parseInt(numbersButtons().join(''));
  console.log(firstNumber);

}
//operatorButtons();
result();