
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

/*
              <option>Select Theme</option>
              <option value="js puns">Theme - JS Puns</option>
              <option value="heart js">Theme - I &#9829; JS</option>

<select id="color">
<option value="cornflowerblue">Cornflower Blue (JS Puns shirt only)</option>
<option value="darkslategrey">Dark Slate Grey (JS Puns shirt only)</option> 
<option value="gold">Gold (JS Puns shirt only)</option>
<option value="tomato">Tomato (I &#9829; JS shirt only)</option>
<option value="steelblue">Steel Blue (I &#9829; JS shirt only)</option> 
<option value="dimgrey">Dim Grey (I &#9829; JS shirt only)</option> 
</select>
*/