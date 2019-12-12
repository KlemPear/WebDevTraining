var nbrSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("messageDisplay");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
  // set up mode buttons
  setUpModeButtons();
  // set up squares
  setUpSquares();
  // reset
  reset();
}

resetButton.addEventListener("click", reset);

colorDisplay.textContent = pickedColor;

function  setUpModeButtons(){
  for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click",function(){
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      modeButtons[2].classList.remove("selected");
      this.classList.add("selected");
      if (this.textContent === "Easy") {
        nbrSquares = 3;
      } else if(this.textContent === "Medium"){
        nbrSquares = 6;
      } else {
        nbrSquares = 9;
      }
      reset();
    });
  }
}

function setUpSquares(){
  for (let i = 0; i < squares.length; i++) {
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
}

function  reset(){
  // generate all new colors
  colors = generateRandomColors(nbrSquares);
  // pick a new random color from colors array
  pickedColor = pickColor();
  // change colorDisplay to match picked color
  colorDisplay.textContent =  pickedColor;
  // change colors of squares
  for (let i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  h1.style.background = "steelblue";
  resetButton.textContent = "New Colors";
  messageDisplay.textContent = "";
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
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}
