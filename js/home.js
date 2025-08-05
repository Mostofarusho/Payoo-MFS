document.getElementById('button-add-money').addEventListener('click', (event) => {
    event.preventDefault();

    const addedMoneyInput = document.getElementById('add-money-input-field').value;
    const addedMoneyPasswordInput = document.getElementById('add-money-password-input-field').value;

    if (addedMoneyPasswordInput === '1234') {
        const accountBalance = document.getElementById('account-balance');
        const currentBalance = parseFloat(accountBalance.innerText);
        const newInputMoney = parseFloat(addedMoneyInput);

        if (!isNaN(newInputMoney)) {
            const newBalance = currentBalance + newInputMoney;
            accountBalance.innerText = newBalance.toFixed(2);
            console.log('New Balance:', newBalance);
            alert('Money added successfully!');
        } else {
            alert('Invalid amount entered');
        }

    } else {
        alert('Failed To add Money: Wrong Password');
    }
});