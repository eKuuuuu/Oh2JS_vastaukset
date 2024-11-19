'use strict';

const targetElement = document.getElementById('target');

let lista = '';

for (let i = 1; i <= 3; i++) {
  lista += `<li>Item ${i}</li>`;
}

targetElement.innerHTML = lista;
