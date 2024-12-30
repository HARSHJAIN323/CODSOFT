let display = document.getElementById('display');

function appendNumber(number) {
  display.value += number;
}

function appendOperator(operator) {
  display.value += operator;
}

function appendDot() {
  if (!display.value.includes('.')) {
    display.value += '.';
  }
}

function clearDisplay() {
  display.value = '';
}

function backspace() {
  display.value = display.value.slice(0, -1);
}

function calculateSquare() {
  if (display.value !== '') {
    display.value = Math.pow(parseFloat(display.value), 2);
  }
}

function calculateSquareRoot() {
  if (display.value !== '') {
    display.value = Math.sqrt(parseFloat(display.value));
  }
}

function calculateLog() {
  if (display.value !== '') {
    display.value = Math.log10(parseFloat(display.value));
  }
}

function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
}
