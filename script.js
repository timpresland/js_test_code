// Find the button and the heading in the HTML
const button = document.getElementById('colorButton');
const greeting = document.getElementById('greeting');

// Add a "click" event listener
button.addEventListener('click', () => {
    // Change the text and color when clicked
    greeting.textContent = "button clicked!";
    greeting.style.color = "yellow";

    let admin;
    let name = "John";

    admin = name;

    alert("Value of admin="+admin);

    console.log("The button was clicked successfully.");
});