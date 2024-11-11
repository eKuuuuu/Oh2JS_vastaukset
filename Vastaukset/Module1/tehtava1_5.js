'use strict';
const year = prompt("Anna vuosi:");
const intnumber = parseInt(year);

function leapYear(year) {
    if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
        return "is a leap year";
    } else {
        return "is not a leap year";
    }
}

document.querySelector('#target').innerHTML = leapYear(intnumber);
