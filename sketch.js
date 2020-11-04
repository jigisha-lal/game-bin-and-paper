
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,boxleftSpriteball1;

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();

	world = engine.world;

	ground = new Ground(800,670,width,20);

	boxPosition=1000; 
	boxY=610;

	boxleftSprite=createSprite(boxPosition, boxY, 20,100);
	boxleftSprite.shapeColor=color(255,0,0);

	boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
	World.add(world, boxLeftBody);

	boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
	boxBase.shapeColor=color(255,0,0);

	boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
	World.add(world, boxBottomBody);

	boxrightSprite=createSprite(boxPosition+200 , boxY, 20,100);
	boxrightSprite.shapeColor=color(255,0,0);

	boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
	World.add(world, boxRightBody);
	 ball1=new Ball(200,450,40)
	Engine.run(engine);
  
}


function draw() {
 
  background(0);
  Engine.update(engine);

  ground.display();
  
  ball1.display();

 
  drawSprites();
 
}
function keyPressed(){
  if(keyCode === UP_ARROW){

      Matter.Body.applyForce(ball1.body,ball1.body.position,{x:85,y:-85});
  }
}


