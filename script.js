let lastOperand = 0;
let operation = null;
let result = 0;
let expression = '';
let count = 1;

const inputWindow = document.getElementById('inputWindow');
const textArea = document.getElementById('historyArea');

// События нажатия на цифры и на очистку поля
document.getElementById('btn_0').addEventListener('click', function () {
    inputWindow.value += '0';
});

document.getElementById('btn_1').addEventListener('click', function () {
    inputWindow.value += '1';
});

document.getElementById('btn_2').addEventListener('click', function () {
    inputWindow.value += '2';
});

document.getElementById('btn_3').addEventListener('click', function () {
    inputWindow.value += '3';
});

document.getElementById('btn_4').addEventListener('click', function () {
    inputWindow.value += '4';
});

document.getElementById('btn_5').addEventListener('click', function () {
    inputWindow.value += '5';
});

document.getElementById('btn_6').addEventListener('click', function () {
    inputWindow.value += '6';
});

document.getElementById('btn_7').addEventListener('click', function () {
    inputWindow.value += '7';
});

document.getElementById('btn_8').addEventListener('click', function () {
    inputWindow.value += '8';
});

document.getElementById('btn_9').addEventListener('click', function () {
    inputWindow.value += '9';
});

document.getElementById('btn_clr').addEventListener('click', function () {
    lastOperand = 0;
    operation = null;
    inputWindow.value = '';
    result = 0;
    expression = '';
});

// Кнопки операций
document.getElementById('btn_sum').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    operation = 'sum';
    expression += inputWindow.value + ' + ';
    inputWindow.value = '';
});

document.getElementById('btn_sub').addEventListener('click', function () {
    
    lastOperand = parseFloat(inputWindow.value);
    operation = 'sub';
    expression += inputWindow.value + ' - ';
    inputWindow.value = '';
});

document.getElementById('btn_mul').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    operation = 'mul';
    expression += inputWindow.value + ' * ';
    inputWindow.value = '';
});

document.getElementById('btn_div').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    operation = 'div';
    expression += inputWindow.value + ' / ';
    inputWindow.value = '';
});

document.getElementById('btn_sqrt').addEventListener('click', function () {
    result = Math.sqrt(parseFloat(inputWindow.value));
    operation = null;
    textArea.value = '---------\n' + '√' + inputWindow.value + ' = ' + result + '\n' + textArea.value;
    inputWindow.value = result;
});

document.getElementById('btn_change').addEventListener('click', function () {
    if (inputWindow.value === '-') inputWindow.value = '';
    else if (inputWindow.value[0] === '-') inputWindow.value = inputWindow.value.substring(inputWindow.value.indexOf('-') + 1);
    else inputWindow.value = '-' + inputWindow.value; 
});

document.getElementById('btn_point').addEventListener('click', function () {
    inputWindow.value += '.';
});

document.getElementById('btn_calc').addEventListener('click', function () {
    switch (operation) {
        case 'sum':
            result = lastOperand + parseFloat(inputWindow.value);
            operation = null;
            lastOperand = result;
            expression += inputWindow.value + ' = ' + result;
            textArea.value = '---------\n' + expression + '\n' + textArea.value;
            expression = '';
            inputWindow.value = result;
            break;
        case 'sub':
            result = lastOperand - parseFloat(inputWindow.value);
            operation = null;
            lastOperand = result;
            expression += inputWindow.value + ' = ' + result;
            textArea.value = '---------\n' + expression + '\n' + textArea.value;
            expression = '';
            inputWindow.value = result;
            break;
        case 'mul':
            result = lastOperand * parseFloat(inputWindow.value);
            operation = null;
            lastOperand = result;
            expression += inputWindow.value + ' = ' + result;
            textArea.value = '---------\n' + expression + '\n' + textArea.value;
            expression = '';
            inputWindow.value = result;
            break;
        case 'div':
            result = lastOperand / parseFloat(inputWindow.value);
            operation = null;
            lastOperand = result;
            expression += inputWindow.value + ' = ' + result;
            textArea.value = '---------\n' + expression + '\n' + textArea.value;
            expression = '';
            inputWindow.value = result;
            break;
    }
});