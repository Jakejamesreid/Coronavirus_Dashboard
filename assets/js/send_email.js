

function sendMail(newsletter){

    var templateParams = {
        "from_email": newsletter.emailaddress.value,
    };

    emailjs.send('gmail', 'newsletter', templateParams)
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
            $("#newsletter").remove();
            $("#success").html(`<p>Success! You are now subscribed.</p>`);
        }, function (error) {
            console.log('FAILED...', error);
            $("#error").html(`<p>Failed! Please try again later.</p>`);
        });

    return false;
}