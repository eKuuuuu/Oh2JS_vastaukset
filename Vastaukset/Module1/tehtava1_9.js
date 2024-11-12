const number = parseInt(prompt("Enter a positive number: "));
let isPrime = true;

if (isNaN(number) || number <= 1) {
    document.querySelector('#target').innerHTML = 'Please enter a number greater than 1.';
} else if (number > 1) {
    for (let i = 2; i <= number / 2; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        document.querySelector('#target').innerHTML = 'Your number is a prime number';
    } else {
        document.querySelector('#target').innerHTML = 'Your number is not a prime number';
    }
}
