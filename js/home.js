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
            document.getElementById('add-money-input-field').value = '';
            document.getElementById('add-money-password-input-field').value = '';
        } else {
            alert('Invalid amount entered');
        }

    } else {
        alert('Failed To add Money: Wrong Password');
    }
});

document.getElementById('button-cash-out-money').addEventListener('click', () => {
    const reduceMoneyInput = document.getElementById('cash-out-input-field').value;
    const reduceMoneyPasswordInput = document.getElementById('cash-out-password-input-field').value;

    if (reduceMoneyPasswordInput === '1234') {
        const accountBalance = document.getElementById('account-balance');
        const currentBalance = parseFloat(accountBalance.innerText);
        const newInputMoney = parseFloat(reduceMoneyInput);
        if (isNaN(newInputMoney)) {
            alert('Invalid Amount Entered');
            return;
        }

        if (!isNaN(newInputMoney)) {
            if (newInputMoney > currentBalance) {
                alert("Insufficient balance.");
                return;
            }
            const newBalance = currentBalance - newInputMoney;
            accountBalance.innerText = newBalance.toFixed(2);
            console.log('Reduce Money', accountBalance);
            alert('Money Reduce Successfully')
            document.getElementById('add-money-input-field').value = '';
            document.getElementById('add-money-password-input-field').value = '';
        } else {
            alert('Invalid Amount Entered');
        }
    } else {
        alert('Failed To Reduce Money: Wrong Password');
    }
})