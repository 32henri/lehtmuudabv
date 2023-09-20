// script.js
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;
const text = document.getElementById('text');
const h = document.getElementById('h');

themeToggleBtn.addEventListener('click', () => {
    if (themeToggleBtn.classList.contains('btn-dark')) {
        themeToggleBtn.classList.remove('btn-dark');
        themeToggleBtn.classList.add('btn-light');
        body.classList.remove('bg-dark');
        body.classList.add('bg-light');
        text.classList.remove('text-light');
        text.classList.add('text-dark');
        h.classList.remove('h-light');
        h.classList.add('h-dark');
        themeToggleBtn.textContent = 'Muuda teemat tumedaks';
    } else {
        themeToggleBtn.classList.remove('btn-light');
        themeToggleBtn.classList.add('btn-dark');
        body.classList.remove('bg-light');
        body.classList.add('bg-dark');
        text.classList.remove('text-dark');
        text.classList.add('text-light');
        h.classList.remove('h1-dark');
        h.classList.add('h1-light');
        themeToggleBtn.textContent = 'Muuda teemat heledaks';
    }
});
