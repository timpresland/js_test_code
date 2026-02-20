// Find the button and the heading in the HTML
const button = document.getElementById('colorButton');
const greeting = document.getElementById('greeting');

// Add a "click" event listener
button.addEventListener('click', () => {
    // Change the text and color when clicked
    if(greeting.textContent=="You clicked the button!")
    {
        greeting.textContent = "Clicked back!";
        greeting.style.color = "white";
    }
    else
    {
        greeting.textContent = "You clicked the button!";
        greeting.style.color = "red";
    }
    console.log("The button was clicked successfully.");
});