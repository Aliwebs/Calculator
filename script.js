let calculator = document.getElementById('calculator');
let total = document.getElementById('total')
let output = document.getElementById('output');
let del = document.getElementById('del');

calculator.addEventListener('click', display);
total.addEventListener('click', calc);
del.addEventListener('click', clearValue);
del.addEventListener('long-press', clearDisplay);

let calculation = Array();

let operations = ['+', '-', '/', '*'];




function display(e) {
    output = document.getElementById('output');
    if (e.target.tagName == "BUTTON") {
        if (e.target.value == "sqrt") {
            output = document.getElementById('output');
            output.value = Math.sqrt(output.value);
        } else if (output.value == "0") {
            output.value = "";
            output.value = output.value + e.target.value;
        } else {
            output.value = output.value + e.target.value;
        }
    }
}

function calc() {
    output = document.getElementById('output');
    let usedOp = operations.filter(operation => {
        if (output.value.includes(operation)) {
            return true;
        } else {
            return false;
        }
    })
    let splitArray = output.value.split(/[^0-9]/g);
    // let answer = operators[usedOp[usedOp.length - 1]](parseInt(splitArray[0]), parseInt(splitArray[1]));
    output.value = eval(output.value).toFixed(2);
}


function clearDisplay() {
    del.setAttribute('class', 'longPressDel');
    output.setAttribute('class', 'longPressDel');
    output.value = 0;
}

function clearValue() {
    let cleanedValue = output.value.split('').pop();
    output.value = output.value.replace(cleanedValue, '');
}