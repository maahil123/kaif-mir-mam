var car, wall;
var speed , weight;

function setup() {
  createCanvas(800,400);
  createSprite(790, 200, 10, 60);

speed=random(55,90);
weight=random(400,1500);

car = createSprite(50,200,20,20);
wall = createSprite(1500,200,60,height/2);

car.velocityX=speed;

createSprite(790,400,10,60);

car2 = createSprite(50,400,20,20);
wall2 = createSprite(1500,200,60,height/2):
car.velocityX=speed;
}

function draw() {
  background(255,255,255);  
  drawSprites();
}