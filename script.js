// Select elements
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const bars = document.querySelector('.fa-bars');
const xmark = document.querySelector('.fa-xmark');
const links = document.querySelectorAll('.nav-links a'); // كل اللينكات داخل المنيو

// Toggle menu
function toggleMenu() {
    bars.classList.toggle('active');
    xmark.classList.toggle('active');
    navLinks.classList.toggle('active');
    document.body.classList.toggle('no-scroll'); // منع تمرير الصفحة
}

hamburger.addEventListener('click', toggleMenu);

// Close menu when clicking on any nav link
links.forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            toggleMenu();
        }
    });
});

// Close menu if clicking outside
document.addEventListener('click', (e) => {
    if (
        navLinks.classList.contains('active') &&
        !navLinks.contains(e.target) &&
        !hamburger.contains(e.target)
    ) {
        toggleMenu();
    }
});

// Scroll reveal
const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target); // عشان الحركة تحصل مرة واحدة
        }
    });
}, { threshold: 0.2 }); // 0.2 يعني يظهر لما 20% من العنصر يدخل الشاشة

reveals.forEach(el => observer.observe(el));

const typingEl = document.getElementById('typing');
const words = ["Welcome to our website!", "Enjoy the best catering!", "Fresh & Delicious!"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let speed = 100; // سرعة الكتابة/المسح بالـms

function type() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
        typingEl.textContent = currentWord.substring(0, charIndex--);
        speed = 50; // سرعة المسح أسرع
        if (charIndex < 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            speed = 300; // انتظار قبل الكلمة الجديدة
        }
    } else {
        typingEl.textContent = currentWord.substring(0, charIndex++);
        speed = 100;
        if (charIndex > currentWord.length) {
            isDeleting = true;
            speed = 1000; // انتظار قبل المسح
        }
    }
    setTimeout(type, speed);
}

type();
