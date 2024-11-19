document.getElementById('source').addEventListener('submit', function (event) {
    event.preventDefault();

    const firstName = document.querySelector('input[name="firstname"]').value.trim();
    const lastName = document.querySelector('input[name="lastname"]').value.trim();

    if (!firstName || !lastName) {
        document.getElementById('target').innerText = "Please enter both first name and last name.";
        return;
    }

    document.getElementById('target').innerText = `Your name is ${firstName} ${lastName}`;
});
