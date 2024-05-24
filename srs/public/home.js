const header = document.querySelector('header');
const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('nav ul li a');
const logo = document.querySelector('.logo h1');
const headerText = document.querySelector('.header-text h2');
const headerParagraph = document.querySelector('.header-text p');
const button = document.querySelector('.button');

const hero = document.querySelector('.hero');
const heroContent = document.querySelector('.hero-content');
const heroHeading = document.querySelector('.hero h2');
const heroButton = document.querySelector('.hero a.button');

const products = document.querySelector('.products');
const productGrid = document.querySelector('.product-grid');
const product = document.querySelectorAll('.product');
const productImage = document.querySelectorAll('.product img');
const productContent = document.querySelectorAll('.product-content');
const productHeading = document.querySelectorAll('.product h3');
const productPrice = document.querySelectorAll('.product.price');
const productButton = document.querySelectorAll('.product a.button');

const about = document.querySelector('.about');
const aboutContent = document.querySelector('.about-content');
const aboutHeading = document.querySelector('.about h2');

const footer = document.querySelector('footer');
const footerContent = document.querySelector('.footer-content');
const footerLeft = document.querySelector('.footer-left');
const footerLeftHeading = document.querySelector('.footer-left h3');
const footerLeftParagraph = document.querySelector('.footer-left p');
const footerRight = document.querySelector('.footer-right');
const footerRightLinks = document.querySelectorAll('.footer-right ul li a');

// Toggle between showing and hiding the navigation menu
function toggleNav() {
  nav.classList.toggle('show-nav');
}

// Add active class to the current link
function linkActive(link) {
  link.classList.add('active');
}

// Remove active class from all links
function linkInactive(links) {
  links.forEach(link => link.classList.remove('active'));
}

// Show the hero section
function showHero() {
  hero.style.display = 'block';
}

// Hide the hero section
function hideHero() {
  hero.style.display = 'none';
}

// Show the about section
function showAbout() {
  about.style.display = 'block';
}

// Hide the about section
function hideAbout() {
  about.style.display = 'none';
}

// Show the footer
function showFooter() {
  footer.style.display = 'block';
}

// Hide the footer
function hideFooter() {
  footer.style.display = 'none';
}

// Add event listeners to the navigation links
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    // Remove active class from all links
    linkInactive(navLinks);

    // Add active class to the current link
    linkActive(e.target);

    // Check if the link is the logo
    if (e.target === logo) {
      // Toggle between showing and hiding the navigation menu
      toggleNav();
    }

    // Check if the link is the hero button
    if (e.target === heroButton) {
      // Show the hero section
      showHero();
    }

    // Check if the link is the about button
    if (e.target === aboutButton) {
      // Show the about section
      showAbout();
    }

    // Check if the link is the footer links
    if (footerRightLinks.includes(e.target)) {
      // Check if the link is the home link
      if (e.target === footerRightLinks[0]) {
        // Go to the home page
      }
    }
  });
});

// Add event listeners to the buttons
button.addEventListener('click', () => {
  // Check if the button is the hero button
  if (button === heroButton) {
    // Show the hero section
    showHero();
  }

  // Check if the button is the about button
  if (button === aboutButton) {
    // Show the about section
    showAbout();
  }
});

// Add event listeners to the footer links
footerRightLinks.forEach(link => {
  link.addEventListener('click', e => {
    // Check if the link is the home link
    if (e.target === footerRightLinks[0]) {
      // Go to the home page
    }
  });
});