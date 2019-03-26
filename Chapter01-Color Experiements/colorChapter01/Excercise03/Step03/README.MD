# Excercise03

## Step03

In this step i added a timestamp to save a png of the image, i also added a 'Key Pressed' function so display different dimension / segments.

```js
var segmentCount =360;

function setup(){
    createCanvas(800,800);
    colorMode(HSB, 360,0,0);
    noStroke();

}

    function draw(){
        var angle=0;
        var segmentCount=map(mouseX,0,height, 1 ,360);//Mouse X determines the mapping range of each segment
        var angleIncrement = 360/segmentCount;
        var radius=200;
        background(0,150,150);

        beginShape(TRIANGLE_FAN);
        vertex(width/2,height/2);
        for(var angle=0; angle <= 360; angle = angle+angleIncrement){
            var vx = radius * cos(radians(angle)) + width/2; 
            var vy = radius * sin(radians(angle)) + height/2;
            fill(angle,100,100);
            vertex(vx,vy); //Adds a Vertex    
        }
        endShape();//Ends the shapes co-ords                                              
    }

function keyPressed (){//saves Canvas as a timestamp using the GD library command
    if (key =='s' || key =='S' ) saveCanvas(gd.timestamp()+ '_MouseX'+  mouseX + 'png');


switch(key){//Sets the angel of each segment depending on what key is pressed
    case '1':
    segmentCount =360;
    break;
    case '2':
    segmentCount =45;
    break;
    case '3':
    segmentCount =24;
    break;
    case '4':
    segmentCount =12;
    break;
    case '5':
    segmentCount =6;
    break;
}
}
```
