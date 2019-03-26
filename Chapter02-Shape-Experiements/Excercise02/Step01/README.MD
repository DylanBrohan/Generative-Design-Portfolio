# Generative Design

## Excercise01(Manipulation Of Squares)

Added the key pressed function to allow the user to save the img as a png and sets a timestamp on it. 

```js
'use strict';

function setup() {
  createCanvas(720, 720);
  noCursor();

  colorMode(HSB, 360, 100, 100);
  rectMode(CENTER);
  noStroke();
}

function draw() {
  background(mouseY / 2, 100, 100);

  fill(360 - mouseY / 2, 100, 100);
  rect(360, 360, mouseX + 1, mouseX + 1);
}

function keyPressed() {
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
}
```
