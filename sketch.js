var car,wall;
var speed,weight;




function setup() {
  createCanvas(1600,800);
  createSprite(400, 200, 50, 50);
  speed=random(55,90);
  weight=random(1500,400);
  car=createSprite(50,200,50,20);
  car.velocityX=speed;
  wall=createSprite(1500,200,60,height/2);
  wall.shapeColor=color(80,80,80);
  

}

function draw() {
  background(255,255,255);  
 
  drawSprites();
}