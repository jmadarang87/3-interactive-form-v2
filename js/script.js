
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
shirtColor.parentNode.hidden = "true";
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
        shirtColor.parentNode.hidden = "";
        for ( let i = 0; i < colorList.length; i++ ) {
            const designTheme = colorList[i].textContent;
            if (regexHeart.test(designTheme)) {
                colorList[i].hidden = true;
            } colorList[0].selected = true;
            colorOption.hidden = true;
        }
    } else if ( e.target.value === "heart js") {
        shirtColor.parentNode.hidden = "";
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
let errorMessage = { 
    name: `${attn} Name: Cannot be blank or contain numbers.`,
    nameDigits: `${attn} Name: Cannot contain numbers.`,
    nameBlank: `${attn} Name: Cannot be blank.`,
    email: `${attn} Email: Please enter a valid email address (example@mail.com).`,
    emailAt: `${attn} Email: Please enter a valid email address (must contain '@').`,
    activity: `${attn} Register for Activities: Please select at least one activity.`,
    card: `${attn} Card Number must be 13-16 digits long.`,
    cardFocus:`${attn} Card Number: Cannot be blank.`,
    zipFocus: `${attn} Zip Code: Cannot be blank.`,
    zip: `${attn} Zip Code must be 5 digits long.`,
    cvv: `${attn} CVV must be 3 digits long.`
};

function invalidStyle(title) {
    const input = title.previousElementSibling;
    title.style.border = "2px solid red";
    input.style.color = "red";
    return input;
}

function validStyle(title) {
    const input = title.previousElementSibling;
    title.style.border = "";
    input.style.color = "";
}

name.addEventListener('keyup', e => {
    isValidName(e.target.value)
})

name.addEventListener('blur', e => {
    isValidName(e.target.value)
})


function isValidName(nameInput) {
    const regex = /^\D+/i;
    const digit = /\d/;
    const validity = regex.test(nameInput);
    const input = name.previousElementSibling;
    if ( nameInput === "" ) {
        invalidStyle(name);
        input.innerHTML = `${errorMessage.nameBlank}`;
    } else if ( digit.test(nameInput)) {
        invalidStyle(name);
        input.innerHTML = `${errorMessage.nameDigits}`;
    } else {
        validStyle(name);
        input.innerHTML = "Name:";
        return validity;
    }
}

email.addEventListener('focus', e => {
    invalidStyle(email);
    const input = email.previousElementSibling;
    input.innerHTML = `${errorMessage.email}`;
})

email.addEventListener('keyup', e => {
    isValidEmail(e.target.value);
})


function isValidEmail(emailInput) {
    const regexOne= /\w@/;
    const regexTwo = /^[^@]+@[^@]+\.[^.]+$/i;
    const validOne = regexOne.test(emailInput);
    const validTwo = regexTwo.test(emailInput);
    const input = email.previousElementSibling;
    if (emailInput !== "" ) {
        if ( validOne && validTwo ) {
            validStyle(email);
            input.innerHTML = "Email:";
            return validOne;
        } else if ( !validOne ) {
            invalidStyle(email);
            input.innerHTML = `${errorMessage.emailAt}`;
            return validOne;
        } else if ( !validTwo ) {
            invalidStyle(email);
            input.innerHTML = `${errorMessage.email}`;
            return validTwo;
        } else {
            invalidStyle(email);
            input.innerHTML = `${errorMessage.email}`;
            return false;
        }
    } else {
        invalidStyle(email);
        input.innerHTML = `${errorMessage.email}`;
        return false; 
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
        span.innerHTML = `${errorMessage.activity}`;
        span.style.color = "red";
        return false;
    }
}

// format credit card 

cardNumber.addEventListener('focus', e => {
    if ( e.target.value !== "" ) {
        const oldText = e.target.value;
        const newText = oldText.replace(/-/g, "");
        e.target.value = newText;
        console.log(newText);
    }
})

cardNumber.addEventListener('blur', e => {
    if ( isValidCreditCard(e.target.value)) {
        e.target.value = formatCardNumber(e.target.value);
    }
})

cardNumber.addEventListener('keyup', e => {
    isValidCreditCard(e.target.value);
})

function formatCardNumber(num) {
    const regex = /^(\d{4})(\d{4})(\d{4})(\d+)$/;
    const replacement = `$1-$2-$3-$4`;
    return num.replace(regex, replacement);
}

function isValidCreditCard(cardInput) {
    const regex =/^\d{13,16}$/;
    const validity = regex.test(cardInput);
    const input = cardNumber.previousElementSibling;
    if ( validity ) {
        validStyle(cardNumber)
        input.innerHTML = "Card Number:";
        return validity;
    } else {
        invalidStyle(cardNumber);
        input.innerHTML = `${errorMessage.card}`;
        return validity;
    }
}

zip.addEventListener('focus', e => {
    isValidZip(e.target.value);
})

zip.addEventListener('keyup', e => {
    isValidZip(e.target.value);
})

function isValidZip(zipInput) {
    const regex =/^\d{5}$/;
    const validity = regex.test(zipInput);
    const input = zipCode.previousElementSibling;
    if ( validity ) {
        validStyle(zip);
        input.innerHTML = "Zip Code:";
        return validity
    } else {
        invalidStyle(zip);
        input.innerHTML = `${errorMessage.zip}`;
    }
}

cvvCode.addEventListener('focus', e => {
    isValidCVV(e.target.value);
})

cvvCode.addEventListener('keyup', e => {
    isValidCVV(e.target.value);
})

function isValidCVV(cvvInput) {
    const regex =/^\d{3}$/;
    const valid = regex.test(cvvInput);
    const input = cvvCode.previousElementSibling;
    if ( valid ) {
        validStyle(cvv);
        input.innerHTML = "CVV:";
        return valid;
    } else {
        invalidStyle(cvv);
        input.innerHTML = `${errorMessage.cvv}`;
    }
}

const submit = document.querySelector('button');

submit.addEventListener('click', e => {
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
        console.log(`YAY! YOU'RE REGISTERED!`);
        } else {
        console.log(`UH OH! PLEASE DOUBLE CHECK YOUR FORM.`);
        e.preventDefault();
        }
    } else if (isValidName(nameInput) && isValidEmail(emailInput) 
    && isValidActivities()) {
    console.log(`YAY! YOU'RE REGISTERED!`);
    } else {
    console.log(`UH OH! PLEASE DOUBLE CHECK YOUR FORM.`);
    e.preventDefault();
    }
})