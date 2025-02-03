//This program draws a sunset 

let midWidth;
let backColor = [102,112,121];
let foreColor = [178,194,175];

//Makes the box bigger so you can see
let screenScale = 5;

//row counter, so it can loop back to the top
let row = 0;


function setup() {
  //TI82 screen resoltion is 96x64
  createCanvas(96 * screenScale, 64 * screenScale);
  
  //Use LCD screen colors
  background(backColor);
  stroke(foreColor);
  fill(foreColor);
  
  //Scales the line width with the screen size
  strokeWeight(1 * screenScale + 1);
  
  //My calculator ran about 8 fps with this program
  frameRate(10);
  
  midWidth = width/2;
  
  //Draw the setting sun as the top half of a circle
  noStroke()
  arc(width/2, height/2, min(width,height)/2, min(width,height)/2, PI, TAU);
  stroke(foreColor);
}


function draw() {
  //Blanks out the row we're on first
  stroke(backColor);
  y = (row+32) * screenScale;
  line(0 ,y, width, y);
  
  //Draws a new line
  stroke(foreColor);
  //Make it vertically symmetrical
  rowWidth = random(5, 45) * screenScale
  line( midWidth-rowWidth , y  , midWidth + rowWidth, y );
  
  //Increment the row counter, making sure we only do 32 lines before it loops to 0
  row++;
  row%=32;
}
