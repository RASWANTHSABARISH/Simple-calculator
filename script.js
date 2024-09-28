// Get the display element
const display = document.querySelector('.display');

// Initialize the display value to '0' when the page loads
display.value = '0';

// Variables to store the current value, previous value, and operator
let currentValue = '';
let previousValue = '';
let operator = '';

// Function to append numbers to the display
function appendNumber(number) {
    // If the current value is '0', replace it with the number
    if (currentValue === '0') {
        currentValue = number;
    } else {
        currentValue += number;
    }
    display.value = currentValue;
}

// Function to handle decimal point
function appendDecimal() {
    // Check if decimal already exists in the current value
    if (!currentValue.includes('.')) {
        currentValue += '.';
        display.value = currentValue;
    }
}

// Function to set the operator
function setOperator(op) {
    // If there's already an operator and a previous value, calculate the result
    if (operator && previousValue) {
        calculate();
    }
    operator = op;
    // Display the first number, operator, and then clear the current value for the second number
    display.value = `${currentValue} ${operator}`;

    previousValue = currentValue;
    currentValue = '';
}

// Function to perform calculation
function calculate() {
    let result;
    const num1 = parseFloat(previousValue);
    const num2 = parseFloat(currentValue);

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        case '%':
            result = num1 % num2;
            break;
        default:
            return;
    }

    // Display the result
    display.value = result;
    // Reset the previous value
    previousValue = '';
    // Reset the operator
    operator = '';
}

// Function to clear the display and reset the calculator
function clearDisplay() {
    display.value = '0';
    currentValue = '';
    previousValue = '';
    operator = '';
}
