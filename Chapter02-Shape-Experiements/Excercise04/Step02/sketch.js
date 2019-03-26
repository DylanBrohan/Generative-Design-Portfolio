"use strict";

var tileCount = 20;
var actRandomSeed = 0;

var firstGridColor;
var secondGridColor;

var firstGridAlpha = 100;
var secondGridAlpha = 100;

var moduleRadiusBackground = 30;
var moduleRadiusForeground = 15;

var backgroundColor;

function setup() {
  createCanvas(600, 600);
  colorMode(HSB, 360, 100, 100, 100);
  noStroke();
  // circleMode(CENTER);

  firstGridColor = color(50, 200, 300, firstGridAlpha);
  secondGridColor = color(0, 0, 230, secondGridAlpha);

  backgroundColor = color(0, 0, 0);
}

function draw() {
  translate(width / tileCount / 2, height / tileCount / 2);

  background(backgroundColor);

  randomSeed(actRandomSeed);

  for (var gridY = 0; gridY < tileCount; gridY++) {
    for (var gridX = 0; gridX < tileCount; gridX++) {
      var posX = (width / tileCount) * gridX;
      var posY = (height / tileCount) * gridY;

      var shiftX = (random(-1, 1) * mouseX) / 40;
      var shiftY = (random(-1, 1) * mouseY) / 40;

      fill(firstGridColor);
      ellipse(
        posX + shiftX,
        posY + shiftY,
        moduleRadiusBackground,
        moduleRadiusBackground
      );
    }
  }
  for (var gridY = 0; gridY < tileCount; gridY++) {
    for (var gridX = 0; gridX < tileCount; gridX++) {
      var posX = (width / tileCount) * gridX;
      var posY = (height / tileCount) * gridY;

      fill(secondGridColor);
      ellipse(posX, posY, moduleRadiusForeground, moduleRadiusForeground);
    }
  }
}

function mousePressed() {
  actRandomSeed = random(100000);
}
