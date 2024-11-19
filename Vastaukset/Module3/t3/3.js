'use strict';
const names = ['John', 'Paul', 'Jones'];

// Make sure to use the correct variable name
const targetElement = document.getElementById('target');

for (let i = 0; i < names.length; i++) {
  const listItem = document.createElement('li');
  listItem.textContent = names[i];
  targetElement.appendChild(listItem);
}
