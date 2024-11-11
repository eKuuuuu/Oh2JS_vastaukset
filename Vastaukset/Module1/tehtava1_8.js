const startyear = parseInt(prompt("Anna alku vuosi:"));
const endyear = parseInt(prompt("Anna loppu vuosi:"));

let empty = "";

if (!isNaN(startyear) && !isNaN(endyear) && startyear <= endyear) {
  for (let year = startyear; year <= endyear; year++) {
    if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
      empty += `<li>${year}</li>`;
    }
  }
}

document.querySelector('#target').innerHTML = empty;
