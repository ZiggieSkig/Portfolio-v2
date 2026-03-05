function toggleTheme() {
    document.body.classList.toggle('light');
    const btn = document.querySelector('.theme-btn');
    if (document.body.classList.contains('light')) {
        btn.textContent = '☾';
        localStorage.setItem('theme', 'light');
    } else {
        btn.textContent = '☀';
        localStorage.setItem('theme', 'dark');
    }
}

(function() {
    const saved = localStorage.getItem('theme');
    if (saved === 'light') {
        document.body.classList.add('light');
        const btn = document.querySelector('.theme-btn');
        if (btn) btn.textContent = '☾';
    }
})();

const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

function sendForm(e) {
    e.preventDefault();
    const success = document.getElementById('form-success');
    if (success) {
        success.style.display = 'block';
        e.target.reset();
        setTimeout(() => { success.style.display = 'none'; }, 4000);
    }
}
