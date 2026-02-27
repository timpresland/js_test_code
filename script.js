// Find the button and the heading in the HTML
const button = document.getElementById('colorButton');
const greeting = document.getElementById('greeting');

// Add a "click" event listener
button.addEventListener('click', () => {
    // Change the text and color when clicked
    greeting.textContent = "clicked!";
    greeting.style.color = "yellow";

    // equality comparison converts to numbers, but not if value is null or undefined
    // comparisons convert null to number (0)
    // comparisons convert different types to numbers
    
})