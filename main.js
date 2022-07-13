const inputEle = document.querySelector('.input');
let memoryNumber = null; 
let memoryOperator = null;
let displayToggle = false;

function clearDisplay() {
  document.querySelector('.clear-btn').innerHTML = 'C'; // change AC to C
  inputEle.value = '';
  memoryNumber = null;
  memoryOperator = null;
  displayToggle = false;
}

function delInput() {
  const removeLastChar = inputEle.value.slice(0, -1);
  inputEle.value = removeLastChar;
}

function percentOp() {
  inputEle.value = Number(inputEle.value)/100;
}

function result() {
  if(memoryNumber && memoryOperator && !displayToggle) {
    const a = Number(memoryNumber);
    const b = Number(inputEle.value);
    if(memoryOperator === '+') {
      inputEle.value = a + b;
    } else if(memoryOperator === '-') {
      inputEle.value = a - b;
    } else if(memoryOperator === '*') {
      inputEle.value = a * b;
    } else if(memoryOperator === '/') {
      inputEle.value = a / b;
    }
  } else {
    return;
  }
  memoryOperator = null;
}


function clickHandler(val) {
  document.querySelector('.clear-btn').innerHTML = 'AC'; // change C to AC
  if(!displayToggle) {
    inputEle.value += val;
    displayToggle = false;
    console.log('if 1');
  } else if(memoryOperator) {
    inputEle.value = '';
    inputEle.value = val;
    displayToggle = false; // In order to not to clear input when type the second number
    console.log('else if 2');
  } else {
    return;
  }
}

// operator
function operator(v) {
  if(inputEle.value && !memoryOperator) {
    memoryOperator = v;
    memoryNumber = inputEle.value;
    displayToggle = true;
    console.log('Op 1')
  } else if(inputEle.value && memoryOperator) {
    result();
    memoryOperator = v;
    memoryNumber = inputEle.value;
    displayToggle = true;
    console.log('Op 2')
  } else {
    return;
  }
}
