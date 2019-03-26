'use strict';
//Tile size amount
var tileCountX = 50;
var tileCountY = 10;
//Empty Array Variables
var hueValues = [];
var saturationValues = [];
var brightnessValues = [];

function setup() {
  createCanvas(windowWidth, windowHeight);//set the  canvas Ratio
  colorMode(HSB, 360, 100, 100, 100);//Sets the color mode
  noStroke();

  // init with random values
  for (var i = 0; i < tileCountX; i++) {
    // color Values set to random
    hueValues[i] = random(360);
    saturationValues[i] = random(100);
    brightnessValues[i] = random(100);

    console.log(saturationValues);//checking the values
  }

}
function draw() {
  // white back
  background(0, 0, 100);
}

