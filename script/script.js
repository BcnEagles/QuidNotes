$(document).ready(function() {

    console.log(window.location.href);
    
    $("#goEng").attr("href",window.location.href.replace('esp','eng'));

    $("#goEsp").attr("href",window.location.href.replace('eng','esp'));

});