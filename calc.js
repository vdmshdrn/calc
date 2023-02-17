let firstOperand = '';
let secondOperand = '';
let operator = '';
let finish = false;

const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const acctions = ['-', '+', '*', '/'];

const output = document.querySelector('.output');

function clear() {
    firstOperand = '';
    secondOperand = '';
    operator = '';
    output.textContent = 0;
}
document.querySelector('.clear').onclick = clear;

window.addEventListener('click', (e) => {
    if (!e.target.classList.contains('btn')) return;

    if (e.target.classList.contains('clear')) return;

    output.textContent = '';

    const key = e.target.textContent;

    if (numbers.includes(key)) {
        if (secondOperand === '' && operator === '') {
            firstOperand += key;
            output.textContent = firstOperand;
        } else if (firstOperand !== '' && secondOperand !== '' && finish) {
            secondOperand = key;
            finish = false;
            output.textContent = secondOperand;
        } else {
            secondOperand += key;
            output.textContent = secondOperand;
            return;
        }
    }
    if (acctions.includes(key)) {
        operator = key;
        output.textContent = operator;
        return;
    }

    if (key === '=') {
        if (secondOperand === '') secondOperand = firstOperand;
        switch (operator) {
            case '+':
                firstOperand = (+firstOperand) + (+secondOperand);
                break;
            case '-':
                firstOperand = firstOperand - secondOperand;
                break;
            case '/':
                firstOperand = firstOperand / secondOperand;
                break;
            case '*':
                firstOperand = firstOperand * secondOperand;
                break;
        }
        finish = true;
        output.textContent = firstOperand;
    }

});