/* Add your JavaScript to this file */

document.addEventListener("DOMContentLoaded",function() {
    var form = document.querySelector(".newsletter form");
    var inputtedEmail = document.getElementById("email");
    var message = document.querySelector(".newsletter .message");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        var email = inputtedEmail.value.trim();
        if (email === "") {
            message.textContent = "Please enter a valid email address.";
        } else {
            message.textContent = "Thank you! Your email address: " + email + " has been added to our mailing list!";
            email.value = "";
        }     
    });
});