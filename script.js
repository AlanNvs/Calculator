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

function eventButtons() {
  const number = document.querySelectorAll('.number');
  const firstArray = [];

  number.forEach(number => {
    number.addEventListener('click', () => {
      firstArray.push(number.textContent.valueOf());
      populateDisplay(firstArray);
    });
  });

/*   btn0.addEventListener('click', () => {
    firstArray.push(0);
    display.textContent = firstArray.join('');
  });
  btn1.addEventListener('click', () => {
    firstArray.push(btn1.textContent.valueOf());
    display.textContent = firstArray.join('');
  }); */
}
eventButtons();