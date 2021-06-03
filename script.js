let lastOperand = 0;
let operation = null;
let result = 0;

const inputWindow = document.getElementById('inputWindow');

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
    nowVal = 0;
});

// Кнопки операций
document.getElementById('btn_sum').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    operation = 'sum';
    inputWindow.value = '';
});

document.getElementById('btn_sub').addEventListener('click', function () {
    
    lastOperand = parseFloat(inputWindow.value);
    operation = 'sub';
    inputWindow.value = '';
});

document.getElementById('btn_mul').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    operation = 'mul';
    inputWindow.value = '';
});

document.getElementById('btn_div').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    operation = 'div';
    inputWindow.value = '';
});

document.getElementById('btn_sqrt').addEventListener('click', function () {
    result = Math.sqrt(parseFloat(inputWindow.value));
    operation = null;
    inputWindow.value = result;
});

document.getElementById('btn_change').addEventListener('click', function () {
    inputWindow.value = -parseFloat(inputWindow.value); 
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
            inputWindow.value = result;
            break;
        case 'sub':
            result = lastOperand - parseFloat(inputWindow.value);
            operation = null;
            lastOperand = result;
            inputWindow.value = result;
            break;
        case 'mul':
            result = lastOperand * parseFloat(inputWindow.value);
            operation = null;
            lastOperand = result;
            inputWindow.value = result;
            break;
        case 'div':
            result = lastOperand / parseFloat(inputWindow.value);
            operation = null;
            lastOperand = result;
            inputWindow.value = result;
            break;
    }
});