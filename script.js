// A function to toggle dark mode on and off, changing the look of the button when toggling.

function toggleDarkMode() {
    var bodyElement = document.querySelector('body');
    var headerElement = document.querySelector('header');

    // Ensure 'nineties-mode' is removed before toggling 'dark-mode'
    try {   
         if (bodyElement.classList.contains('nineties-mode')) {
                bodyElement.classList.remove('nineties-mode');
                }   

    // Toggle the 'dark-mode' class on the body element
            bodyElement.classList.toggle('dark-mode');
            headerElement.classList.remove('nineties-mode')
            darkSwitch();
            // ninetiesSwitch();
            } catch(error) {
                throw "error.message";
            }   
    }


// toggle for 90s mode
function toggle90sMode(){
    var bodyElement = document.querySelector('body');
    // var headerElement = document.querySelector('header');
    // var navElement = document.querySelector('nav');
    // var linksElement = document.getElementById('links');
    // var togglesElement = document.getElementById('toggles');
    // var footerElement = document.querySelector('footer');
    // var footerDiv = document.getElementById('footerdiv');
    // var footerP = document.getElementById('footerp');

    // Ensure 'dark-mode' is removed before toggling 'nineties-mode'
    if (bodyElement.classList.contains('dark-mode')) {
        bodyElement.classList.remove('dark-mode');
    }   
    
    // Toggle the 'dark-mode' class on the body element
    bodyElement.classList.toggle('nineties-mode');
    // headerElement.classList.toggle('nineties-mode');
    // navElement.classList.toggle('nineties-mode');
    // linksElement.classList.toggle('nineties-mode');
    // togglesElement.classList.toggle('nineties-mode');
    // footerElement.classList.toggle('nineties-mode');
    // footerDiv.classList.toggle('nineties-mode');
    // footerP.classList.toggle('nineties-mode')
    ninetiesSwitch();
    darkSwitch();
    
    }

function fontSizeUp(){
    const mainElement = document.querySelector("main");
    let currentSize = window.getComputedStyle(mainElement).fontSize;
    let newSize = parseFloat(currentSize) + 2; 
    mainElement.style.fontSize = newSize + "px"
}

function fontSizeDown(){
    const mainElement = document.querySelector("main");
    let currentSize = window.getComputedStyle(mainElement).fontSize;
    let newSize = parseFloat(currentSize) - 2; 
    mainElement.style.fontSize = newSize + "px"
}

function ninetiesSwitch(){
    var bodyElement = document.querySelector('body');
    var ninetiesButton = document.getElementsByClassName('nineties-button')[0];    

        // Update button text based on whether dark mode is active
        if (bodyElement.classList.contains('nineties-mode')) {
            ninetiesButton.textContent = "❌ AHH, UNDO!";
            ninetiesButton.style.backgroundColor = "blue"
            ninetiesButton.style.color = "white";
            ninetiesButton.style.fontWeight = "bold";
        } else {
            ninetiesButton.textContent = "🌐 '90s Mode";
            ninetiesButton.style.backgroundColor = "#375253";
            ninetiesButton.style.color = "white";
            ninetiesButton.style.fontWeight = "normal";
            }
        
}

function darkSwitch(){
    var bodyElement = document.querySelector('body');
    var darkButton = document.getElementsByClassName('dark-button')[0];
    const fontIncreaseButton = document.getElementById('font-increase');
    const fontDecreaseButton = document.getElementById('font-decrease');

        // Update button text based on whether dark mode is active
    try {
        if (bodyElement.classList.contains('dark-mode')) {
            darkButton.textContent = "☀️ Light Mode";
            darkButton.style.backgroundColor = "#86c6c9"
            darkButton.style.color = "black";
            darkButton.style.fontWeight = "bold";

            // change the other available buttons' color as well
            fontIncreaseButton.style.backgroundColor = "#86c6c9"
            fontIncreaseButton.style.color = "black";
            fontIncreaseButton.style.fontWeight = "bold";

            fontDecreaseButton.style.backgroundColor = "#86c6c9"
            fontDecreaseButton.style.color = "black";
            fontDecreaseButton.style.fontWeight = "bold";
        
        } else {
            darkButton.textContent = "🌙 Dark Mode";
            darkButton.style.backgroundColor = "#375253";
            darkButton.style.color = "white";
            darkButton.style.fontWeight = "normal";

            // change the color of other buttons
            fontIncreaseButton.style.backgroundColor = "#375253";
            fontIncreaseButton.style.color = "white";
            fontIncreaseButton.style.fontWeight = "normal";

            fontDecreaseButton.style.backgroundColor = "#375253";
            fontDecreaseButton.style.color = "white";
            fontDecreaseButton.style.fontWeight = "normal";

        }
    } catch(error) {
        throw error.message;
    }
}
