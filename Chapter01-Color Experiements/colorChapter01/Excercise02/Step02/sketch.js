'use strict';

var stepX;
var stepY;

function setup() {
  createCanvas(800, 400);
  noStroke();
  colorMode(HSB, width, height, 100);
}

function draw() {
  stepX = mouseX + 2;
  stepY = mouseY + 2;

  for (var gridY = 0; gridY < height; gridY += stepY) {//Nested for Loop, sets the grid co-ordinates
    for (var gridX = 0; gridX < width; gridX += stepX) {//gridY + X are inside the width and height of the canvas
      fill(gridX, height - gridY, 100);//fills the colors of each componant in the grid + Saturation
      rect(gridX, gridY, stepX, stepY);//draws Rectangles depending on the Mouse Co-ords
    }
  }
}

function keyPressed() {
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
}
