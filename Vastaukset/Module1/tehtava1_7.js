'use strict';
const dices = parseFloat(prompt("How many dice rolls"));

let sum = 0

for (let i = 0; i < dices; i++) {
  let roll = Math.floor(Math.random()*6) +1
  sum += roll;
}

document.querySelector('#target').innerHTML ='Sum of dices results are '+ sum;




