const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var  ground;
var  circle;
var  leftrect,centrerect,rightrect;

function preload(){
	dustbinImg=loadImage("greendustbin.png");
}
function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	leftrect= new Box(480,575,20,100);
	centrerect= new Box(560,635,180,20);
	rightrect= new Box(640,575,20,100);
    circle = new Paper (120,156,50);

	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background('yellow');
  push ()
  fill ('grey')
  rect(ground.position.x,ground.position.y,width,10)
  pop ()
  rightrect.display();
  centrerect.display();
  leftrect.display();
  circle.display();
  image(dustbinImg,460,500,200,150)
  
}


function keyPressed() {
	if (keyCode===UP_ARROW) {
	   Matter.Body.applyForce(circle.body,circle.body.position,{x:30,y:-30})
	}
		 }
