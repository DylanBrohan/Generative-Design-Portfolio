'use strict';
var img;
var colors = [];
var sortMode = null;

function preload()
{
    img = loadImage('assets/pic1.jpg')
}

function setup(){
createCanvas(600,600);
noCursor();
noStroke();
noLoop();
}

function draw(){
    var rectSize = width / tileCount;
    var tileCount = 2;
    // floor(width / max(mouseX, 5))
    img.loadPixels();
    colors=[];
    
    console.log(img);
    console.log(pixels);

  for (var gridY = 0; gridY < tileCount; gridY++) {
    for (var gridX = 0; gridX < tileCount; gridX++) {
      var px = int(gridX * rectSize);  
      var py = int(gridY * rectSize);
      var i = (py * img.width + px) * 4;     
      var c = color(img.pixels[i], img.pixels[i + 1], img.pixels[i + 2], img.pixels[i + 3]);
      colors.push(c);
      console.log(colors);
    }
  }
  gd.sortColors(colors, sortMode);
    // Draws out the colors from the array into each rectangle within the grid
  var i = 0;
   for (var gridY = 0; gridY < tileCount; gridY++) {
      for (var gridX = 0; gridX < tileCount; gridX++) {
      fill(colors[i]);
      rect(gridX * rectSize, gridY * rectSize, rectSize, rectSize);
      i++;
    }
  }
}




