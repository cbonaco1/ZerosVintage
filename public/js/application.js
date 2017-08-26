$(document).ready(function() {

    // On click of hamburger menu, transition menu
    $("#more-hamburger").on('click', function() {
        $("#overlay-wrapper").show();
        $("#hamburger-menu-content").addClass("slide-in");
    });

    $("#close-hamburger").on('click', function() {
        $("#overlay-wrapper").hide();
        $("#hamburger-menu-content").removeClass("slide-in");
    });

});
