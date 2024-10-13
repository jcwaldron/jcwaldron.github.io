function toggleDarkMode() {
    var bodyElement = document.querySelector('body');
    var buttonElement = document.querySelector('button'); // Select the button

    // Toggle the 'dark-mode' class on the body element
    if (bodyElement) {
        bodyElement.classList.toggle('dark-mode');
        
        // Update button text based on whether dark mode is active
        if (bodyElement.classList.contains('dark-mode')) {
            buttonElement.textContent = "☀️ Light Mode";
            buttonElement.style.backgroundColor = "#66999B"
            buttonElement.style.color = "black";
            buttonElement.style.fontWeight = "bold";
        } else {
            buttonElement.textContent = "🌙 Dark Mode";
            buttonElement.style.backgroundColor = "#375253";
            buttonElement.style.color = "white";
            buttonElement.style.fontWeight = "normal";
        }
    }
}
