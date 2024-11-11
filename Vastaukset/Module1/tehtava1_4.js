'use strict';
    const name = prompt("Anna nimesi:")
    const random = Math.floor(Math.random()*4)
    console.log(random)
    let house;
    if (random === 1) {
        house = "Ravenclaw"
    }   else if (random === 2) {
        house = "Hufflepuff"
    }   else if (random === 3) {
        house = "Slytherin"
    }   else {
        house = "Gryffindor"
    }

    document.querySelector('#target').innerHTML = house;


