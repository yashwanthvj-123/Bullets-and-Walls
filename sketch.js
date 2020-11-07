
var bullet,wall;

var speed,weight,thickness;

function setup() {

  createCanvas(1278,400);

  speed=random(223,321);

  weight=random(30,52);

  thickness=random(22,83);

  bullet=createSprite(50, 200, 50, 20);
  bullet.velocityX=speed;
  bullet.shapeColor="white";

  wall=createSprite(1190,200,thickness,height/2);
  wall.shapeColor= color(80,80,80);
  
}

function draw() {

  background("black");  

  if (collision (bullet,wall)) {

    bullet.velocityX=0;

    wall.velocityX=0;

    var damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness); 

    if (damage>10) {
      wall.shapeColor="green";
    }

    if (damage<10) {
      wall.shapeColor="red";
    }

  }

  drawSprites ();

}

function collision (object1,object2) {

   bulletRightEdge=object1.x + object1.width 
   wallLeftEdge=object2.x;

   if(bulletRightEdge>=wallLeftEdge) {
    return true; 
   }

   return false;

}