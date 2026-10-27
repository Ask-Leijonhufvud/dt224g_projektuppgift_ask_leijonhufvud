
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

    // read input values
    let message = messageInput.value;
    let email = emailInput.value;
    let phone = phoneInput.value;

    // boolean to indicate if form input is invalid
    let isInvalid = false;

    // list of new errors
    let newErrorList = [];

    // if the message is blank
    if (message.trim() == "") {
        isInvalid = true;
        newErrorList.push("You must enter a message");
    }
    // if the email AND phone is blank
    if (email.trim() == "" && phone.trim() == "") {
        isInvalid = true;
        newErrorList.push("You must input either your email-adress or your phone number");
    }

    // if input is invalid
    if (isInvalid == true) {
        newErrorList.forEach(error => {
            errorList.innerHTML += `<li>${error}</li>`;
        });
    }
}

// event listener for form submission
form.addEventListener("submit", event => {
    event.preventDefault();
    validateInput();
})