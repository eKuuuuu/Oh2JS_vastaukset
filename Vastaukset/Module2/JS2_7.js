'use strict';

function dices() {
  const tracking = [];
  const sides = parseInt(prompt("How many sides: "), 10);

  if (isNaN(sides) || sides <= 0) {
    alert("Please enter a valid positive number for sides.");
    return;
  }

  const participantsList = document.getElementById("target");
  if (!participantsList) {
    console.error("Target element not found in the DOM.");
    return;
  }

  while (true) {
    const dice = Math.floor(Math.random() * sides) + 1; // range: 1 to sides
    tracking.push(dice);

    if (dice === sides) {
      tracking.forEach((roll) => {
        const listItem = document.createElement("li");
        listItem.textContent = roll;
        participantsList.appendChild(listItem);
      });
      break;
    }
  }
}

dices();
