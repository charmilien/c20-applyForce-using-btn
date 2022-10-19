// name spacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world, ball;
var ground,left,right,top_wall;
var btn1,btn2;

function setup() {
  createCanvas(400, 400);
  engine = Engine.create();
  world = engine.world;
  var ball_option = {
    restitution: 0.5,
  };
  ball = Bodies.circle(200, 200, 17, ball_option);
  World.add(world, ball);
  console.log(ball);

  ground = new Ground(200,390,400,20)
  top_wall = new Ground(200,10,400,20)
  left = new Ground(10,200,20,400)
  right = new Ground(390,200,20,400)

 btn1=createImg();
 btn1.position(100,100)
 btn1.size(50,50)
 btn1.mouseClicked(hForce)
 btn2=createImg();
 btn2.size(50,50)
 btn2.position(200,100)
 btn2.mouseClicked(vForce)

}

function draw() {
  background(0);
  Engine.update(engine);
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 17);

  ground.show()
  top_wall.show()
  left.show()
  right.show()

  

}

function vForce(){
  Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
}
function hForce(){
  Body.applyForce(ball,ball.position,{x:0.05,y:0})
}