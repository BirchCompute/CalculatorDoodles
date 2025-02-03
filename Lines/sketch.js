//This program draws a bunch of lines randomly on screen

let backColor = [178,194,175];
let foreColor = [102,112,121];

//Makes the box bigger so you can see
let screenScale = 5


function setup() {
  //TI82 screen resoltion is 96x64
  createCanvas(96 * screenScale, 64 * screenScale);
  
  //Use LCD screen colors
  background(backColor);
  stroke(foreColor);
  
  //Scales the line width with the screen size
  strokeWeight(1 * screenScale);
  
  //My calculator ran about 8 fps with this program
  frameRate(8);
}


function draw() {
  //Repeatedly draw a line between two points placed randomly on screen
  line( 
    random(0,width), random(0,height), 
    random(0,width), random(0,height) 
  );
}
