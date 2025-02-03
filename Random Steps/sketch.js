//set defaults
//left side of screen
let x = 0;
//half height
let y = 32;

//Set LCD screen colors
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
  
  frameRate(40);
}


function draw() {
  //random step up, down, or stay the same
  y += random(2)-1
  
  //draws the point accounting for screen scale
  point(x * screenScale, y * screenScale);
  
  //increment x
  x+=1;
  if(x>96){
    //comment the next line out to stop restarting at center
    y = 32; 
    x = 0;
  }
}
