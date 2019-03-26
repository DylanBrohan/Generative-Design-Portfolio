# Excercise01(Color Square)

## Step02

In this step i began by setting the steps to the MouseX to change when the mouse has been moved within the canvas, i also set the rect size for each rectangle and to fill each one

```js
function setup(){
    createCanvas(800, 400);
	noStroke();
    colorMode(HSB, width, height, 100);
}

function draw(){
		
	var stepX = mouseX/5 + 1;//StepX + Y variables, are the mouse co-ordinates divided by 5
	var stepY = mouseY/5 + 1;
	
    for(var gridY=0; gridY<height; gridY=gridY+stepX){//For Loop for the grid
		for(var gridX=0; gridX<width; gridX=gridX+stepY){//inner loop
        fill(gridX,height-gridY,100);//fills each Zone depending on the colorMode 
        rect(gridX,gridY,stepX,stepY);//sets the rectangles size to draw in each position of the mouse
		}
	}
}
```
