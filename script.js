function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function divide(a,b) {
    return a/b;
}

function multiply(a,b) {
    return a*b;
}

function operate(a,b,operator) {
    let result = 0;
    switch (operator) {
        case '+':
            result = add(a,b);
            break;
        
        case '-':
            result = subtract(a,b);
            break;

        case '/':
            result = divide(a,b);
            break;

        case 'x': 
            result = multiply(a,b);
            break;    
        case 'end':
            return a;

        default:
            return b;
            break;
    }
    return result;
}

function displayNumbers(screenDigit) {
    screenDigits += screenDigit;
    if (screenDigit != '.') screenDigits = Number(screenDigits);
    display.innerHTML = screenDigits;
}

function deleteNumber() {
    if (screenDigits != 0){
        screenDigits = String(screenDigits);
        screenDigits = screenDigits.slice(0, -1);
        screenDigits = Number(screenDigits);
        display.innerHTML = screenDigits;       
    }
}

const display = document.querySelector('#screenDigits');
let screenDigits = 0;
display.innerHTML = screenDigits;

let number1 = 0;
let number2 = 0;
let operator = '';
let khm = false;

const clear = document.querySelector('#clearButton');
clear.addEventListener('click', (e) => {
    const display = document.querySelector('#screenDigits');
    screenDigits = 0;
    number1 = 0;
    number2 = 0;
    khm = false;
    operator = '';
    display.innerHTML = screenDigits;
});

const numberButtons = document.querySelectorAll('.numberButton');
numberButtons.forEach(element => {
    element.addEventListener('click', (e) => {
        if (operator == 'end'){
            screenDigits = 0;
        number1 = 0;
        number2 = 0;
        khm = false;
        operator = '';
        }
        const screenDigit = e.target.innerText;
        displayNumbers(screenDigit);
    });
});

const operationButton = document.querySelectorAll('.operationButton');
operationButton.forEach(element => {
    element.addEventListener('click', (e) => {
        number1 = screenDigits;
        number2 = operate(number2,number1,operator);
        operator = e.target.innerText;
        display.innerHTML = number2;
        screenDigits = 0;
        khm = true;
    });    
});

const result = document.querySelector('#equals');
result.addEventListener('click', () => {
    if (khm = true) {
        number1 = screenDigits;
        number2 = operate(number2,number1,operator);
    }
    display.innerHTML = number2;         
    operator = 'end';
    console.log(number1 , number2, screenDigits);
});

const del = document.querySelector('#backspaceButton');
del.addEventListener('click', deleteNumber);