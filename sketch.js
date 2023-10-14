
//this implements a very simple game where you win if you hover the circle over the square and click

// var circleSize = 100;
var squareX, squareY;
var squareSize = 25;
var foundTheSquare = false;

function setup() {
  //randomize the square location
  createCanvas(600, 600);
  // squareX = random(width - squareSize/2);
  // squareY = random(height - squareSize/2);
  squareX = random(width - squareSize/2);
  squareY = random(height - squareSize/2);
  rectMode(CENTER);
}

function draw() {

  //if you haven't yet found the square 
  if (!foundTheSquare) {
    //fill the background with black, draw the circle and the square
    background(0);
    fill(255, 0, 0);
    square(squareX, squareY, squareSize);
    square(mouseX, mouseY, squareSize)
    fill(0, 0);
    stroke(255);
    // circle(mouseX, mouseY, circleSize);
  } else {
    //if you did find it and won the game, display the win text
    background(200);
    textSize(32);
    textAlign(CENTER);
    text("you found the square", width/2,height/2)
  }
}

function mouseClicked() {
  //if you clicked the mouse and the square is within the radius of the circle, you found the square
  if (dist(mouseX, mouseY, squareX, squareY) < 10) {
    foundTheSquare = true;
  }
}
