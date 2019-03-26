var segmentCount =360;

function setup(){
    createCanvas(400,400);//Creates canvas
    colorMode(HSB, 30,0,0);//sets color Mode
    noStroke();//No stroke on the canvas

}

    function draw(){
        background(0,150,10);//background Color

        beginShape(TRIANGLE_FAN);
        vertex(57.5, 50);
        vertex(57.5, 15);
        vertex(92, 50);
        vertex(57.5, 85);
        vertex(22, 50);
        vertex(57.5, 15);
        endShape();
       
    }