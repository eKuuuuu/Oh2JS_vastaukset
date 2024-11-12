'use strict';

function collectUniqueNumbers() {
    const numbers = [];
    while (true) {
        const input = prompt("Enter a number:");
        const number = parseFloat(input);

        if (numbers.includes(number)) {
            console.log("Number already given! Stopping operation.");
            break;
        }

        numbers.push(number);
    }

    console.log(numbers.sort((a, b) => a - b));
}

collectUniqueNumbers();
