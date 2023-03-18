"use strict"

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

/* let error = checkValidation(form);

function checkValidation(form) {

} */

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
})






/* let today = new Date();
let tomorrow = new Date()
tomorrow.setDate(today.getDate()+1);
tomorrow = tomorrow.parse('year');
 */
