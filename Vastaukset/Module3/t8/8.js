document.getElementById('start').addEventListener('click', function () {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('result').innerText = "Please enter valid numbers.";
        return;
    }

    let result;

    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'sub':
            result = num1 - num2;
            break;
        case 'multi':
            result = num1 * num2;
            break;
        case 'div':
            if (num2 === 0) {
                document.getElementById('result').innerText = "Division by zero is not allowed.";
                return;
            }
            result = num1 / num2;
            break;
        default:
            document.getElementById('result').innerText = "Invalid operation.";
            return;
    }

    document.getElementById('result').innerText = `Result: ${result}`;
});
