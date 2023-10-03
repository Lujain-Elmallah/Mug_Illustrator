document.addEventListener("DOMContentLoaded", function() {
    var drink = document.getElementById("drink-path");

    function getRandomColor() {
        var letters = "0123456789ABCDEF";
        var color = "#";
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    drink.addEventListener("click", function() {
        var randomColor = getRandomColor();
        drink.style.fill = randomColor;
    });
});
