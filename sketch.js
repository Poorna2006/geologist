
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var hammer,ground,stone,rubber
var s1,s2,s3,s4,s5,s6,s7,s8,s9,ir

function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	hammer=new Hammer(10,100,100,20);
	ground=new Ground(600,580,1500,40)
	rubber=new Rubber(900,450,70);
	stone=new Stone(700,320,100,100);
	ir=new Stone(1150,320,100,200);
	s1=new Sand(505,450,10);
	s2=new Sand(510,450,10);
	s3=new Sand(515,450,10);
	s4=new Sand(520,450,10);
	s5=new Sand(525,450,10);
	s6=new Sand(515,445,10);
	s7=new Sand(520,445,10);
	s8=new Sand(525,445,10);
	s9=new Sand(530,445,10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
    rubber.display();
	stone.display();
	hammer.display();
	ir.display();
	ground.display();
	s1.display();
	s2.display();
	s3.display();
	s4.display();
	s5.display();
	s6.display();
    s7.display();
	s8.display();
	s9.display();
	}



