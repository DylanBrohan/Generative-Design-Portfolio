'use strict';


//All global variables / Empty arrays that will be needed to store my color data
var colorCount = 20;
var hueValues = [];
var saturationValues = [];
var brightnessValues = [];
var actRandomSeed = 0;

//set alphaValue of each componant
var alphaValue = 27;

function setup() {
  createCanvas(windowWidth, windowHeight);//Canvas width height + ColorMode
  colorMode(HSB, 360, 100, 100, 100);
  noStroke();
}

function draw() {
  //setting the noLoop function + Background values
  noLoop();
  background(0);
}
