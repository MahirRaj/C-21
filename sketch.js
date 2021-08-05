const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var ground, top_wall,left_wall,right_Wall;
var ball;
var btn1,btn2;

function hForce(){
    Matter.Body.applyForce(ball,{x:0 , y:0},{x : 0.05 , y : 0});
}

function vForce(){
  Matter.Body.applyForce(ball,{x:0 , y:0},{x : 0 , y : -0.05});
}

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(200,390,400,20);
  top_wall = new Ground(200,10,400,20);
  left_wall = new Ground(10,200,20,400);
  right_wall = new Ground(390,200,20,400);
  
  var options={
    restitution:0.7,
    frictionAir:0.1,
    friction:0.5
  }
  ball = Bodies.circle(200,200,15,options);
  World.add(world,ball);
  
  btn1 = createImg("right.png");
  btn1.position(220,30);
  btn1.size(50,50);
  btn1.mouseClicked(hForce); //hForce ===> call back function
  //function that gets called be another function as a parameter
  //for a callback function, we dont use() 

  btn2 = createImg("up.png");
  btn2.position(100,30);
  btn2.size(50,50);

  btn2.mouseClicked(vForce);



  rectMode(CENTER);
  ellipseMode(RADIUS);
  
}

function draw() 
{
  background(220);
  Engine.update(engine);

  ground.display();
  top_wall.display();
  left_wall.display();
  right_wall.display();

  ellipse(ball.position.x,ball.position.y,15,15);
}

