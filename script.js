// Theme Toggle Functionality
const themeToggleBtn = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

// If a theme was previously selected, apply it
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        themeToggleBtn.textContent = '☀️'; // Sun icon for light mode
    }
}

// Event Listener for Theme Toggle Button
themeToggleBtn.addEventListener('click', () => {
    // Toggle between light and dark themes
    let theme = document.documentElement.getAttribute('data-theme');
    if (theme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        themeToggleBtn.textContent = '🌙'; // Moon icon for dark mode
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        themeToggleBtn.textContent = '☀️'; // Sun icon for light mode
    }
});

// Modal Functionality for WebGL Demo
const demoModal = document.getElementById('demo-modal');
const openDemoBtn = document.getElementById('open-demo');
const closeDemoBtn = document.getElementById('close-demo');

// Open Demo Modal
openDemoBtn.addEventListener('click', () => {
    demoModal.style.display = 'block';
});

// Close Demo Modal
closeDemoBtn.addEventListener('click', () => {
    demoModal.style.display = 'none';
    // Optionally, reset iframe src to stop the WebGL content
    demoModal.querySelector('iframe').src = demoModal.querySelector('iframe').src;
});

// Close Modal when clicking outside the modal content
window.addEventListener('click', (event) => {
    if (event.target === demoModal) {
        demoModal.style.display = 'none';
        demoModal.querySelector('iframe').src = demoModal.querySelector('iframe').src;
    }
});

// Modal Functionality for Contact Form
const contactModal = document.getElementById('contact-modal');
const openContactBtn = document.getElementById('open-contact');
const closeContactBtn = document.getElementById('close-contact');

// Open Contact Modal
openContactBtn.addEventListener('click', () => {
    contactModal.style.display = 'block';
});

// Close Contact Modal
closeContactBtn.addEventListener('click', () => {
    contactModal.style.display = 'none';
});

// Close Modal when clicking outside the modal content
window.addEventListener('click', (event) => {
    if (event.target === contactModal) {
        contactModal.style.display = 'none';
    }
});

// Initialize Swiper.js for Testimonials Slider
document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.testimonial-slider', {
        // Optional parameters
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        speed: 1000,
        slidesPerView: 1,
        spaceBetween: 30,
        // If you want pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        // If you want navigation buttons
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});

// Smooth Scrolling for Older Browsers (Optional)
const links = document.querySelectorAll('a[href^="#"]');

for (const link of links) {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
}
