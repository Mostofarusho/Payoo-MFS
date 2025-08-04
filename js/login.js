console.log("login Added");

document.getElementById('button-login').addEventListener('click', (event) => {
    event.preventDefault();
    console.log('object clicked');

    const phoneNumber = document.getElementById('phone-number').value;
    const userPassword = document.getElementById('user-password').value;
    console.log(phoneNumber, userPassword);
    if (phoneNumber === '5' && userPassword === '1234') {
        console.log('You are Logged In');
        window.location.href = 'home.html'
    } else {
        alert('Invalid Input');
    }

})