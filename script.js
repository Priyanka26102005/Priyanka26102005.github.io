const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Load saved theme
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    if (themeToggle) {
        themeToggle.querySelector('i').classList.replace('fa-moon', 'fa-sun');
    }
}

// Toggle theme
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const icon = themeToggle.querySelector('i');
        if (body.classList.contains('dark-mode')) {
            icon.classList.replace('fa-moon', 'fa-sun');
            localStorage.setItem('theme', 'dark');
        } else {
            icon.classList.replace('fa-sun', 'fa-moon');
            localStorage.setItem('theme', 'light');
        }
    });
}
