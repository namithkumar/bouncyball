var ball1, ball2, ball3, ball4, line1; 
var ball1score = 0, ball2score = 0, ball3score = 0, ball4score = 0;
var SpaceEntered = 0, UPArrowEnterted = 0, UKeyEntered = 0, RightArrowEntered = 0;
var ball1Img, ball2Img, ball3Img, ball4Img;

function preload()
{
  ball1Img = loadImage("ball1.png");
  ball2Img = loadImage("ball2.png");
  ball3Img = loadImage("ball3.png");
  ball4Img = loadImage("ball4.png");
}

function setup() 
{
  createCanvas(400, 400);
  
  ball1 = createSprite(30,350,20,20);
  ball1.scale = 0.5;
  ball2 = createSprite(100, 350, 25,25);
  ball2.scale = 0.55;
  ball3 = createSprite(190, 345,30,30);
  ball3.scale = 0.65;
  ball4 = createSprite(280, 340,40,40);
  ball4.scale = 0.90;
  
  ball1.addImage("Tmpball1",ball1Img);
  ball2.addImage("Tmpball2",ball2Img);
  ball3.addImage("Tmpball3",ball3Img);
  ball4.addImage("Tmpball4",ball4Img);
  
  line1 = createSprite(1,399,800,1);
  
  ball1.bounciness= 0;
  ball2.bounciness= 0;
  ball3.bounciness= 0;
  ball4.bounciness= 0;

  ball1.velocityY= 0;
  ball2.velocityY= 0;
  ball3.velocityY= 0;
  ball4.velocityY= 0;
}

function draw() 
{
  background(220);
 
  if (keyDown("space"))
  {
    ball1.bounciness= 1;
    ball1.velocityY = -4;
    SpaceEntered = 1;
    ball1score = 0;
  }
  
  if (keyDown("UP_ARROW")) 
  {
    ball2.bounciness= 1;
    ball2.velocityY = -5;
    UPArrowEnterted = 1;
    ball2score = 0;
  }
  
  if (keyDown("u")) 
  {
    ball3.bounciness= 1;
    ball3.velocityY = -6;
    UKeyEntered = 1;
    ball3score = 0;
  }

  if (keyDown("RIGHT_ARROW")) 
  {
    ball4.bounciness= 1;
    ball4.velocityY = -2;
    RightArrowEntered = 1;
    ball4score = 0;
  }
  
  ball1.velocityY = ball1.velocityY+0.3;
  ball2.velocityY = ball2.velocityY+0.3;
  ball3.velocityY = ball3.velocityY+0.3;
  ball4.velocityY = ball4.velocityY+0.3;
   
  text(ball1score,25,336);
  text(ball2score,97,335);
  text(ball3score,185,325);
  text(ball4score,275,297);
  
  if (SpaceEntered == 1)
  {
    if (ball1.bounceOff(line1)) 
    {
      ball1score = ball1score+1;
    }
  }
  
  if ( UPArrowEnterted == 1)
  {
    if (ball2.bounceOff(line1) ) 
    {
      ball2score = ball2score+1;
    }
  }
  
  if ( UKeyEntered == 1)
  {
    if (ball3.bounceOff(line1)) 
    {
      ball3score = ball3score+1;
    }
  }
  
  if ( RightArrowEntered == 1)
  {
    if (ball4.bounceOff(line1)) 
    {
      ball4score = ball4score+1;
    }
  }

  createEdgeSprites();

  ball1.bounceOff(line1);
  ball2.bounceOff(line1);
  ball3.bounceOff(line1);
  ball4.bounceOff(line1);
  
  drawSprites();
}
