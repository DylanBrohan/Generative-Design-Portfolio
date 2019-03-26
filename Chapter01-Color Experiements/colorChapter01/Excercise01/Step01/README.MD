# Excercise01

## Step01

In this step i have started by adding the canvas size with noStroke method, i have also set the colorMode and console logged they steps on the axis 

```js
function setup(){
    createCanvas(800, 400);//canvas size 
	noStroke();//No Stroke in the Canvas 
    colorMode(HSB, width, height, 100);//sets the color mode to HSB 
}

function draw(){
		
	var stepX = mouseX/5 + 1;
	var stepY = mouseY/5 + 1;

	console.log(stepX);//checks the step on the X axis

    for(var gridY=0; gridY<height; gridY=gridY+stepX){
		for(var gridX=0; gridX<width; gridX=gridX+stepY){
        fill(gridX,height-gridY,100);
        rect(gridX,gridY,stepX,stepY);
		}
	}
}

```
