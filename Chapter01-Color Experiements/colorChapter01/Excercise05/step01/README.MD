# Generative Design
## Excercise05(Step01 Image Manipulation)

In this step i began by Preloading the image and tested if it has grabbed the image from the folder using the console log function

```js
function preload()
{
    img = loadImage('assets/pic1.jpg')//PreLoads the Image in the correct Directory

 
}

function setup(){
createCanvas(600,600);//Canvas width + Height
noCursor();
noStroke();//No cursor when in the console
noLoop();//stops loop effect of the Draw function Below
}

function draw(){

    img.loadPixels();

    console.log(img); //Logs the object Img loadPixals();
    console.log(img.pixels[1]);//Loads the Pixel in the Array first 1
}


```
