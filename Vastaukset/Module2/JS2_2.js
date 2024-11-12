'use strict'
const amount = parseInt(prompt("How many participants: "))

let participiants = []

for (let i = amount - 1; i >= 0; i--) {
  const names = prompt("Give a name of a participant:")
  participiants.push(names)
}

participiants.sort()

const participantsList = document.getElementById("target");
participiants.forEach(name => {
  let listItem = document.createElement("li");
  listItem.textContent = name;
  participantsList.appendChild(listItem);
});
