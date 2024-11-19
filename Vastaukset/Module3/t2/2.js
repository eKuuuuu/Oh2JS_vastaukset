'use strict'

const targetEelemnt = document.getElementById('target')

for (let i = 1; i <= 3; i++) {
  const listItem = document.createElement('li')

  listItem.textContent = `Item ${i}`;

  targetEelemnt.appendChild(listItem)
}
