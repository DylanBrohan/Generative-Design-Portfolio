let numOfTiles = 10;
let tileWidth;
let minStroke = 1;
let maxStroke = 50;
let minRad = 1;
let maxRad = 10;
let strokeColour;
let actRandomSeed = 1000;
let img;

function preload() {
  img = loadImage("../test4.svg");
}
function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);
  tileWidth = width / numOfTiles;
  strokeColour = color(125, 0, 125, 225);
  rectMode(CENTER);
}

function draw() {
  background(100);

  img.loadImage;
  console.log(img);

  for (ii = 0; ii < numOfTiles; ii++) {
    for (i = 0; i < numOfTiles; i++) {
      noFill();
      let gridX = i * tileWidth;
      let gridY = ii * tileWidth;

      // let sw = map(
      //   constrain(mouseY, 0, height),
      //   0,
      //   height,
      //   minStroke,
      //   maxStroke
      // );
      // let rad = map(constrain(mouseX, 0, width), 0, width, minRad, maxRad);
      // noFill();
      // strokeWeight(sw);
      // stroke(strokeColour);
      // let shiftX = random(-mouseX, mouseX) / 40;
      // let shiftY = random(-mouseY, mouseY) / 0;

      let angle = atan2(mouseY - gridY, mouseX - gridX);

      push();
      translate(gridX, gridY);
      rotate(angle);
      // rect(gridX + shiftX, gridY + shiftY, rad, rad);
      image(img, 0, 0, tileWidth, tileWidth);
      pop();
    }
  }
}
