var fixedRect, movingRect;
var ob1,ob2,ob3,ob4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
 
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
 
ob1=createSprite(100,100,50,50);
ob2=createSprite(200,100,50,50);
ob3=createSprite(300,100,50,50);
ob4=createSprite(400,100,50,50);
ob1.shapeColor="green";
ob2.shapeColor="green";


ob3.shapeColor="green";
ob4.shapeColor="green";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if(ditect(movingRect, ob3)){
    movingRect.shapeColor = "blue";
    ob3.shapeColor = "blue";
  }
  else {
    movingRect.shapeColor = "green";
    ob3.shapeColor = "green";
  }
  drawSprites();
}

