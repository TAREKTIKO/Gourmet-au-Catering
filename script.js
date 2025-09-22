// when click on hamburger menu show/hide nav-links also toggle between bars and xmark
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const bars = document.querySelector('.fa-bars');
const xmark = document.querySelector('.fa-xmark');

hamburger.addEventListener('click', () => {
    bars.classList.toggle('active');
    xmark.classList.toggle('active');
    navLinks.classList.toggle('active');
});