"use strict";

// Collapse the navbar when page is scrolled
$(window).scroll( () => {
  if ($("#mainNav").offset().top > 100) {
    $("#mainNav").addClass("navbar-shrink");
  } else {
    $("#mainNav").removeClass("navbar-shrink");
  }
  $("#intro-scroll").css("opacity", 1 - $(window).scrollTop() / ($(window).height() / 1.5));
});