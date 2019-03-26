# Excercise03

## Step02

In this step i began by setting the radius(Variable) to the radius of a circle 360 degrees, I then used the map method to map the position of each individual triangular fan. Then using the beginFan method within a forloop to draw each triangle shape.

```js
var segmentCount =360;//sets the radius of the segments

function setup(){
    createCanvas(800,800);
    colorMode(HSB, 360,0,0);
    noStroke();

}

    function draw(){
        var angle=0;
        var segmentCount=map(200,0,height, 1 ,360);//using Mapping to re-map a number from one range to another
        var angleIncrement = 360/segmentCount;
        var radius=200;//sets the radius co-ords
        background(0,150,150);

        beginShape(TRIANGLE_FAN);//Begins Shape Triangle FAN
        vertex(width/2,height/2);
        for(var angle=0; angle <= 360; angle = angle+angleIncrement){//creates each vertex with the correct angle and creates a loop of each one
            var vx = radius * cos(radians(angle)) + width/2; 
            var vy = radius * sin(radians(angle)) + height/2;
            fill(angle,100,100);
            vertex(vx,vy); //Adds a Vertex    
        }
        endShape();                                                        
    }

```
