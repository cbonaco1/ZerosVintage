$(document).ready(function() {
    var overlayWrapper = $("#overlay-wrapper");

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
    // Stop propagation when a nav submenu item is clicked.
    // Otherwise above click event will be triggered since events bubble up
    $(".nav-bar-item-link").on('click', function(event) {
        event.stopPropagation();
    });

    $(".nav-with-submenu").on('mouseenter focusin', function(event) {
        $(event.currentTarget).find(".nav-submenu").slideDown();
    });

    $(".nav-with-submenu").on('mouseleave', function(event) {
        $(event.currentTarget).find(".nav-submenu").slideUp();
    });
    // Not sure if i need this
    // $("#desktop-more-menu-item").on('focusout', function(event) {
    //     $("#desktop-more-submenu").slideUp();
    // });

    // On click of hamburger menu, toggle menu
    $("#more-hamburger").on('click', function(event) {
        var _this = $(this),
            hamburger = _this.find(".hamburger");
        event.preventDefault();
        if (_this.hasClass('expanded')) {
            _this.removeClass('expanded');
            hamburger.removeClass('close');
            $("#hamburger-menu-content").removeClass("slide-in");
        } else {
            _this.addClass('expanded');
            hamburger.addClass('close');
            $("#hamburger-menu-content").addClass("slide-in");
        }

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

    // Open search overlay when user clicks on Search in mobile nav
    $("#mobile-nav-search-link").on('click', function(event) {
        event.preventDefault();
        overlayWrapper.show();
        $("#overlay-search").show(function() {
            $("#overlay-search").addClass("open");
            $("#overlay-search-field").focus();
        });
    });

    // Close search overlay
    $("#close-overlay-search").on('click', function(event) {
        var overlaySearch = $("#overlay-search");
        event.preventDefault();
        overlaySearch.removeClass("open");
        overlaySearch.one('transitionend', function(e) {
            overlayWrapper.hide();
            overlaySearch.hide();
        });
    });

});
