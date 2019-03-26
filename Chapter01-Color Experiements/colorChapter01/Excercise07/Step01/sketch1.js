'use strict';
//Setting the global variables in which i will need to finish this excercise + store data in the arrays
var colorCount = 20;
var hueValues = [];
var saturationValues = [];
var brightnessValues = [];
var actRandomSeed = 0;

//Setup function, to create the Canvas, ColorMode and noStroke
function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);
  noStroke();
}

