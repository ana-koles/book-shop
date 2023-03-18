const nameInput = document.getElementById('name');
const errorMessage = document.querySelector('.error-message');
const errorMessageName = document.querySelector('.error-message_name');
const errorMessageSurname = document.querySelector('.error-message_surname');
const form = document.getElementById('form');
const surnameInput = document.getElementById('surname');
let invalidInputFields = 8;

form.addEventListener('submit', (e) => {
    e.preventDefault();
});

/* Name input validation */
nameInput.addEventListener('blur', (event) => {
    if (nameInput.value.trim().length === 0 || nameInput.value.trim() == null) {
        nameInput.classList.add('invalid');
        nameInput.classList.remove('valid');
        errorMessageName.innerText = "Please enter your name";
    } else if (nameInput.value.trim().length < nameInput.minLength) {
        nameInput.classList.add('invalid');
        nameInput.classList.remove('valid');
        errorMessageName.innerText = "Your name is too short, it has to be at least 4 characters";
    } else {
        nameInput.classList.remove('invalid');
        nameInput.classList.add('valid');
        errorMessageName.innerText = "";
    }
});

/* Surname input validation */

surnameInput.addEventListener('blur', (event) => {
        if (surnameInput.value.trim().length === 0 || surnameInput.value.trim() == null) {
            surnameInput.classList.add('invalid');
            surnameInput.classList.remove('valid');
            errorMessageSurname.innerText = "Please enter your surname";
        } else if (surnameInput.value.trim().length < surnameInput.minLength) {
            surnameInput.classList.add('invalid');
            surnameInput.classList.remove('valid');
            errorMessageSurname.innerText = "Your surname is too short, it has to be at least 5 characters";
        } else {
            surnameInput.classList.remove('invalid');
            surnameInput.classList.add('valid');
            errorMessageSurname.innerText = "";
        }
    });

/* Delivery date validation  */

let currentDay = new Date();
let nextDay = new Date();

/* set tomorrow's day */
nextDay.setDate(currentDay.getDate() + 1);

let nextDayYear = nextDay.getFullYear();

let nextDayMonth = nextDay.getMonth() + 1;
if (nextDayMonth < 10) {
    nextDayMonth = "0" + nextDayMonth;
}

let nextDayDate = nextDay.getDate();
if (nextDayDate < 10) {
    nextDayDate = "0" + nextDayDate;
}

nextDay = nextDayYear + '-' + nextDayMonth + '-' + nextDayDate;
const deliveryDate = document.getElementById('delivery-date');
deliveryDate.setAttribute('min', nextDay);

const errorMessageDeliveryDate = document.querySelector('.error-message_delivery-date');

deliveryDate.addEventListener('blur', (e) => {
    if (deliveryDate.value == null || deliveryDate.value === '') {
        deliveryDate.classList.remove('valid');
        deliveryDate.classList.add('invalid');
        errorMessageDeliveryDate.innerHTML ="Please enter delivery date";
    } else {
        deliveryDate.classList.add('valid');
        deliveryDate.classList.remove('invalid');
        errorMessageDeliveryDate.innerHTML ="";
    }
});

/* Street validation */

const streetName = document.getElementById('street');
const errorMessageStreetName = document.querySelector('.error-message_street');

streetName.addEventListener('blur', (e) => {
    if (streetName.value.trim().length === 0 || streetName.value.trim() == null) {
        streetName.classList.remove('valid');
        streetName.classList.add('invalid');
        errorMessageStreetName.innerHTML = 'Please enter your Street name';
    } else if (streetName.value.trim().length < streetName.minLength) {
        streetName.classList.remove('valid');
        streetName.classList.add('invalid');
        errorMessageStreetName.innerHTML = "Street name is too short, it has to be at least 5 characters ";
    } else {
        streetName.classList.remove('invalid');
        streetName.classList.add('valid');
        errorMessageStreetName.innerHTML = "";
    }
});

/* House number validation */

const houseNumberInput = document.getElementById("houseNumber");
const errorMessageHouseNumber = document.querySelector("error-message_house");

houseNumberInput.addEventListener('blur', (e) => {
    if (houseNumberInput.value.trim().length === 0 || houseNumberInput.value.trim() == null) {
        houseNumberInput.classList.remove("valid");
        houseNumberInput.classList.add('invalid');
        errorMessageHouseNumber.innerText = "Please enter house nuber";
    } else if (houseNumberInput.value.trim().length < houseNumberInput.min) {
        houseNumberInput.classList.remove('valid');
        houseNumberInput.classList.add('invalid');
        errorMessageHouseNumber.innerText = "Please enter positive number";
    } else {
        houseNumberInput.classList.remove('invalid');
        houseNumberInput.classList.add('valid');
        errorMessageHouseNumber.innerText = '';
    }
});

/* House number validation */

const flatNumberInput = document.getElementById('flatNumber');
const errorMessageHouseFlat = document.querySelector('.error-message_flat');
const pattern = flatNumberInput.getAttribute('pattern');

flatNumberInput.addEventListener('blur', (e) => {
    let inputValue = e.target.value;
    let re = new RegExp(pattern);
    if (re.test(inputValue)) {
        flatNumberInput.classList.add("valid");
        flatNumberInput.classList.remove('invalid');
        errorMessageHouseFlat.innerText = "";
        console.log('true');
    } else if (flatNumberInput.value.trim().length === 0 || flatNumberInput.value.trim() == null) {
        flatNumberInput.classList.remove("valid");
        flatNumberInput.classList.add('invalid');
        errorMessageHouseFlat.innerText = "Please enter flat number";
        console.log('false');
    }  else {
        flatNumberInput.classList.remove("valid");
        flatNumberInput.classList.add('invalid');
        errorMessageHouseFlat.innerText = "Please enter valid flat number";
        console.log('false');
    }
});



