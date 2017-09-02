$(document).ready(function() {

    $("#desktop-more-menu-item").on('click', function(event) {
        var _this = $(this);
        event.preventDefault();
        if (_this.hasClass('expanded')) {
            _this.removeClass('expanded');
            $("#desktop-more-submenu").slideUp();
        } else {
            _this.addClass('expanded');
            $("#desktop-more-submenu").slideDown();
        }
    });

    $("#desktop-more-menu-item").on('mouseenter focusin', function(event) {
        $("#desktop-more-submenu").slideDown();
    });

    $("#desktop-more-menu-item").on('mouseleave', function(event) {
        $("#desktop-more-submenu").slideUp();
    });
    // Not sure if i need this
    // $("#desktop-more-menu-item").on('focusout', function(event) {
    //     $("#desktop-more-submenu").slideUp();
    // });

    // On click of hamburger menu, transition menu
    $("#more-hamburger").on('click', function(event) {
        event.preventDefault();
        $("#overlay-wrapper").show();
        $("#hamburger-menu-content").addClass("slide-in");
    });

    $("#close-hamburger").on('click', function(event) {
        event.preventDefault();
        $("#overlay-wrapper").hide();
        $("#hamburger-menu-content").removeClass("slide-in");
    });

    // Desktop search input field
    // On focus out, if input field has length > 0, then don't change width
    $("#desktop-search-form input[type='text']").on('focusout', function(event) {
        var inputField = event.currentTarget;
        if (inputField.value.length > 0) {
            $(inputField).addClass("expand-field");
        } else {
            $(inputField).removeClass("expand-field");
        }
    });

    $("#desktop-search-form").on('submit', function(event) {
        event.preventDefault();
        console.log("---Form submitted");
        $("#desktop-search-form input[type='text']").val("");
    });

});
