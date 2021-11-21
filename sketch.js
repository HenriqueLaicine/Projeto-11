var runner;
var street;
var downEdge;
var upEdge;
var leftEdge;
var rightEdge;

function preload(){
  runningImg = loadAnimation("Runner-1.png","Runner-2.png");
  pathImg = loadImage("path.png");
}

function setup(){
  createCanvas(400,400);

  runner = createSprite(200,100,50,50);
  runner.addAnimation("running",runningImg);

  runner.scale = 0.07;

  street = createSprite(200,200,50,50);
  street.addImage("path",pathImg);

  runner.depth = street.depth;
  runner.depth = runner.depth+2;

  downEdge = createSprite(200,410,400,1);
  upEdge = createSprite(200,-10,400,1);
  leftEdge = createSprite(55,200,1,400);
  rightEdge = createSprite(355,200,1,400);
}

function draw() {
  background(0);

  if(keyDown(LEFT_ARROW)){
    runner.x = runner.x-5;
  }

  if(keyDown(RIGHT_ARROW)){
    runner.x = runner.x+5;
  }

  if(keyDown(UP_ARROW)){
    runner.y = runner.y-5;
  }

  if(keyDown(DOWN_ARROW)){
    runner.y = runner.y+5;
  }

  runner.collide(downEdge);
  runner.collide(upEdge);
  runner.collide(leftEdge);
  runner.collide(rightEdge);

  drawSprites();
}