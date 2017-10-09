"use strict";

// Smooth scrolling using jQuery easing
$('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: (target.offset().top - 48)
      }, 1000, "easeInOutExpo");
      return false;
    }
  }
});

// Collapse the navbar when page is scrolled
$(window).scroll(function () {
  if ($("#mainNav").offset().top > 100) {
    $("#mainNav").addClass("navbar-shrink");
  } else {
    $("#mainNav").removeClass("navbar-shrink");
  }
});


$(window).scroll(function () {
  $("#intro-scroll").css("opacity", 1 - $(window).scrollTop() / ($(window).height() / 1.5));
});