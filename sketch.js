var grid = 50;
var width = 1366;
var carGroup1,logGroup1,grassGroup;
var grassHeight = 100;
var gameState = "play";
var carAnimation, logAnimation, playerAnimation;
var school;
var grass,road,gron;
var player;
var group;
var playerI,car1I,car2I,log1I,log2I;
var gameState,city;
var PLAY=0;
var WON=2;
var sound;
var pic ,picc;
function preload()
{car1I=loadImage("images/car1.png");
car2I=loadImage("images/car2.png");
log1I=loadImage("images/log1.png");
log2I=loadImage("images/city1.png");
playerI=loadImage("images/play.png");
sound=loadSound("sfx_celebrate.wav");
picc=loadImage("VICORY.png")
}

function setup() {
  createCanvas(displayWidth,700);
  carGroup1 = new Group();
  logGroup1 = new Group();
  grassGroup=new Group();
  group=new Group();
  city=createSprite(width/2.15,980)
  city.addImage(log2I);
  city.scale=1.35
 gameState=PLAY;
 
  
  
  player= new Player(width/2,-height-925);
}
function draw() {
  background("skyblue");
 translate(+85,-(player.spt.y-height/2))
    if(gameState===PLAY){
      player.movement();
      if(player.spt.isTouching(city)){
        gameState=WON;
      }
    }
    if(gameState===WON){
    sound.play();
    pic=createSprite(width/2,height)
    pic.addImage(picc)
    pic.scale=2;
    }
 
  for(var i=0;i<6;i++){
    grass=createSprite(683,height-50-(i*400),width,grassHeight)
   grass.shapeColor="green";
   grassGroup.add(grass)
  
    if(i%2===0){
     road=createSprite(683,height-150-(i*400)-grassHeight,width,300)
     road.shapeColor="black";
     group.add(road)
    }
    if(i%2===1&&i<4){
      gron=createSprite(683,height-150-(i*400)-grassHeight,width,300)
      gron.shapeColor="blue";
      group.add(gron)
    }
  }
  for(var i=0;i<40;i++){
    car=new Car(2);
    carGroup1.add(car.spt);
      
  }
  for(var i=0;i<40;i++){
    log=new Log(8);
    logGroup1.add(log.spt)
  }
  
    carGroup1.setDepthEach(0);
    logGroup1.setDepthEach(0);
    grassGroup.setDepthEach(0);
    group.setDepthEach(0);
  
  
  if(carGroup1.isTouching(player.spt)){
    player.spt.x=width/2;
    player.spt.y=-height-925;
  }
  if(logGroup1.isTouching(player.spt)){
    player.spt.x=player.spt.x-0.01;
  }
  else if((player.spt.y>height-1550&&player.spt.y<height-1300)||(player.spt.y>height-850&&player.spt.y<height-500)||player.spt.y>height||player.spt.x<0||player.spt.x>width)
  {player.spt.x=width/2;
    player.spt.y=-height-925;}
  
  
  drawSprites();
}

 
  


