// Find the button and the heading in the HTML
const button = document.getElementById('colorButton');
const greeting = document.getElementById('greeting');

// Add a "click" event listener
button.addEventListener('click', () => {
    // Change the text and color when clicked
    greeting.textContent = "clicked!";
    greeting.style.color = "yellow";

    alert("Hello");

    let b=0;
    let a = (b = 1 + 2, 3 + 4);

    let outString = "a=" + a + " b=" + b;
    alert( outString);
});