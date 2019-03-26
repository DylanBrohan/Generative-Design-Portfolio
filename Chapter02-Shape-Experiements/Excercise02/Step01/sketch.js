// P_2_0_02
//
// Generative Gestaltung – Creative Coding im Web
// ISBN: 978-3-87439-902-9, First Edition, Hermann Schmidt, Mainz, 2018
// Benedikt Groß, Hartmut Bohnacker, Julia Laub, Claudius Lazzeroni
// with contributions by Joey Lee and Niels Poldervaart
// Copyright 2018
//
// http://www.generative-gestaltung.de
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * drawing with a changing shape by draging the mouse.
 *
 * MOUSE
 * position x          : length
 * position y          : thickness and number of lines
 * drag                : draw
 *
 * KEYS
 * del, backspace      : erase
 * s                   : save png
 */
"use strict";

function setup() {
  createCanvas(720, 720);
  noFill();
  background(200);
  strokeWeight(2);
  stroke(0, 25);
  // stroke("rgba(100%,0%,100%,0.5)");
}

function draw() {
  if (mouseIsPressed && mouseButton == LEFT) {
    push();
    translate(width / 2, height / 2);

    var circleRes = int(map(mouseY + 100, 0, height, 2, 10));
    var radius = mouseX - width / 2;
    var angle = TAU / circleRes;
    var color1 = map(circleRes, 2, 80, 100, 255);
    var color2 = map(circleRes, 2, 80, 400, 1);

    beginShape();
    for (var i = 0; i <= circleRes; i++) {
      var x = cos(angle * i) * radius;
      var y = sin(angle * i) * radius;
      vertex(x, y);
      stroke(0, color1, color2);
    }
    endShape();

    pop();
  }
}
