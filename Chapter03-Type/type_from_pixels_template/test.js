let font;
let numOfTiles = 100;
let pixelDensity = 10;
let circleRadius = 5;
let radiusSlider;
let checkbox;
let filled;
let text = "ABC";
let input;
let colors = [];
let sortMode = null;

function preload() {
  myFont = loadFont("./data/FreeSansBold.ttf");
  loadImage("data/color.png", setImage);
}

function setup() {
  background(255);

  let canvas = createCanvas(500, 500);
  canvas.parent("canvasHolder");

  radiusSlider = createSlider(1, 10, circleRadius);
  radiusSlider.parent("radiusController");
  radiusSlider.mouseReleased(update);

  checkbox = createCheckbox("fill me baby", false);
  checkbox.parent("fillController");
  checkbox.changed(update);

  input = createInput("ABC");
  input.parent("inputController");
  input.input(update);

  //  $("input").on("change paste keyup", function() {
  //     update();
  //  });

  //create
}

function draw() {
  colors = [];
  background(255);
  setUpText();
  let rectSize = width / pixelDensity;

  img.loadPixels();

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let px = int(x * rectSize);
      let py = int(y * rectSize);
      let i = (py * img.width + px) * 4;
      let c = color(
        img.pixels[i],
        img.pixels[i + 1],
        img.pixels[i + 2],
        img.pixels[i + 3]
      );
      colors.push(c);
    }
  }
  //   gd.sortColors(colors, sortMode);

  let j = 0;
  for (let y = 0; y < height; y += pixelDensity) {
    for (let x = 0; x < width; x += pixelDensity) {
      let index = (x + y * textImg.width) * 4;
      let r = textImg.pixels[index];
      if (r < 128) {
        if (filled) {
          fill(colors[j]);
          stroke(colors[j]);
          ellipse(x, y, circleRadius, circleRadius);
        } else {
          noFill();
          stroke(colors[j]);
          ellipse(x, y, circleRadius, circleRadius);
        }
      }
      j++;
    }
  }
}

function setUpText() {
  textImg = createGraphics(600, 500);
  // manage pixel density
  textImg.pixelDensity(1);
  textImg.background(255);
  textImg.textFont(myFont);
  textImg.textSize(200);
  textImg.text(text, 0, 100, 50, 50);
  textImg.loadPixels();
}

function setImage(loadedImageFile) {
  img = loadedImageFile;
}

function update() {
  circleRadius = radiusSlider.value();

  if (checkbox.checked() == 1) {
    filled = 1;
  } else {
    filled = 0;
  }

  text = input.value();
}
