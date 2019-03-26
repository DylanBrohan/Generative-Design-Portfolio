// ---Step 01---

let font;
let textTyped = "DYL";

function setup() {
  createCanvas(500, 500);
  opentype.load("data/FreeSans.otf", function(err, f) {
    if (err) {
      console.log(err);
    } else {
      font = f;
      loop();
    }
  });
}
function draw() {
  if (!font) return;
  background(255);
  translate(20, 220);
  if (textTyped.length > 0) {
    let fontPath = font.getPath(textTyped, 0, 0, 200);
    // gets the paths and stores it in path
    let path = new g.Path(fontPath.commands);
    // passes in path & distance between it point
    path = g.resampleByLength(path, 10);

    fill(0);
    noStroke();
    let diameter = 5;

    for (let i = 0; i < path.commands.length; i++) {
      let pnt = path.commands[i];
      ellipse(pnt.x, pnt.y, diameter, diameter);
    }
  }
}
