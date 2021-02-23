var hammer,stone,rubber ,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;


	hammer=new Hammer(300,640,100,20)
	
	stone=new Stone(300,750,50,70)
	
	rubber=new Rubber(450,750,40,40)
	
	ground=Bodies.rectangle(400,790,1000000,7)

	
 
  Engine.run(engine);
}


function draw() {
 
	
  background(0);
  rectMode(CENTER);
  Engine.update(engine)
  hammer.y=mouseY
  hammer.x=mouseX
  drawSprites();
 
rect(400,790,1000000,7)
  hammer.display()  
  stone.display()
  rubber.display()

}



