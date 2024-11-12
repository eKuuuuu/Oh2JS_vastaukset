'use strict'
let dogs = []

for (let i = 6 - 1; i >= 0; i--) {
  const dog = prompt("Give a name of a dog:")
  dogs.push(dog)
}

dogs.sort()
dogs.reverse()

const participantsList = document.getElementById("target");
dogs.forEach(name => {
  let listItem = document.createElement("li");
  listItem.textContent = name;
  participantsList.appendChild(listItem);
});
