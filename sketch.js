
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1
var ground1,groundSprite;
var dustbin,dustbin2,dustbin3,dustbin4;

function preload()
{
	
}

function setup() {
	var canvas= createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paper1 = new Paper(200,100,25);
	dustbin = new Dustbin(1100,height-110,20,170);
	dustbin2 = new Bottom(1190,height-30,170,20);
	dustbin3 = new Dustbin(1280,height-110,20,170);
	dustbin4 = new BottomIMG();

	





	

	//create Ground

	ground1 = new Ground(800,height,width,30);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(240);

  paper1.display();

  dustbin.display();
  dustbin3.display();
  dustbin2.display();
  dustbin4.display();
  ground1.display();
  
  
  
  
  drawSprites();
 
}


function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:140,y:-140});
	}
}



