var robot
var shipParts
var faultyWires
var bombs

function preload(){
faultyWireImg=loadImage ("assets/Faulty-Wiring.png")
RobotImg=loadImage ("assets/1037553-medium.jpg")
BombImg=loadImage ("assets/R (1).png")
GroundImg=loadImage ("assets/R.png")

}




function setup() {
  createCanvas(800,500);

  ground=createSprite(300,500,1000,50)
  ground.velocityX= -3
  ground.addImage (GroundImg)
  ground.x=ground.width

  robot=createSprite(100,400,80,80)
  robot.addImage (RobotImg)
  robot.scale=0.2

  shipParts = createSprite(300,200,50,40)


  //faultyWires=createSprite(300,50,33,70)
  //faultyWires.addImage (faultyWireImg)
  //faultyWires.scale=0.2

  //bombs=createSprite(300, 50,200,90)
  //bombs.addImage (BombImg)
  //bombs.scale = 0.05
}







function draw() {
  background(50);
  
  if (ground.x<0) {
ground.x=ground.width/2

  }

  drawSprites();

  
}