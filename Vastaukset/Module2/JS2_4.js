'use strict'

let array = []

while (true) {
  const number = parseInt(prompt("Give a number, enter zero to stop: "))
  array.push(number)
  array.sort((a,b) => b - a)
  if (number === 0) {
    console.log(array)
    break
  }
}
