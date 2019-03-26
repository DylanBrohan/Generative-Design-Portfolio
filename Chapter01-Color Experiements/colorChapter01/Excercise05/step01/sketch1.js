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
