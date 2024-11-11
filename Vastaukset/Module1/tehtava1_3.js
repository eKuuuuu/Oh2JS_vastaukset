'use strict';
    const number1 = prompt("Type your number:");
    const number2 = prompt("Type your second number")
    const number3 = prompt("Type your third number")
    const num1 = parseInt(number1)
    const num2 = parseInt(number2)
    const num3 = parseInt(number3)
    const addition = num1 + num2 + num3
    const avg = addition / 3
    const multiplication = number1 * number2 * number3
    document.querySelector('#target').innerHTML = 'Sum = '+ addition + ' Average = '+ avg + ' Product = ' + multiplication;
