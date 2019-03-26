'use strict';

var colorCount = 20;
var hueValues = [];
var saturationValues = [];
var brightnessValues = [];
var actRandomSeed = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);
  noStroke();
}

function draw() {
  noLoop();
 
  // ------ colors ------
  // create palette
  for (var i = 0; i < colorCount; i++) {
    if (i % 2 == 0) {
      hueValues[i] = random(130, 220);
      saturationValues[i] = 100;
      brightnessValues[i] = random(15, 100);
    } else {
      hueValues[i] = 195;
      saturationValues[i] = random(20, 100);
      brightnessValues[i] = 100;
    }
  }

  // ------ area tiling ------
  // count tiles
  var counter = 0;
  // row count and row height
  var rowCount = int(random(5, 30));
  var rowHeight = height / rowCount;

  // seperate each line in parts
  for (var i = rowCount; i >= 0; i--) {
    // how many fragments
    var partCount = i + 1;
    var parts = [];

    for (var ii = 0; ii < partCount; ii++) {
      // This Creates probability within the program, 
      //if the random variable is under the percentage, Execute this code
      if (random() < 0.075) {
        // take care of big values
        var fragments = int(random(2, 20));
        partCount = partCount + fragments;
        for (var iii = 0; iii < fragments; iii++) {
          parts.push(random(2));
        }
      } else {
        //if the statement was false push the 'part' value into the random array
        parts.push(random(2, 20));
      }
    }

    // add all subparts
    var sumPartsTotal = 0;
    for (var ii = 0; ii < partCount; ii++) {
      sumPartsTotal += parts[ii];
    }

    // draw rects
    var sumPartsNow = 0;
    for (var ii = 0; ii < parts.length; ii++) {
      sumPartsNow += parts[ii];
      //This for loop maps the x + y variables of the array depending on the total number of tiles + the width of the canvas
      var x = map(sumPartsNow, 0, sumPartsTotal, 0, width);
      var y = rowHeight * i;
      var w = -map(parts[ii], 0, sumPartsTotal, 0, width);
      var h = rowHeight;
      //Index Is a switch variable 
      var index = counter % colorCount;
      var col = color(hueValues[index], saturationValues[index], brightnessValues[index]);
      //fills each grid segment with a Col Value
      fill(col);
      //the rectangles value is = the x + y co-ords and the Width and height of each tile
      rect(x, y, w, h);
      //Increments the counter array
      counter++;
    }
  }
}


