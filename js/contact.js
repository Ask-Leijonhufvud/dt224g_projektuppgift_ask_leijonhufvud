
// document elements
const errorList = document.getElementById("errors");
const form = document.querySelector("form");
const messageInput = document.getElementById("message");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");

// validate form input
function validateInput() {
    // clear error messages
    errorList.innerHTML = "";
}

// event listener for form submission
form.addEventListener("submit", event => {
    event.preventDefault();
    console.log("form submitted");
})