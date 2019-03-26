// // ----Step03----
// let font;
// let numOfTiles = 100;
// let pixelDensity = 10;
// let circleRadius = 5;
// let radiusSlider;
// let checkbox;
// let filled;
// let text = "ABC";
// let input;
// let colors = [];
// let sortMode = null;
// let textSize = 200;

// // Load image
// function preload() {
//   myFont = loadFont("./data/FreeSansBold.ttf");
//   img = loadImage("gradient2.jpg");
// }
// // background setup
// function setup() {
//   background(255);

//   let canvas = createCanvas(500, 500);
//   canvas.parent("canvasHolder");

//   // Radius Slider
//   radiusSlider = createSlider(1, 10, circleRadius);
//   radiusSlider.parent("radiusController");
//   radiusSlider.mouseReleased(update);

//   // Density Slider
//   densitySlider = createSlider(1, 10, pixelDensity);
//   densitySlider.parent("densityController");
//   densitySlider.mouseReleased(update);

//   // Font Slider
//   fontSlider = createSlider(1, 10, textSize);
//   fontSlider.parent("fontController");
//   fontSlider.mouseReleased(update);

//   //  Checkbox
//   checkbox = createCheckbox("Fill", false);
//   checkbox.parent("fillController");
//   checkbox.changed(update);

//   //  Input Text
//   input = createInput("ABC");
//   input.parent("textController");
//   input.input(update);
// }

// function draw() {
//   colors = [];
//   background(255);
//   setUpText();
//   let rectSize = width / pixelDensity;

//   img.loadPixels();
//   console.log(img);

//   for (let y = 0; y < height; y += pixelDensity) {
//     for (let x = 0; x < width; x += pixelDensity) {
//       let index = (x + y * textImg.width) * 4;
//       let r = textImg.pixels[index];
//       if (r < 128) {
//         let rValue = img.pixels[index];
//         let gValue = img.pixels[index + 1];
//         let bValue = img.pixels[index + 2];
//         let fillColor = img.pixels[index + 3];

//         finishArray.push({
//           xPos: x,
//           yPos: y,
//           fill: fillColor
//         });

//         startArray.push({
//           xPos: x + random(-randomAmount, randomAmount),
//           yPos: y + random(-randomAmount, randomAmount),
//           fill: fillColor
//         });

//         if (filled) {
//           fill(fillColor);
//           stroke(fillColor);
//           ellipse(x, y, circleRadius, circleRadius);
//         } else {
//           noFill();
//           stroke(fillColor);
//           ellipse(x, y, circleRadius, circleRadius);
//         }
//       }
//     }
//   }
// }

// // Setup text variables
// function setUpText() {
//   textImg = createGraphics(500, 500);
//   textImg.pixelDensity(1);
//   textImg.background(255);
//   textImg.textFont(myFont);
//   textImg.textSize(200);
//   textImg.text(text, 0, 100, 50, 50);
//   textImg.loadPixels();
// }

// // Update function
// function update() {
//   circleRadius = radiusSlider.value();
//   pixelDensity = densitySlider.value();
//   textSize = fontSlider.value();

//   if (checkbox.checked() == 1) {
//     filled = 1;
//   } else {
//     filled = 0;
//   }

//   text = input.value();
// }

var textTyped = "ABC";
var font;
var fontSize = 200;
var textImg;
var colorMap;

var pointDensity = 6;
var circleSize = 6;
var randomAmount = 100;

var finishArray = [];
var startArray = [];
var stepAmount = 100;
var counter = 0;
var circleSlider;
var densitySlider;
var counterDir = true;

var filled = 1;
var animate = false;

var checkbox;
var animateBox;
var myWidth = $("#canvasHolder").width();

function preload() {
  font = loadFont("data/FreeSansBold.ttf");
  colorMap = loadImage("gradient2.jpg");
}

function setup() {
  var canvas = createCanvas(myWidth, myWidth);
  canvas.parent("canvasHolder");

  createTextGraphic();
  colorMap.loadPixels();
  createArrays();
  frameRate(30);

  circleSlider = createSlider(1, 20, 6);
  circleSlider.class("circleSlider");
  circleSlider.mouseReleased(update);
  circleSlider.parent("radiusController");

  densitySlider = createSlider(1, 20, 6);
  densitySlider.class("densitySlider");
  densitySlider.mouseReleased(update);
  densitySlider.parent("densityController");

  fontSizeSlider = createSlider(100, 800, 200);
  fontSizeSlider.class("fontSizeSlider");
  fontSizeSlider.mouseReleased(update);
  fontSizeSlider.parent("fontSizeController");

  randomSlider = createSlider(0, 200, 100);
  randomSlider.class("randomSlider");
  randomSlider.mouseReleased(update);
  randomSlider.parent("randomController");

  inputBox = createInput("DESIGN");
  inputBox.class("inputBox");
  inputBox.input(update);
  inputBox.parent("inputBoxController");

  checkBox = createCheckbox("Filled", true);
  checkBox.class("checkBox");
  checkBox.changed(update);
  checkBox.parent("checkBoxController");

  animateBox = createCheckbox("Animate", false);
  animateBox.class("animateBox");
  animateBox.changed(update);
  animateBox.parent("animateBoxController");
}

function createTextGraphic() {
  // create an offscreen graphics object to draw the text into
  //console.log("check")
  textImg = createGraphics(width, height);
  textImg.pixelDensity(1);
  textImg.background(255);
  textImg.textFont(font);
  textImg.textSize(fontSize);
  textImg.textAlign(CENTER);

  textImg.text(textTyped, width / 2, fontSize);
  textImg.loadPixels();
}

function createArrays() {
  for (var x = 0; x < textImg.width; x += pointDensity) {
    for (var y = 0; y < textImg.height; y += pointDensity) {
      // Calculate the index for the pixels array from x and y
      var index = (x + y * textImg.width) * 4;

      // Get the red value from image
      var r = textImg.pixels[index];

      if (r < 128) {
        var rValue = colorMap.pixels[index];
        var gValue = colorMap.pixels[index + 1];
        var bValue = colorMap.pixels[index + 2];
        var fillColor = color(rValue, gValue, bValue);

        finishArray.push({
          xPos: x,
          yPos: y,
          fill: fillColor
        });
        startArray.push({
          xPos: x + random(-randomAmount, randomAmount),
          yPos: y + random(-randomAmount, randomAmount),
          fill: fillColor
        });
      }
    }
  }
}

function draw() {
  background(0, 20);

  noFill();
  noStroke();

  for (var i = 0; i < finishArray.length - 1; i++) {
    if (filled == 1) {
      noStroke;
      fill(finishArray[i].fill);
    } else {
      noFill();
      stroke(finishArray[i].fill);
    }

    var lerpAmount = (counter / finishArray.length) * stepAmount;
    if (lerpAmount > 1) {
      lerpAmount = 1;
    }
    var xPos = lerp(startArray[i].xPos, finishArray[i].xPos, lerpAmount);
    var yPos = lerp(startArray[i].yPos, finishArray[i].yPos, lerpAmount);

    ellipse(xPos, yPos, circleSize, circleSize);
  }

  if ((counterDir === true) & (animate == true)) {
    if (counter * stepAmount < finishArray.length) {
      counter++;
    } else {
      //console.log()
      counterDir = false;
      counter--;
    }
  } else {
    if (counter * stepAmount > 0) {
      counter--;
    } else {
      counterDir = true;
      //update();
    }
  }
}

function update() {
  circleSize = circleSlider.value();
  pointDensity = densitySlider.value();
  fontSize = fontSizeSlider.value();
  randomAmount = randomSlider.value();
  textTyped = inputBox.value();

  if (checkBox.checked() == true) {
    filled = true;
  } else {
    filled = false;
  }

  if (animateBox.checked() == true) {
    animate = true;
  } else {
    animate = false;
  }

  finishArray = [];
  startArray = [];
  createTextGraphic();
  createArrays();
  counter = 0;
}
