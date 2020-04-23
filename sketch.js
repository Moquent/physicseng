const Eng = Matter.Engine;
const World = Matter.World;
const Body = Matter.Bodies;
var world, body, engine, ground, ball;
function setup() {
createCanvas(800,400);
engine = Eng.create();
world = engine.world;
var option = {
    isStatic:true
}
var ballop = {
    restitution:1
}
ball = Body.circle(100, 100, 30, ballop);
ground = Body.rectangle(400, 380, 800, 40, option);
World.add(world, ground);
World.add(world, ball);
}
 
function draw() {
  background(0,0,0);
  Eng.update(engine);
  rectMode(CENTER);
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 30, 30)
  rect(ground.position.x, ground.position.y, 800, 40);
  
  drawSprites();
}