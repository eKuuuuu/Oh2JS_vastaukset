'use strict';

function dices() {
  let tracking = [];

  while (true) {
    const dice = Math.floor(Math.random() * 6) + 1;
    tracking.push(dice);

    if (dice === 6) {
      const participantsList = document.getElementById("target");

      if (!participantsList) {
        console.error("Target element not found in the DOM.");
        return;
      }

      tracking.forEach((roll) => {
        let listItem = document.createElement("li");
        listItem.textContent = roll;
        participantsList.appendChild(listItem);
      });

      break;
    }
  }
}

dices();
