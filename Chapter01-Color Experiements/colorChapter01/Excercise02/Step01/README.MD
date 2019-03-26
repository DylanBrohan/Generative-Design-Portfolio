# Excercise02

## Step01(Saturation Grid)

In this step i began by setting up the canvas and the color mode in the setup function + declaring my stepX/Y variables

```js

'use strict';

var stepX;
var stepY;

function setup() {
  createCanvas(800, 400);//sets Canvas Size
  noStroke();//No strokes in the canvas grid
  colorMode(HSB, width, height, 100);//color Mode set to HSB  and width and height of the canvas
}

function draw() {
  stepX = mouseX + 2;
  stepY = mouseY + 2;

  for (var gridY = 0; gridY < height; gridY += stepY) {
    for (var gridX = 0; gridX < width; gridX += stepX) {
      fill(gridX, height - gridY, 100);
      rect(gridX, gridY,stepX, stepY);
    }
  }
}

function keyPressed() {
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
}
```

