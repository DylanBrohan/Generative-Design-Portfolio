// This was the  Finished Version (De-Bugged) for the Swiss Clock Exam
// -----Version2-----

// Variables for minute hand lengths and color
let minuteStrokeLength = 10;
let minuteStrokeWeight = 4;
let minuteStrokeColor;
let minuteStrokeCap;

// Variables for Hour hand lengths and color
let hourStrokeLength = 30;
let hourStrokeWeight = 10;
let hourStrokeColor;
let hourStrokeCap;

// Clocks Radius
let clockRadius = 200;

// Variables for Hour hand Taper and Width
let hourHandsTaper = 6;
let hourHandLength = 195;
let hourHandOffset = 80;
let hourHandStartWidth = 20;

// Variables for minute hand Taper,Length and Width
let minuteHandsTaper = 6;
let minuteHandLength = 155;
let minuteHandOffset = 80;
let minuteHandStartWidth = 20;

// Variables for Second hand lengths, Taper and Width
let secondHandsTaper = 2;
let secondHandLength = 155;
let secondHandOffset = 80;
let secondHandStartWidth = 10;

function setup() {
  // Canvas Sizing and Angle set to Degrees
  createCanvas(500, 500);
  angleMode(DEGREES);
  // Minute Stroke Color & Cap set
  minuteStrokeColor = color(30, 30, 30);
  minuteStrokeCap = SQUARE;

  // Hour Stroke Color & Cap set
  hourStrokeColor = color(30, 30, 30);
  hourStrokeCap = SQUARE;
}

function draw() {
  // Background set to White
  background(255);
  strokeCap(SQUARE);

  //ticks of the clock
  for (let i = 0; i < 60; i++) {
    push();
    translate(width / 2, height / 2);
    rotate(map(i, 0, 60, 0, 360));
    // If I is less the 0 or equal to 5
    if (i === 0 || i % 5 === 0) {
      //hours
      strokeWeight(hourStrokeWeight);
      fill(hourStrokeColor);
      line(0, clockRadius - hourStrokeLength, 0, clockRadius);
      // else its a Minute Tick
    } else {
      strokeWeight(minuteStrokeWeight);
      fill(minuteStrokeColor);
      line(0, clockRadius - minuteStrokeLength, 0, clockRadius);
    }
    pop();
  }

  //hours hand
  push();
  noStroke();
  // Fill Color
  fill(30, 30, 30);
  translate(width / 2, height / 2);
  let hr = hour();
  // Map angle to hour at these points
  let hourAngle = map(hr, 0, 12, 0, 360);
  rotate(hourAngle + 270);
  // Begin shape for taper on Hours hand
  beginShape();
  vertex(-hourHandOffset, -hourHandStartWidth / 2);
  vertex(hourHandLength, -hourHandStartWidth / 2 + hourHandsTaper / 2);
  vertex(hourHandLength, hourHandStartWidth / 2 - hourHandsTaper / 2);
  vertex(-hourHandOffset, hourHandStartWidth / 2);
  endShape();
  pop();

  //miute hand
  push();
  noStroke();
  fill(30, 30, 30);
  translate(width / 2, height / 2);
  let mn = minute();
  let minuteAngle = map(mn, 0, 60, 0, 360);
  // Rotate minute hands angle
  rotate(minuteAngle + 270);
  beginShape();
  vertex(-minuteHandOffset, -minuteHandStartWidth / 2);
  vertex(minuteHandLength, -minuteHandStartWidth / 2 + minuteHandsTaper / 2);
  vertex(minuteHandLength, minuteHandStartWidth / 2 - minuteHandsTaper / 2);
  vertex(-minuteHandOffset, minuteHandStartWidth / 2);
  endShape();
  pop();

  push();
  // sets color to Red
  fill("red");
  noStroke();
  // Second Variable
  let sc = second();
  // Sets starting angle mapped to this
  let secondAngle = map(sc, 0, 60, 0, 360);
  translate(width / 2, height / 2);
  rotate(secondAngle + 270);
  beginShape();
  // Taper of seconds hand
  vertex(-secondHandOffset, -secondHandStartWidth / 2);
  vertex(secondHandLength, -secondHandStartWidth / 2 + secondHandsTaper / 2);
  vertex(secondHandLength, secondHandStartWidth / 2 - secondHandsTaper / 2);
  vertex(-secondHandOffset, secondHandStartWidth / 2);
  endShape();
  // 2 Ellipses that are present on the seconds hand
  ellipse(0, 0, 15, 15);
  ellipse(secondHandLength - 25 / 2 + 1, 0, 25, 25);
  pop();
}
