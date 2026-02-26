// Find the button and the heading in the HTML
const button = document.getElementById('colorButton');
const greeting = document.getElementById('greeting');

// Add a "click" event listener
button.addEventListener('click', () => {
    // Change the text and color when clicked
    greeting.textContent = "button clicked!";
    greeting.style.color = "yellow";

    let age = prompt('How old are you?', 100);

    alert(`You are ${age} years old!`); // You are 100 years old!
});