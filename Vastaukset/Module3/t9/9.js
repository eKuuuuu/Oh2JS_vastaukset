document.getElementById('start').addEventListener('click', function () {
    const input = document.getElementById('calculation').value.trim();

    if (!input) {
        document.getElementById('result').innerText = "Please enter a calculation.";
        return;
    }

    let operator;
    let operands;

    if (input.includes('+')) {
        operator = '+';
        operands = input.split('+');
    } else if (input.includes('-')) {
        operator = '-';
        operands = input.split('-');
    } else if (input.includes('*')) {
        operator = '*';
        operands = input.split('*');
    } else if (input.includes('/')) {
        operator = '/';
        operands = input.split('/');
    } else {
        document.getElementById('result').innerText = "Invalid operation. Please use +, -, *, or /.";
        return;
    }

    const num1 = parseInt(operands[0]);
    const num2 = parseInt(operands[1]);

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('result').innerText = "Invalid numbers in the calculation.";
        return;
    }

    let result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                document.getElementById('result').innerText = "Division by zero is not allowed.";
                return;
            }
            result = Math.floor(num1 / num2);
            break;
        default:
            document.getElementById('result').innerText = "Unexpected error.";
            return;
    }

    document.getElementById('result').innerText = `Result: ${result}`;
});
