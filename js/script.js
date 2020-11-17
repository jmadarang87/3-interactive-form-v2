
const jobRole = document.getElementById('title');
const otherTitle = document.getElementById('other-title');

// beginning new page load
document.getElementById('name').focus();
otherTitle.style.display = "none";

// event listener on "other" select dropdown to hide + display "other" text field
jobRole.addEventListener('change', e => {
    if (e.target.value === "other") {
        otherTitle.style.display = "";
    } else {
        otherTitle.style.display = "none";
    }
})

// t-shirt stuff

const shirtColor = document.getElementById('color');
const colorList = shirtColor.children;

colorOption = document.createElement('option');
colorOption.value = 'color';
colorOption.selected = 'true';
colorOption.idName = "color";
colorOption.innerHTML = `Please select a T-shirt theme`;
shirtColor.appendChild(colorOption);

function hiddenColor() {
    for ( let i = 0; i < colorList.length; i++ ) {
        colorList[i].hidden = "true";
    }

}

hiddenColor();

const designList = document.getElementById('design');
const regexPuns = /JS Puns/;
const regexHeart = /JS shirt/;

designList.addEventListener( 'change', e => {
    for (let i = 0; i < colorList.length; i++ ) {
        colorList[i].hidden = "";
    } if ( e.target.value === "js puns" ) {
        for ( let i = 0; i < colorList.length; i++ ) {
            const designTheme = colorList[i].textContent;
            if (regexHeart.test(designTheme)) {
                colorList[i].hidden = true;
            } colorList[0].selected = true;
            colorOption.hidden = true;
        }
    } else if ( e.target.value === "heart js") {
        for ( let i = 0; i < colorList.length; i++ ) {
            const designTheme = colorList[i].textContent;
            if (regexPuns.test(designTheme)) {
                colorList[i].hidden = true;
            } colorList[3].selected = true;
            colorOption.hidden = true;
        }
    } else {
        for ( let i = 0; i < colorList.length; i++ ) {
            colorList[i].hidden = true;
            } 
            colorOption.hidden = "";
            colorOption.selected = true;
        } 
})

// activity total cost! 

const activityCost = document.createElement('div');
const activitySection = document.querySelector('.activities');
let totalCost = 0;

activityCost.className = `totalCost`;
activityCost.textContent = `TOTAL COST: $${totalCost}`;
activitySection.appendChild(activityCost);
const activityInput = activitySection.querySelectorAll('input');

activitySection.addEventListener( 'change', e => {
    const activityClicked = e.target;
    const isChecked = activityClicked.checked;
    const dataCost = activityClicked.getAttribute('data-cost');
    const dataDate = activityClicked.getAttribute('data-day-and-time');
    if (isChecked) {
        totalCost = parseInt(totalCost) + parseInt(dataCost);
        activityCost.textContent = `TOTAL COST: $${totalCost}`;
        for ( let i = 0; i < activityInput.length; i++ ) {
            if ( activityInput[i].getAttribute('data-day-and-time') === dataDate && activityInput[i] !== activityClicked) {
                activityInput[i].disabled = true;
            } 
        }
    } else {
        totalCost = parseInt(totalCost) - parseInt(dataCost);
        activityCost.textContent = `TOTAL COST: $${totalCost}`; 
        for ( let i = 0; i < activityInput.length; i++ ) {
            if ( activityInput[i].getAttribute('data-day-and-time') === dataDate ) {
                activityInput[i].disabled = false;
            }
        }     
    }
})

// payment stuff

const paymentMethod = document.getElementById('payment');
const paymentOptions = paymentMethod.children;


const divCreditCard = document.getElementById('credit-card');
const divPayPal = document.getElementById('paypal');
const divBitcoin = document.getElementById('bitcoin');


function paymentDefault() {
    for ( let i = 0; i < paymentOptions.length; i++ ) {
        paymentOptions[0].hidden = true;
        paymentOptions[1].selected = true;
    } divCreditCard.style.display = "";
    divPayPal.style.display = "none";
    divBitcoin.style.display = "none";
}

paymentDefault();

paymentMethod.addEventListener('change', e => {
    const paymentType = e.target.value;
    if ( paymentType === 'paypal') {
        divCreditCard.style.display = "none";
        divPayPal.style.display = "";
        divBitcoin.style.display = "none";
    } else if ( paymentType === 'bitcoin') {
        divCreditCard.style.display = "none";
        divPayPal.style.display = "none";
        divBitcoin.style.display = "";
    } else {
        divCreditCard.style.display = "";
        divPayPal.style.display = "none";
        divBitcoin.style.display = "none";
        }
})

// form validation
const name = document.getElementById('name');
const email = document.getElementById('mail');
const activities = document.querySelectorAll('input[type="checkbox"]');
const cardNumber = document.getElementById('cc-num');
const zipCode = document.getElementById('zip');
const cvvCode = document.getElementById('cvv');
const activityHeader = document.querySelector('activities');

// error messages
const attn = `<i class="fas fa-exclamation-triangle"></i>`;
const nameError = `${attn} Name: Please make sure your name is entered correctly.`;
const emailError = `${attn} Email: Please enter a valid email address.`;
const activityError = `${attn} Register for Activities: Please select at least one activity`;
const cardError = `${attn} Card Number must be 13-16 digits long.`;
const zipError = `${attn} Zip Code must be 5 digits long.`;
const cvvError = `${attn} CVV must be 3 digits long.`;

function isValidName(nameInput) {
    const regex = /^\D+\s*\D*$/i;
    const valid = regex.test(nameInput);
    const input = name.previousElementSibling;
    if ( valid ) {
        name.style.border = "";
        input.innerHTML = "Name:";
        input.style.color = "";
        return valid;
    } else {
        name.style.border = "2px solid red";
        input.innerHTML = nameError;
        input.style.color = "red";
        return valid;
    }
}

function isValidEmail(emailInput) {
    const regex = /^[^@]+@[^@]+\.[^@.]+$/i;
    const valid = regex.test(emailInput);
    const input = email.previousElementSibling;
    if ( valid ) {
        email.style.border = "";
        input.innerHTML = "Email:";
        input.style.color = "";
        return valid;
    } else {
        email.style.border = "2px solid red";
        input.innerHTML = emailError;
        input.style.color = "red";
        return valid;
    }
}

const span = document.createElement('span');
activitySection.prepend(span);

function isValidActivities() {
    let checked  = 0;
    for (let i = 0; i < activities.length; i++ ) {
        if ( activities[i].checked ) {
            checked++;
        }
    }   if (checked > 0) {
        span.innerHTML = "";
        return true;
        } else {
        span.innerHTML = activityError;
        span.style.color = "red";
        return false;
    }
}

function isValidCreditCard(cardInput) {
    const regex =/^\d{13,16}$/;
    const valid = regex.test(cardInput);
    const input = cardNumber.previousElementSibling;
    if ( valid ) {
        cardNumber.style.border = "";
        input.innerHTML = "Card Number:";
        input.style.color = "";
        return valid;
    } else {
        cardNumber.style.border = "2px solid red";
        input.innerHTML = cardError;
        input.style.color = "red";
        return valid;
    }
}

function isValidZip(zipInput) {
    const regex =/^\d{5}$/;
    const valid = regex.test(zipInput);
    const input = zipCode.previousElementSibling;
    if ( valid ) {
        zipCode.style.border = "";
        input.innerHTML = "Zip Code:";
        input.style.color = "";
        return valid;
    } else {
        zipCode.style.border = "2px solid red";
        input.innerHTML = zipError;
        input.style.color = "red";
        return valid;
    }
}

function isValidCVV(cvvInput) {
    const regex =/^\d{3}$/;
    const valid = regex.test(cvvInput);
    const input = cvvCode.previousElementSibling;
    if ( valid ) {
        cvvCode.style.border = "";
        input.innerHTML = "CVV:";
        input.style.color = "";
        return valid;
    } else {
        cvvCode.style.border = "2px solid red";
        input.innerHTML = cvvError;
        input.style.color = "red";
        return valid;
    }
}

const submit = document.querySelector('button');

submit.addEventListener('click', e => {
    e.preventDefault();
    const nameInput = name.value;
    const emailInput = email.value;
    const cardInput = parseInt(cardNumber.value);
    const zipInput = parseInt(zip.value);
    const cvvInput = parseInt(cvv.value);
    isValidName(nameInput);
    isValidEmail(emailInput);
    isValidActivities();
    isValidCreditCard(cardInput);
    isValidZip(zipInput);
    isValidCVV(cvvInput);
    if ( paymentOptions[1].selected ) {
    if (isValidName(nameInput) && isValidEmail(emailInput) 
        && isValidActivities() && isValidCreditCard(cardInput) && isValidZip(zipInput)
        && isValidCVV(cvvInput)) {
        console.log('REGISTERED!');
        } else {
        console.log('FAILED');
        }
    } else if (isValidName(nameInput) && isValidEmail(emailInput) 
    && isValidActivities()) {
    console.log('REGISTERED!');
    } else {
    console.log('FAILED');
    }
})