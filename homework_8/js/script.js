'use strict'
const submit = document.getElementById('submit');

submit.addEventListener('click', (event)=> {

const firstNumber = document.getElementById('first-number').value;
const operatorCalc = document.getElementById('operator').value;
const secondNumber = document.getElementById('second-number').value;
let result = 0;


    if(firstNumber === ''){
        console.log('Первое число не указано');
    }
    else if (isNaN(firstNumber)){
        console.log('Некорректный ввод чисел')
    }
    if(operatorCalc === ''){
        console.log('Не введен знак');
    }
    if(secondNumber === ''){
        console.log('Второе число не указаано');
    }
    else if (isNaN(secondNumber)){
        console.log('Некорректный ввод чисел')
    }
    
    switch(operatorCalc){
        
        case '+':
            result = Number(firstNumber) + Number(secondNumber);
            if(result === NaN || result === Infinity){
                console.log('Операция не корректна');
            }
            else {
                console.log(result);
            }
        break;
        case '-':
            result = Number(firstNumber) - Number(secondNumber);
            if(result === NaN || result === Infinity){
                console.log('Операция не корректна');
            }
            else {
                console.log(result);
            }
        break;
        case '*':
            result = Number(firstNumber) * Number(secondNumber);
            if(result === NaN || result === Infinity){
                console.log('Операция не корректна');
            }
            else {
                console.log(result);
            }
        break;
        case '/':
            result = Number(firstNumber) / Number(secondNumber);
            if(result === NaN || result === Infinity){
                console.log('Операция не корректна');
            }
            else {
                console.log(result);
            }
        break;
        default: {
            console.log('Программа не поддерживает такую операцию');
        }
    
    }

});