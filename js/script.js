
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

