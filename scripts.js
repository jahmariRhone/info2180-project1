/* Add your JavaScript to this file */

document.addEventListener("DOMContentLoaded",function() {
    var form = document.querySelector(".newsletter form");
    var inputtedEmail = document.getElementById("email");
    var message = document.querySelector(".newsletter .message");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        var email = inputtedEmail.value.trim();

        if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            message.textContent = "Thank you! Your email address: " + email + " has been added to our mailing list!";
            inputtedEmail.value = "";
        } else {
            message.textContent = "Please enter a valid email address.";
        }     
    });
});