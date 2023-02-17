let firstOperand = '';
let secondOperand = '';
let operator = '';

const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const acctions = ['-', '+', '*', '/'];

const output = document.querySelector('.output');

function clear() {
    firstOperand = '';
    secondOperand = '';
    operator = '';
    output.textContent = 0;
}