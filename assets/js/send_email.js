function successMessage() {
    $("#contact-form").remove();
    $("#success-message").html(`<h2>Success! You will be contacted shortly</h2>`);
}

function sendMail(newsletter){

    var templateParams = {
        "email": newsletter.emailaddress.value,
    };

    emailjs.send('gmail', 'jake_cv', templateParams)
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
        }, function (error) {
            console.log('FAILED...', error);
        });

        successMessage();
    return false;
}