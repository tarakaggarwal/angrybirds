const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var pig1;
var log1;
var box3;
var box4;
var log2;
var pig2;
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    box1 = new Box(900,300);
    box2 = new Box(700,300);
    ground = new Ground(600,height,1200,20)
    pig1 = new pig(800,300);
    log1= new log  (800,260,300,PI/2);
    box3 = new Box (900,230);
    box4 = new Box (700,230);
    pig2 = new pig (800,230);
    log2 = new log (800,200,300,PI/2);
box5 = new Box(800,160);
log3 = new log(760,120,150,PI/7);
log4 = new log(840,120,150,-PI/7);
}
function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x); 
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    log3.display();
    log4.display();
    box5.display();
}