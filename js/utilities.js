// Common Shared Function
// console.log('Utilities Loaded Start');

function getInputFieldByID(id) {
    console.log('Will Get Value By ID');
    const InputMoneyValue = document.getElementById(id).value;
    const inputMoneyNumber = parseFloat(InputMoneyValue);
    console.log(id, InputMoneyValue, inputMoneyNumber);
    return inputMoneyNumber;
    // const addedMoneyPasswordInput = document.getElementById('add-money-password-input-field').value;
}

function getTextFieldValueByID(id) {
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}

function showASectionByID(id) {
    // hide all the sections 
    document.getElementById('add-money-div').classList.add('hidden');
    document.getElementById('cash-out-div').classList.add('hidden');
    document.getElementById('transaction-history-div').classList.add('hidden');
    // Show the section with the provided id as parameter
    document.getElementById(id).classList.remove('hidden');
}