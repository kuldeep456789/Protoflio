window.onload = () => {
    setTimeout(() => {
        document.getElementById("splashScreen").style.display = "none";
    }, 500);
};
// Sidebar Toggle
function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}


// Theme toggler functionality
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Check for saved theme in localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.add(savedTheme);
    themeToggle.innerHTML = savedTheme === 'dark-mode' ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
}

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        localStorage.setItem('theme', '');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark-mode');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
});
