
var gameState = 0;
var canvas;
var girl1,girl1Img,girl2,girl2Img;
var boy1,boy1Img,boy2,boy2Img;

var bushGroup, bushImage;
var treeGroup,treeImage;
var rockGroup,rockImage;

var coinGroup,coinImage;


var ground,backgroundImg;

var opt=0;

function preload(){
    girl1Img=loadImage("sprites/girl2.png");
    girl2Img=loadImage("sprites/girl.jpg");
    boy1Img=loadImage("sprites/boy2.png");
    boy2Img=loadImage("sprites/boy.png");
    backgroundImg=loadImage("sprites/mygamebg1.jpg");
    bushImage=loadImage("sprites/bush.png");
    treeImage=loadImage("sprites/obstacle2.jpg");
    rockImage=loadImage("sprites/obstacle.png");
    
    coinImage=loadImage("sprites/coin.jpg");
    startImg=loadImage("sprites/bg3.jpg");
}
function setup(){
    canvas = createCanvas(1200,700)
    ground=createSprite(500,400);
    ground.visible=false;
    ground.addImage(backgroundImg);
    ground.scale=2;
    ground.y=ground.height/2;
    girl1=createSprite(400,400);
    girl1.addImage(girl1Img);
    girl1.scale=1.5;
    boy1=createSprite(800,400);
    boy1.addImage(boy1Img);
    girl2=createSprite(500,400);
    girl2.addImage(girl2Img);
    girl2.scale=1.5;
    girl2.visible=false;
    boy2=createSprite(500,600);
    boy2.addImage(boy2Img);
    boy2.scale=0.3;
    boy2.visible=false;
treeGroup=new Group();
coinGroup=new Group();
bushGroup=new Group();
rockGroup=new Group();

}
function draw(){
 if(gameState===0){
    background("green");
    textSize(20);
    fill("brown");
     text("CHOOSE ANY ONE TO START",200,20);
     boy1.visible=true;
     girl1.visible=true;
  }
  
     
   //text("Score: "+ score, 500,50);

    /*if (ground.y<250){
        ground.y = ground.height/2;
      }*/
      if(mousePressedOver(boy1)){
        opt=1;
        gameState=1
        background(backgroundImg);
        boy1.visible = false;
        girl1.visible=false;
        
        
        //ground.scale=2;
        /*if (ground.y<380){
          console.log(ground.y)
          ground.y=400;
        }*/
        

      }
      if(mousePressedOver(girl1)){
        opt = 2;
        gameState=2;
        //background(backgroundImg);
        girl1.visible = false;
        boy1.visible=false
        girl2.visible = true;

      }
      if(opt===1&&gameState===1){
        boy2.visible = true;
        ground.visible=true;
        ground.velocityY=-1;
        if(ground.y<=200){
          ground.y=ground.height/2;

        }
        //console.log(ground.y);
         boyGame();
           
      }
      if(opt===2&&gameState===2){
        girl2.visible = true;
        ground.visible=true;
        ground.velocityY=-1;
        if(ground.y<=200){
          ground.y=ground.height/2;

        }
        //console.log(ground.y);
         girlGame();
           
      }
      
    drawSprites()
}
function boyGame(){
  console.log("boy")
  spwanTrees();
  spwanBush();
  spwanCoin();
  spwanRock();
  
  if(keyDown("right")){
    boy2.x=boy2.x+4

  }
  if(keyDown("left")){
    boy2.x=boy2.x-4
  }
}
function girlGame(){
  spwanTrees();
  spwanBush();
  spwanCoin();
  spwanRock();
  
  if(keyDown("right")){
    girl2.x=girl2.x+4

  }
  if(keyDown("left")){
    girl2.x=girl2.x-4
  }
}
function spwanTrees(){
    if (frameCount % 120 === 0) {
        var tree = createSprite(600,600,50,50);
         //tree.y = Math.round(random(380,395));
        tree.addImage(treeImage);
        tree.scale = 0.5;
        
        tree.velocityY = -3;
        
         //assign lifetime to the variable
        tree.lifetime = 200;
        
        //adjust the depth
        tree.depth = boy2.depth;
        boy2.depth = boy2.depth + 1;
        
        //add each cloud to the group
        //treeGroup.add(tree);
      }
}
function spwanBush(){
if (frameCount % 180 === 0) {
        var bush = createSprite(300,600,40,10);
        //bush.y = Math.round(random(80,120));
        bush.addImage(bushImage);
        bush.scale = 0.5;
        bush.velocityY= -5;
        
         //assign lifetime to the variable
        bush.lifetime = 200;
        
        //add each cloud to the group
        bushGroup.add(bush);
      }
}
function spwanRock(){
    if (frameCount % 90 === 0) {
        var rock = createSprite(600,500,40,10);
        //rock.y = Math.round(random(80,120));
        rock.addImage(rockImage);
        rock.scale = 0.3;
        rock.velocityY = -3;
        
         //assign lifetime to the variable
        rock.lifetime = 200;
        
        //adjust the depth
        //rock.depth = boy2.depth;
        //boy2.depth = boy2.depth + 1;
        
        //add each cloud to the group
        rockGroup.add(rock);
      }
}
function spwanCoin(){
    if (frameCount % 300 === 0) {
        var coin = createSprite(600,600,40,10);
        //coin.y = Math.round(random(80,120));
        coin.addImage(coinImage);
        coin.scale = 0.1;
        coin.velocityY = -4;
        
         //assign lifetime to the variable
        coin.lifetime = 200;
        
        //adjust the depth
        coin.depth = boy2.depth;
        boy2.depth = boy2.depth + 1;
        
        //add each cloud to the group
        coinGroup.add(coin);
      }
}
