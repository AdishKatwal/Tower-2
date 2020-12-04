const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var ground;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16;
var rope;
var ball;
var platform1;
function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

  ground = new Ground(600,590,1200,20);
  platform1 = new Ground(800,500,357,10);
  //level one
  box1 = new Box(650,499,50,50);
  box2 = new Box(701,499,50,50);
  box3 = new Box(751,499,50,50);
  box4 = new Box(801,499,50,50);
  box5 = new Box(851,499,50,50);
  box6 = new Box(901,499,50,50);
  box7 = new Box(951,499,50,50);
  //level 2
  box8 = new Box(701,440,50,50);
  box9 = new Box(751,440,50,50);
  box10 = new Box(801,440,50,50);
  box11 = new Box(851,440,50,50);
  box12 = new Box(901,440,50,50);
  //level 3
  box13 = new Box(751,390,50,50);
  box14 = new Box(801,390,50,50);
  box15 = new Box(851,390,50,50);
  //level 4
  box16 = new Box(800,340,50,50);

  //ropes
  ball = new Ball(100,300,30);
  rope = new Rope(ball.body,{x:250, y:300});
}

function draw(){
    background("black");
    Engine.update(engine);
platform1.display();
ground.display();
//level 1
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
//level 2
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
//level 3
box13.display();
box14.display();
box15.display();
//level 4
box16.display();
ball.display();
rope.display();

//text
fill("white");
text("Press Space To Bring The Polygon Back",400,100);
}
function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x: mouseX,y: mouseY});

}
function mouseReleased(){
  rope.fly();
}
function keyPressed(){
  if(keyCode === 32){
      rope.attached(ball.body);
  }
}