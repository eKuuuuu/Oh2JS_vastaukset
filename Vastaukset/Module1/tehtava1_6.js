'use strict';
const option = confirm("Should I calculate the squareroot");

if (option) {
  const number = parseFloat(prompt("Enter a number:"));
  const vastaus = Math.sqrt(number)
  document.querySelector('#target').innerHTML = vastaus;
}


