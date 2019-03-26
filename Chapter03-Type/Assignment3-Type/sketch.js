// Global Variables
let textTyped = "ABC";
let font;
let fontSize = 200;
let textImg;
let imageMap;

// Density, Circle Size & Random
let pointDensity = 6;
let circleSize = 6;
let randomSize = 100;

// Arrays
let finishArray = [];
let startArray = [];

let stepCount = 150;
let counter = 0;
let circleSlider;
let densitySlider;

// Counter
let CounterDirection = true;

// Filled variables & Animate
let filled = 1;
let animate = false;

let checkbox;
let animateBox;

// Sets Width of canvas
let myWidth = $("#canvasHolder").width();

// Preloads Image & Test
function preload() {
  // Loading Font & Image
  font = loadFont("data/FreeSansBold.ttf");
  imageMap = loadImage("data/img.jpg");
}

// Canvas setupt
function setup() {
  let canvas = createCanvas(myWidth, myWidth);
  canvas.parent("canvasHolder");

  //   Goes to the function and sets it
  createTextGraphic();
  // Load image
  imageMap.loadPixels();
  //   Create empty arrays
  createArrays();
  frameRate(10);

  //   ---Filled Controller---
  checkBox = createCheckbox("Fade-Out", true);
  checkBox.class("checkBox");
  checkBox.changed(update);
  checkBox.parent("checkBoxController");

  //   ---Animate Controller---
  animateBox = createCheckbox("Animate", false);
  animateBox.class("animateBox");
  animateBox.changed(update);
  animateBox.parent("animateBoxController");

  //   ---Density Controller---
  densitySlider = createSlider(1, 20, 6);
  densitySlider.class("densitySlider");
  densitySlider.mouseReleased(update);
  densitySlider.parent("densityController");

  //   ---Radius Controller---
  circleSlider = createSlider(1, 20, 6);
  circleSlider.class("circleSlider");
  circleSlider.mouseReleased(update);
  circleSlider.parent("radiusController");

  //   ---Font Size Controller---
  fontSizeSlider = createSlider(100, 800, 200);
  fontSizeSlider.class("fontSizeSlider");
  fontSizeSlider.mouseReleased(update);
  fontSizeSlider.parent("fontSizeController");

  //   ---Random Controller---
  randomSlider = createSlider(0, 200, 100);
  randomSlider.class("randomSlider");
  randomSlider.mouseReleased(update);
  randomSlider.parent("randomController");

  //   ---Input Text Controller---
  inputBox = createInput("RAIN");
  inputBox.class("inputBox");
  inputBox.input(update);
  inputBox.parent("inputBoxController");
}

function createTextGraphic() {
  // create an offscreen graphics object to draw the text into
  textImg = createGraphics(width, height);
  textImg.pixelDensity(1);
  textImg.background(255);
  textImg.textFont(font);
  textImg.textSize(fontSize);
  textImg.textAlign(CENTER);
  textImg.text(textTyped, width / 2, fontSize);
  textImg.loadPixels();
}

// Create Arrays function
function createArrays() {
  // Loops through
  for (let x = 0; x < textImg.width; x += pointDensity) {
    for (let y = 0; y < textImg.height; y += pointDensity) {
      // Calculate the index for the pixels array from x and y
      // console.log("log");

      let index = (x + y * textImg.width) * 4;
      // Get the red value from image
      let r = textImg.pixels[index];
      // console.log(r);

      // Index of RGB values from imageMap image
      // checks to see if value is less than R
      if (r < 128) {
        let rValue = imageMap.pixels[index];
        let gValue = imageMap.pixels[index + 1];
        let bValue = imageMap.pixels[index + 2];
        let fillColor = color(rValue, gValue, bValue);
        // Finish Array stores the following
        // array has all the objects
        finishArray.push({
          xPos: x,
          yPos: y + 500,
          fill: fillColor
        });
        // Starts the randomize
        // positioning of each variable
        startArray.push({
          xPos: 0 + random(myWidth, -randomSize, randomSize),
          yPos: 0 + random(-randomSize, randomSize),
          fill: fillColor
        });
      }
    }
  }
}

function draw() {
  // Alpha value in the background
  background(0, 20);
  noFill();
  noStroke();
  angleMode(DEGREES);
  for (let i = 0; i < finishArray.length - 1; i++) {
    if (filled == 1) {
      noStroke;
      fill(finishArray[i].fill);
      console.log(startArray, finishArray);
    } else {
      console.log(finishArray);
      noFill();
      stroke(finishArray[i].fill);
    }

    // Counter is divided by the array length
    let lerpAmount = (counter / finishArray.length) * stepCount;
    if (lerpAmount > 1) {
      lerpAmount = 1;
    }
    // Lerp through array
    let xPos = lerp(startArray[i].xPos, finishArray[i].xPos, lerpAmount);
    let yPos = lerp(startArray[i].yPos, finishArray[i].yPos, lerpAmount);
    // Lines
    push();
    translate(xPos, yPos);
    rotate(45);
    line(0, 0, 10, 10);
    pop();

    if (startArray > height) {
      startArray = 0;
    }
    // rect(xPos, yPos, circleSize, circleSize);
  }

  // Counter Function for tracking the number of frames
  // Counts the steps / StepAmount
  if ((CounterDirection === true) & (animate == true)) {
    if (counter * stepCount < finishArray.length) {
      // increment it by +
      counter++;
    } else {
      CounterDirection = false;
      // increment by -
      counter--;
    }
  } else {
    if (counter * stepCount > 0) {
      counter--;
    } else {
      CounterDirection = true;
    }
  }
}
// Update Function for Controllers
function update() {
  circleSize = circleSlider.value();
  pointDensity = densitySlider.value();
  fontSize = fontSizeSlider.value();
  randomSize = randomSlider.value();
  textTyped = inputBox.value();

  if (checkBox.checked() == true) {
    filled = true;
  } else {
    filled = false;
  }
  // if statement for animation
  if (animateBox.checked() == true) {
    animate = true;
  } else {
    animate = false;
  }
  console.log(finishArray, startArray);

  // Empty Arrays
  finishArray = [];
  startArray = [];
  createTextGraphic();
  createArrays();
  counter = 0;
}

function keyReleased() {
  // export png
  if (keyCode == CONTROL) saveCanvas(gd.timestamp(), "png");
}
