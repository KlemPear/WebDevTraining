var nbrSquares = 6;
var colors = generateRandomColors(nbrSquares);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("messageDisplay");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var easyBtn = document.getElementById("easyBtn");
var hardBtn = document.getElementById("hardBtn");


easyBtn.addEventListener("click", function(){
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    nbrSquares = 3;
    colors = generateRandomColors(nbrSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (let i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
});
hardBtn.addEventListener("click", function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    nbrSquares = 6;
    colors = generateRandomColors(nbrSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
});

resetButton.addEventListener("click", function(){
    // generate all new colors
    colors = generateRandomColors(nbrSquares);
    // pick a new random color from colors array
    pickedColor = pickColor();
    // change colorDisplay to match picked color
    colorDisplay.textContent =  pickedColor;
    // change colors of squares
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i] 
    }
    h1.style.background = "#232323";
    this.textContent = "New Colors";
});

colorDisplay.textContent = pickedColor;

for (let i = 0; i < squares.length; i++) {
    // add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    // add click listeners to squares
    squares[i].addEventListener("click", function(){
        // grab color of picked square
        var clickedColor = this.style.backgroundColor;
        // compare color to pickedColor
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
            resetButton.textContent = "Play again?";
            changeColors(pickedColor);
            h1.style.background = pickedColor;
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try again!";
        }
    });
    
}

function changeColors(color){
    // loop through all squares
    for (let i = 0; i < squares.length; i++) {
        // change each color to match given color
        squares[i].style.backgroundColor = color;
        
    }
    
}

function pickColor(){
    // pick a random number between 0 and number of colors - 1 
    var random = Math.floor(Math.random() * colors.length);
    // return a color
    return colors[random];
}

function generateRandomColors(nbrColors){
    // make an array
    var arr = []
    // add nbrColors random colors to array
    for (let i = 0; i < nbrColors; i++) {
        // get random color and push into array
        arr.push(randomColor());
    }
    // return array
    return arr;
}

function randomColor(){
    // pick a red from 0 to 255
    var red = Math.floor(Math.random() * 256);
    // pick a green from 0 to 255
    var green = Math.floor(Math.random() * 256);
    // pick a blue from 0 to 255
    var blue = Math.floor(Math.random() * 256);

    return "rgb(" + red + ", " + green + ", " + blue + ")"

}