
const jobRole = document.getElementById('title');
const otherTitle = document.getElementById('other-job');

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

