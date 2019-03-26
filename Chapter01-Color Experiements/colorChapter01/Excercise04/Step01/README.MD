# Generative Design

In this section i set the global Variables + Empty Arrays to hold the different color variable. i then created my canvas at a fixed width and set the shakeColors function

## Excercise04(Step01)
```js
'use strict';

var tileCountX = 2;//Global Variables to set the amount of tiles in each grid axis
var tileCountY = 10;

var colorsLeft = []// empty Arrays 
var colorsRight = [];
var colors = [];

var interpolateShortest = true;//boolean variable thats sets colors to interpolate 

function setup() {
  createCanvas(800, 800);//sets canvas height + width
  colorMode(HSB);//color mode set to HSB 
  noStroke();//No stroke line on the canvas
  shakeColors();//pulls in the shake color function
}

function draw() {

  var tileWidth = width / tileCountX;
  var tileHeight = height / tileCountY;
  var interCol;
  colors = [];

  for (var gridY = 0; gridY < tileCountY; gridY++) {
    var col1 = colorsLeft[gridY];
    var col2 = colorsRight[gridY];

    for (var gridX = 0; gridX < tileCountX; gridX++) {
      var amount = map(gridX, 0, tileCountX - 1, 0, 1);

      if (interpolateShortest) {
        // switch to rgb
        colorMode(RGB);
        interCol = lerpColor(col1, col2, amount);
        // switch back
        colorMode(HSB);
      } else {
        interCol = lerpColor(col1, col2, amount);
      }

      fill(interCol);

      var posX = tileWidth * gridX;
      var posY = tileHeight * gridY;
      rect(posX, posY, tileWidth, tileHeight);

      // save color for potential ase export
      colors.push(interCol);
    }
  }
}

function shakeColors() {
  for (var i = 0; i < tileCountY; i++) {
    colorsLeft[i] = color(random(0, 60), random(0, 100), 100);
    colorsRight[i] = color(random(160, 190), 100, random(0, 100));
  }
}

function mouseReleased() {
  shakeColors();
}

```
