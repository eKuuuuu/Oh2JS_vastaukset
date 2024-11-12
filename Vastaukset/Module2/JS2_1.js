'use strict'
const numbers = []
const number1 = prompt("Give first number:")
numbers.push(number1)
const number2 = prompt("Give second number:")
numbers.push(number2)
const number3 = prompt("Give third number:")
numbers.push(number3)
const number4 = prompt("Give fourth number:")
numbers.push(number4)



for (let i = numbers.length - 1; i >= 0; i--) {
  console.log(numbers[i])
}
