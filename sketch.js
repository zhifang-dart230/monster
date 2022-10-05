let size = 50;
let xPos = 0;
let yPos = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(232,181,201);
  
  strokeWeight(10);
  stroke(12,12,230,60);
  ellipse(200,100,50,80);
  
  fill(230,207,12);
  rect(200,100,50,100,10);
  line(30,30,350,100);
  
  noStroke();
  fill(255);
  rect(50, 50, 200, 20);
  
  strokeWeight(3);
  stroke(230,207,12);
  ellipse(xPos,yPos,size);
  
  size = size + 1;
  xPos = xPos + 1;
  yPos = yPos + 1;
  
  noFill();
  
  triangle(200, 20, 300, 200, 100, 200);

}