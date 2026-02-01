"use strict";

// Collapse the navbar when page is scrolled
window.addEventListener('scroll', () => {
  const mainNav = document.querySelector('#mainNav');
  if (window.scrollY > 100) {
    mainNav.classList.add('navbar-shrink');
  } else {
    mainNav.classList.remove('navbar-shrink');
  }
});

// Smooth scrolling using JavaScript
document.querySelectorAll('a.js-scroll-trigger[href*="#"]:not([href="#"])').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 56, // Adjust for fixed navbar height
        behavior: 'smooth'
      });
    }
  });
});