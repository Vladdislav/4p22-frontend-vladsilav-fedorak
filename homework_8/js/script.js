'use strict'
const submit = document.getElementById('submit');
let result;

submit.addEventListener('click', (event)=> {

const firstNumber = document.getElementById('first-number').value.trim();
const operatorCalc = document.getElementById('operator').value.trim();
const secondNumber = document.getElementById('second-number').value.trim();



    if(firstNumber === ''){
        return console.log('Первое число не указано');
    }
    else if (isNaN(firstNumber)){
        return console.log('Некорректный ввод чисел')
    }
    if(secondNumber === ''){
        return console.log('Второе число не указаано');
    }
    else if (isNaN(secondNumber)){
        return console.log('Некорректный ввод чисел')
    }
    
    
    switch(operatorCalc){
        
        case '+':
            result = Number(firstNumber) + Number(secondNumber);
        break;
        case '-':
            result = Number(firstNumber) - Number(secondNumber);
        break;
        case '*':
            result = Number(firstNumber) * Number(secondNumber);
        break;
        case '/':
            result = Number(firstNumber) / Number(secondNumber);
        break;
        default: {
            if(operatorCalc === ''){
                console.log('Не введен знак');
            }
            else{
                console.log('Программа не поддерживает такую операцию');
            }
        break;
        }
    
    }
    if(isNaN(result) || !isFinite(result)){
        return console.log('Операция не корректна');
    }
    else {
        return console.log(result);
    }
});