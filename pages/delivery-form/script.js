const nameInput = document.getElementById('name');
const errorMessage = document.querySelector('.error-message');
const errorMessageName = document.querySelector('.error-message_name');
const errorMessageSurname = document.querySelector('.error-message_surname');
const form = document.getElementById('form');
const surnameInput = document.getElementById('surname');
let inputValidationArray = [false, false, false, false, false, false, false, true];

const sumbitBtn = document.querySelector('.submit-btn');
sumbitBtn.disabled = true;


form.addEventListener('submit', (e) => {
    e.preventDefault();
});

/* Name input validation */

/* Prevent entering spaces and numbers */

nameInput.addEventListener('keypress', function ( event ) {
    let key = event.keyCode;
     if (key === 32) {
       event.preventDefault();
     }
 });

 nameInput.addEventListener('keydown', function (event) {
    let key = event.keyCode;
    if (key > 47 && key < 58 || key > 95 && key < 107) {
        event.preventDefault();
    }
});

nameInput.addEventListener('keyup', function (event) {
    let key = event.keyCode;
    if (key > 47 && key < 58 || key > 95 && key < 107) {
        event.preventDefault();
    }
});

nameInput.addEventListener('blur', (event) => {
    if (nameInput.value.trim().length === 0 || nameInput.value.trim() == null) {
        nameInput.classList.add('invalid');
        nameInput.classList.remove('valid');
        errorMessageName.innerText = "Please enter your name";
        inputValidationArray[0] = false;
    } else if (nameInput.value.trim().length < nameInput.minLength) {
        nameInput.classList.add('invalid');
        nameInput.classList.remove('valid');
        errorMessageName.innerText = "Your name is too short, it has to be at least 4 characters";
        inputValidationArray[0] = false;
    } else {
        nameInput.classList.remove('invalid');
        nameInput.classList.add('valid');
        errorMessageName.innerText = "";
        inputValidationArray[0] = true;
        submitFormValidation (inputValidationArray);
    }
});

/* Surname input validation */

/* Prevent entering spaces and numbers */

surnameInput.addEventListener('keypress', function (event) {
    let key = event.keyCode;
     if (key === 32) {
       event.preventDefault();
     }

 });

surnameInput.addEventListener('keydown', function (event) {
    let key = event.keyCode;
    if (key > 47 && key < 58 || key > 95 && key < 107) {
        event.preventDefault();
    }
});

surnameInput.addEventListener('keyup', function (event) {
    let key = event.keyCode;
    if (key > 47 && key < 58 || key > 95 && key < 107) {
        event.preventDefault();
    }
});


surnameInput.addEventListener('blur', (event) => {
        if (surnameInput.value.trim().length === 0 || surnameInput.value.trim() == null) {
            surnameInput.classList.add('invalid');
            surnameInput.classList.remove('valid');
            inputValidationArray[1] = false;
            errorMessageSurname.innerText = "Please enter your surname";
        } else if (surnameInput.value.trim().length < surnameInput.minLength) {
            surnameInput.classList.add('invalid');
            surnameInput.classList.remove('valid');
            inputValidationArray[1] = false;
            errorMessageSurname.innerText = "Your surname is too short, it has to be at least 5 characters";
        } else {
            surnameInput.classList.remove('invalid');
            surnameInput.classList.add('valid');
            errorMessageSurname.innerText = "";
            inputValidationArray[1] = true;
            submitFormValidation (inputValidationArray);
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
        inputValidationArray[2] = false;
        errorMessageDeliveryDate.innerHTML ="Please enter delivery date";
    } else if (deliveryDate.value < nextDay) {
        deliveryDate.classList.remove('valid');
        deliveryDate.classList.add('invalid');
        inputValidationArray[2] = false;
        errorMessageDeliveryDate.innerHTML ="Please enter valid delivery date";
    } else {
        deliveryDate.classList.add('valid');
        deliveryDate.classList.remove('invalid');
        errorMessageDeliveryDate.innerHTML ="";
        inputValidationArray[2] = true;
        submitFormValidation (inputValidationArray);
    }
});

/* Street validation */

const streetName = document.getElementById('street');
const errorMessageStreetName = document.querySelector('.error-message_street');

streetName.addEventListener('blur', (e) => {
    if (streetName.value.trim().length === 0 || streetName.value.trim() == null) {
        streetName.classList.remove('valid');
        streetName.classList.add('invalid');
        inputValidationArray[3] = false;
        errorMessageStreetName.innerHTML = 'Please enter your Street name';
    } else if (streetName.value.trim().length < streetName.minLength) {
        streetName.classList.remove('valid');
        streetName.classList.add('invalid');
        inputValidationArray[3] = false;
        errorMessageStreetName.innerHTML = "Street name is too short, it has to be at least 5 characters ";
    } else {
        streetName.classList.remove('invalid');
        streetName.classList.add('valid');
        errorMessageStreetName.innerHTML = "";
        inputValidationArray[3] = true;
        submitFormValidation (inputValidationArray);
    }
});

/* House number validation */

const houseNumberInput = document.getElementById("houseNumber");
const errorMessageHouseNumber = document.querySelector(".error-message_house");

houseNumberInput.addEventListener('keydown', function (event) {
    let key = event.key;
    if (key === 189) {
        event.preventDefault();
    }
});

houseNumberInput.addEventListener('keydup', function (event) {
    let key = event.key;
    if (key === 189) {
        event.preventDefault();
    }
});

houseNumberInput.addEventListener('blur', (e) => {
    if (houseNumberInput.value.trim().length === 0 || houseNumberInput.value.trim() == null) {
        houseNumberInput.classList.remove("valid");
        houseNumberInput.classList.add('invalid');
        inputValidationArray[4] = false;
        errorMessageHouseNumber.innerText = "Please enter house number";
    } else if (houseNumberInput.value.trim() < houseNumberInput.min) {
        houseNumberInput.classList.remove('valid');
        houseNumberInput.classList.add('invalid');
        inputValidationArray[4] = false;
        errorMessageHouseNumber.innerText = "Please enter positive number";
    } else {
        houseNumberInput.classList.remove('invalid');
        houseNumberInput.classList.add('valid');
        errorMessageHouseNumber.innerHTML = "";
        inputValidationArray[4] = true;
        submitFormValidation (inputValidationArray);
    }
});

/* Flat number validation */

const flatNumberInput = document.getElementById('flatNumber');
const errorMessageFlat = document.querySelector('.error-message_flat');
const pattern = flatNumberInput.getAttribute('pattern');

flatNumberInput.addEventListener('blur', (e) => {
    let inputValue = e.target.value;
    let re = new RegExp(pattern);
    let isValidValue = false;
    isValidValue = re.test(inputValue);
    if(isValidValue === false) {
        flatNumberInput.classList.remove("valid");
        flatNumberInput.classList.add('invalid');
        inputValidationArray[5] = false;
        errorMessageFlat.innerText = "Please enter valid flat number (only number and dash)";
    } else if (flatNumberInput.value.trim().length === 0 || flatNumberInput.value.trim() == null) {
        flatNumberInput.classList.remove("valid");
        flatNumberInput.classList.add('invalid');
        inputValidationArray[5] = false;
        errorMessageFlat.innerText = "Please enter flat number";
    }  else {
        flatNumberInput.classList.remove("invalid");
        flatNumberInput.classList.add('valid');
        inputValidationArray[5] = true;
        errorMessageFlat.innerText = "";
        submitFormValidation (inputValidationArray);
    }

});

/* Payment method validation */
const paymentMethodsArray = document.querySelectorAll('input[type="radio"]');

paymentMethodsArray.forEach(item => {
    item.addEventListener('change', (e) => {
        if(item.checked === true) {
            inputValidationArray[6] = true;
            submitFormValidation (inputValidationArray);
            return;
        }
    });

});


/* Gift selection validation */

const giftCheckboxArray = document.querySelectorAll('input[type="checkbox"]');
const errorMessageCheckbox = document.querySelector('.error-message_check');


giftCheckboxArray.forEach(item => {
    item.addEventListener('change', (e) => {
        let count = 1;
        giftCheckboxArray.forEach(item => {
            if (item.checked === true) {
                count++;
            }
            if (count > 3) {
                inputValidationArray[7] = false;
                submitFormValidation (inputValidationArray);
                errorMessageCheckbox.innerText = "Please choose not more than 2 gifts";
            } else if (count <= 3) {
                errorMessageCheckbox.innerText = "";

                inputValidationArray[7] = true;
                submitFormValidation (inputValidationArray);
            }
        });
        count = 1;
    });
});


/* Sumbit button validation */

function submitFormValidation (inputValidationArray) {
    console.log(inputValidationArray.length);

for (let i = 0; i <inputValidationArray.length; i++) {
    if (inputValidationArray[i] === false) {
        sumbitBtn.classList.add("submit-btn_invalid");
        sumbitBtn.classList.remove("submit-btn_valid");
        sumbitBtn.disabled = true;
        return;
        }
    }
    sumbitBtn.classList.remove("submit-btn_invalid");
    sumbitBtn.classList.add("submit-btn_valid");
    sumbitBtn.disabled = false;
}

/* Delivery form summarized information */

let completeOrderBackground = document.querySelector('.compelete-order_background');
let completeOrderContent = document.querySelector('.compelete-order_content');

sumbitBtn.addEventListener('click', createCompleteOrderMessage);
const body = document.querySelector('body');



function createCompleteOrderMessage (event) {
    body.classList.add('body-noscroll');
    let btn = event.target;
    const clientName = document.getElementById("name").value;
    const clientSurname = document.getElementById("surname").value;
    const clientDeliveryDate = document.getElementById("delivery-date").value;
    const clientDeliveryStreet = document.getElementById("street").value;
    const clientHouseNumber = document.getElementById("houseNumber").value;
    const clientHouseFlat = document.getElementById("flatNumber").value;
    const clientPaymentMethod = document.querySelectorAll('input[name="payment"]:checked')[0].value;

    const clientGiftsArray = document.querySelectorAll('input[name="gift"]:checked');

    let text = 'Your gifts:';
    if (clientGiftsArray.length > 0 ) {
        clientGiftsArray.forEach(gift => {
            text += ' ' + gift.value + ",";
        }) ;
    }

    let  orderDetailsContent =
    `
        <p class = 'order-datails_text'>Your order will be delivered according to the following provided information:</p>
        <p class = 'order-datails_text'>Receiver: ${clientName} ${clientSurname}</p>
        <p class = 'order-datails_text'>Payment method: ${clientPaymentMethod}</p>
        <p class = 'order-datails_text'>Delivery date:${clientDeliveryDate} </p>
        <p class = 'order-datails_text'>Delivery address:
        <p class = 'order-datails_text'>- Street: ${clientDeliveryStreet}</p>
        <p class = 'order-datails_text'>- House number: ${clientHouseNumber}</p>
        <p class = 'order-datails_text'>- Flat: ${clientHouseFlat}</p>
        <p class = 'order-datails_text'>${text}</p>
    `

    let orderDetailsWrapper = document.querySelector(".compelete-order_order-detailes");
    orderDetailsWrapper.innerHTML = orderDetailsContent;

    completeOrderBackground.classList.add('active');
    completeOrderContent.classList.add('active');

    const closeButton = document.querySelector('.close-btn');
    closeButton.addEventListener('click', (event) => {
        completeOrderBackground.classList.remove('active');
        completeOrderContent.classList.remove('active');
        orderDetailsWrapper.innerHTML = '';
    });

}

