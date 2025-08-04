console.log("login Added");

document.getElementById('button-login').addEventListener('click', (event) => {
    event.preventDefault();
    console.log('object clicked');

    const phoneNumber = document.getElementById('phone-number').value;
    const userPassword = document.getElementById('user-password').value;
    console.log(phoneNumber, userPassword);

})