var bullet,wall,thickness;
var speed,weight;

function setup() {
  createCanvas(1200,400);
 // createSprite(400, 200, 50, 50);
speed=random(223,231);
weight=random(30,52);
thickness=random(22,83);

bullet=createSprite(50,200,50,20);
bullet.velocityX=speed;
bullet.shapeColor=color(255);

wall=createSprite(1100,200,thickness,height/2);
wall.shapeColor=color(80,80,80);

}


function draw() {
  background(0);  
  
  if(hasCollided(bullet,wall)) {
    bullet.velocityX=0;
    var damage=0.5 * speed * speed/(thickness *thickness *thickness);

    if(damage>10) {
      wall.shapeColor=color(255,0,0);

    }


    if(damage<10) {
      wall.shapeColor=color(0,255,0);
    }
  }
  
 
  drawSprites();
}

function hasCollided(bullet,wall) {
  bulletRightEdge=bullet.x + bullet.width;
  wallLeftEdge=wall.x ;
  if(bulletRightEdge>=wallLeftEdge)
    {
      return true 
    }
    return false;
  
  
}