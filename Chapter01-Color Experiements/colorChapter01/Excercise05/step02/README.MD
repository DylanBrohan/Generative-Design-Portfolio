# Generative Design
## Excercise05(Step02)

 In this section of image manipulation i created Global Variables + a color array to hold a list of colors i then created a forLoop to calculate the exact pixal value + its corrosponding color, after this i then pushed the color into the empty array

```js
'use strict';
// Global Variables declares image
var img;
var colors = [];

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
    var rectSize = width / tileCount;//sets the Rext 
    var tileCount = 2;//Sets the amount of Tiles in the canvas

    img.loadPixels();//Loads Pixels of the image

    colors=[];//Empty Color Array
    console.log(img);
    console.log(pixels);

// Sets the Auto Increment of each RectTangle in the grid
  for (var gridY = 0; gridY < tileCount; gridY++) {
      //inner loop for gridY and gridX
    for (var gridX = 0; gridX < tileCount; gridX++) {
      var px = int(gridX * rectSize);  // Calculating the Pixal Value
      var py = int(gridY * rectSize);
    //   gets the X + Y value , tell me what the image width is , multiply it by 4 to get the exact index in the array of the Red value
      var i = (py * img.width + px) * 4;     
      var c = color(img.pixels[i], img.pixels[i + 1], img.pixels[i + 2], img.pixels[i + 3]);// Creates the color object within the array
      colors.push(c);//pushes colors into the array as a c object
      console.log(colors);//Should give back the 4 values of the tile depending on the Tile Count
    }
  }
}

```
