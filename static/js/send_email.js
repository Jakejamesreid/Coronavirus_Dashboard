function sendMail(newsletter){
    
    $("#loadAnim").addClass("loader");
    var csrfToken = $('input[name="csrfmiddlewaretoken"]').val();
    var postData = {
        'csrfmiddlewaretoken': csrfToken,
        email: newsletter.emailaddress.value
    };
    $.post("/newsletter/", postData).done().then(function(result) {
        if (result.error) {
            $("#newsletter").remove();
            $("#error").remove();
            $("#loadAnim").removeClass("loader");
            $("#success").html(`<p>Success! You are now subscribed.</p>`);
        }
        else{
            $("#error").html(`<p>Failed! Please try again later.</p>`);
            $("#loadAnim").removeClass("loader");
        }
    });


    return false;
}