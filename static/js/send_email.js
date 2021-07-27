function sendMail(newsletter){
    
    $("#loadAnim").addClass("loader");
    var csrfToken = $('input[name="csrfmiddlewaretoken"]').val();
    $.post( "/newsletter/",
    {
        csrfmiddlewaretoken: csrfToken,
        email : newsletter.emailaddress.value
    },
    function(data) {
        if(data.status == 1){
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