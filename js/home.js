// Features Cash Out
document.getElementById('cash-out-feature-button').addEventListener('click', (event) => {
        // event.preventDefault();
        // const addMoneyDiv = document.getElementById('add-money-div');
        // const cashOutDiv = document.getElementById('cash-out-div');
        // addMoneyDiv.style.display = 'none';
        // cashOutDiv.style.display = 'block';
        document.getElementById('cash-out-div').classList.remove('hidden');
        document.getElementById('add-money-div').classList.add('hidden');
    })
    // Features Add Money
document.getElementById('add-money-feature-button').addEventListener('click', (event) => {
        // event.preventDefault();
        // const addMoneyDiv = document.getElementById('add-money-div');
        // const cashOutDiv = document.getElementById('cash-out-div');
        // addMoneyDiv.style.display = 'block';
        // cashOutDiv.style.display = 'none';

        document.getElementById('add-money-div').classList.remove('hidden');
        document.getElementById('cash-out-div').classList.add('hidden');
    })
    // Add Money
    // console.log('Add Money Loaded');
document.getElementById('button-add-money').addEventListener('click', (event) => {
    event.preventDefault();
    // console.log('Add Money Button Clicked');
    // getInputFieldByID();
    const addMoney = getInputFieldByID('add-money-input-field');
    const pinNumber = getInputFieldByID('add-money-password-input-field');
    console.log('add money value', addMoney, pinNumber);


    if (pinNumber === 1234) {
        const accountBalance = getTextFieldValueByID('account-balance');
        // const currentBalance = parseFloat(accountBalance.innerText);
        // const newInputMoney = parseFloat(addMoney);
        console.log(accountBalance, addMoney);

        if (!isNaN(addMoney)) {
            const newBalance = accountBalance + addMoney;
            document.getElementById('account-balance').innerText = newBalance.toFixed(2);
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
// Cash Out 
document.getElementById('button-cash-out-money').addEventListener('click', () => {
    const reduceMoneyInput = getInputFieldByID('cash-out-input-field');
    const reduceMoneyPasswordInput = getInputFieldByID('cash-out-password-input-field');

    if (reduceMoneyPasswordInput === 1234) {
        const currentBalance = getTextFieldValueByID('account-balance');

        if (isNaN(reduceMoneyInput)) {
            alert('Invalid Amount Entered');
            return;
        }

        if (!isNaN(reduceMoneyInput)) {
            if (reduceMoneyInput > currentBalance) {
                alert("Insufficient balance.");
                return;
            }
            const newBalance = currentBalance - reduceMoneyInput;
            document.getElementById('account-balance').innerText = newBalance.toFixed(2);
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