'use strict';

var stepX;//Global Variabels - can be accessed from any function
var stepY;

function setup() {
  createCanvas(800, 400);
  noStroke();
  colorMode(HSB, width, height, 100);
}

function draw() {
  stepX = mouseX + 2;//StepX = to the Position on the X Axis + 2 grids
  stepY = mouseY + 2;

  for (var gridY = 0; gridY < height; gridY += stepY) {
    for (var gridX = 0; gridX < width; gridX += stepX) {
      fill(gridX, height - gridY, 100);
      rect(gridX, gridY, stepX, stepY);
    }
  }
}

function keyPressed() {// if the S key is pressed, save the canvas as a png image/Time stap
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
}
//GD is the library were it is pulling the function from