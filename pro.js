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
