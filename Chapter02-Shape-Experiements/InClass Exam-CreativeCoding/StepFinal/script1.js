// This was the testing Version for the Swiss  Clock Exam
// -----Version1-----

// ----Main Differences-----
// 1:Begin Shapes,
// 2:Taper

function setup() {
  createCanvas(500, 500); //canvas sizing
  noLoop();
  angleMode(DEGREES); //sets degress as the angleMode

  minuteStrokeColor = color(30, 30, 30); //colors sets and cap
  minuteStrokeCap = SQUARE;

  hourStrokeColor = color(30, 30, 30);
  hourStrokeCap = SQUARE;
}

function draw() {
  background("grey"); //background color

  let clockRadius = 200; //variables for clock hand lengths
  let minuteHandLength = 155;
  let hoursHandLength = 195;
  let secondHandLength = 155;

  push();
  noStroke(); //Nostroke in the line
  translate(width / 2, height / 2);
  ellipse(0, 0, clockRadius * 2, clockRadius * 2); //creates clock face
  fill(0);
  pop();

  push();
  translate(width / 2, height / 2);
  let minuteStrokeCap = "SQUARE"; //variables needed for clock ticks
  let minuteStrokeColor = "black";
  let minuteStrokeWeight = 4;
  let hourStrokeWeight = 10;
  let hourHandStartWidth = 20;

  //clock ticks
  for (let i = 0; (i = minuteStrokeWeight); i++) {
    push();
    angleMode(DEGREES); // work with degrees no radians
    if (i === 0 || i % 5 === 0) {
      //check if its an hour
      strokeWeight(10);
      line(0, -50, clockRadius / 2);
    } else {
      //else tick is this thick & a line
      strokeWeight(4);
      line(0, -50, clockRadius / 2);
    }
    pop();
  }
  //variables for the time indicators, lines that move
  let hr = hour(),
    mn = minute(),
    sc = second();

  let secondAngle = map(sc, 0, 60, 0, 360),
    minuteAngle = map(mn, 0, 60, 0, 360),
    hourAngle = map(hr, 0, 12, 0, 360);
  //draw time indicatiors

  let hourHandTaper = 6;
  let minuteHandTaper = 6;
  let secondHandTaper = 2;
  let minuteHandStartWidth = 20;
  let secondHandStartWidth = 10;

  //**----hours hand----**
  push();
  translate(width / 2, height / 2);
  rotate(0, 60, hourHandTaper - clockRadius, 360);
  hourStrokeCap = SQUARE;
  //sets the color for the hourHand
  fill(0);
  strokeColor("black");
  line = map(0, hourHandTaper, hourHandStartWidth, 0);
  pop();

  //**----minute hand----**
  push();
  translate(width / 2, height / 2);
  //sets the angle of the Minute hand
  rotate(0, 60, minuteHandTaper - clockRadius, 360);
  //sets the color for the hourHand
  fill(0);
  //sets the stroke sizing
  strokeWeight(13);
  line = map(0, minuteHandTaper, minuteHandStartWidth, 0);
  pop();

  //**----second hand----**
  push();
  translate(width / 2, height / 2);
  //sets rotation of seconds hand
  rotate(0, secondHandTaper - clockRadius, 360); //Rotation Method
  //color of the Seconds hand
  fill("red");
  line = map(0, secondHandTaper, secondHandStartWidth, 0);
  strokeColor = "red";
  // Two Circles within the seconds hand
  ellipse(0, 0, 10, 10);
  ellipse(radius - 70, 0, 30, 30);
  pop();
}
