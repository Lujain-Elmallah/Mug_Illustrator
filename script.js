document.addEventListener("DOMContentLoaded", function() {
    // Get the drink element by its id
    var drink = document.getElementById("drink-path");

    // Function to generate a random color
    function getRandomColor() {
        var letters = "0123456789ABCDEF";
        var color = "#";
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Add a click event listener to the drink element
    drink.addEventListener("click", function() {
        // Change the fill color of the drink to a random color
        var randomColor = getRandomColor();
        drink.style.fill = randomColor;
    });
});
