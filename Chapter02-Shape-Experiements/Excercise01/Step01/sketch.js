"use strict";
var circleRes = 50;
var radius = 150;
var angle = 360 / circleRes;

function setup() {
  createCanvas(720, 720);
  angleMode(DEGREES);
}

function draw() {
  background(100);
  strokeWeight(mouseY / 50);
  strokeCap(ROUND);
  translate(width / 2, height / 2);
  stroke("rgba(100%,0%,100%,0.5)");

  radius = map(mouseX, width / 2, width, 1, 150);
  circleRes = int(map(mouseY, 0, height, 2, 80));

  for (var i = 0; i < circleRes; i++) {
    var posX = cos(angle * i) * abs(radius);
    var posY = sin(angle * i) * abs(radius);
    line(0, 0, posX, posY);
    // angle++;
    // radius++;
  }
  // radius++;
}

function keyPressed() {}
