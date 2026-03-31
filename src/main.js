import './style.css'

// Theme Toggle (Dark/Light)
const modeToggle = document.getElementById('mode-toggle');
let isDark = false;

modeToggle.addEventListener('click', () => {
    isDark = !isDark;
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    modeToggle.textContent = isDark ? '☀️' : '🌙';
});

// AI Extraction Demo
const extractBtn = document.getElementById('extract-trigger');
const loading = document.getElementById('ai-loading');
const result = document.getElementById('extraction-result');

extractBtn.addEventListener('click', () => {
    extractBtn.disabled = true;
    result.style.opacity = '0';
    loading.style.display = 'block';

    setTimeout(() => {
        loading.style.display = 'none';
        result.style.opacity = '1';
        result.classList.add('active');
        extractBtn.disabled = false;
    }, 2000);
});

// Color Swatches
const swatches = document.querySelectorAll('.swatch');
const demoMockup = document.getElementById('demo-mockup');

swatches.forEach(swatch => {
    swatch.addEventListener('click', () => {
        swatches.forEach(s => s.classList.remove('active'));
        swatch.classList.add('active');
        const color = swatch.getAttribute('data-color');
        document.documentElement.style.setProperty('--primary', color);
        // Also update mockup accent
        const iconBox = demoMockup.querySelector('div');
        iconBox.style.background = color;
    });
});

// Font Switcher
const fontSwitcher = document.getElementById('font-switcher');
fontSwitcher.addEventListener('change', (e) => {
    document.documentElement.setAttribute('data-style', e.target.value);
});

// Animation on Scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('section, .feature-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(40px)';
    el.style.transition = 'all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)';
    observer.observe(el);
});

// Initial state for demo
result.style.opacity = '0';
result.classList.remove('active');
