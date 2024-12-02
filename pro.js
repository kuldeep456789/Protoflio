window.onload = () => {
    setTimeout(() => {
        document.getElementById("splashScreen").style.display = "none";
    }, 500);
};

// Open the modal
function openModal() {
    const modal = document.getElementById("qrModal");
    modal.style.display = "flex"; // Show modal as flexbox
}

// Close the modal
function closeModal() {
    const modal = document.getElementById("qrModal");
    modal.style.display = "none";
}

// Close modal on clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById("qrModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};
