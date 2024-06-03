// scripts.js
let display = document.getElementById('display');

function appendToDisplay(value) {
    if (display.innerText === '0' && value !== '.') {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

function clearDisplay() {
    display.innerText = '0';
}

function backspace() {
    display.innerText = display.innerText.slice(0, -1);
    if (display.innerText === '') {
        display.innerText = '0';
    }
}

function calculate() {
    try {
        display.innerText = eval(display.innerText);
    } catch {
        display.innerText = 'Error';
    }
}

function changeSign() {
    if (display.innerText.startsWith('-')) {
        display.innerText = display.innerText.substring(1);
    } else {
        display.innerText = '-' + display.innerText;
    }
}

function calculatePercentage() {
    display.innerText = (parseFloat(display.innerText) / 100).toString();
}

function calculateSquareRoot() {
    display.innerText = Math.sqrt(parseFloat(display.innerText)).toString();
}

function calculatePower() {
    let base = parseFloat(display.innerText);
    let exponent = prompt("Digite o expoente:");
    if (exponent !== null) {
        display.innerText = Math.pow(base, parseFloat(exponent)).toString();
    }
}

function calculateLog() {
    display.innerText = Math.log10(parseFloat(display.innerText)).toString();
}

function calculateSin() {
    display.innerText = Math.sin(parseFloat(display.innerText) * Math.PI / 180).toString();
}

function calculateCos() {
    display.innerText = Math.cos(parseFloat(display.innerText) * Math.PI / 180).toString();
}

function calculateTan() {
    display.innerText = Math.tan(parseFloat(display.innerText) * Math.PI / 180).toString();
}

