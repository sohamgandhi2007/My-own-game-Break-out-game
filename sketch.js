var counter=0;
var ball;
var bg,bg2;
var bar;
var enemy1,enemy2,enemy3,enemy4,enemy5,enemy6;
var enemy7,enemy8,enemy9,enemy10,enemy11,enemy12;
var enemy13,enemy14,enemy15,enemy16,enemy17,enemy18;
var enemy19,enemy20,enemy21,enemy22,enemy23,enemy24;
var bgImage,ballImage,bg2Image;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15;
var score;
var gameState="Play";
var lifeOne;
var lifeOneImage,lifeTwoImage;
var timer;

function preload(){
  bgImage=loadImage("images/bg.png")
  ballImage=loadImage("images/ball.png") 
lifeOneImage=loadImage("images/lifeOne.png")
bg2Image=loadImage("images/bg2.jpg")

}

function setup() {
  createCanvas(windowWidth,windowHeight);
  bg=createSprite(600,300,1200,600);
  bg.addImage(bgImage);
  bg.scale=4;
//bg.addImage(bg2Image)

  enemy1=createSprite(width-1260,height-625,100,20)
  enemy1.shapeColor="red"

  enemy2=createSprite(width-1060,height-625,100,20)
  enemy2.shapeColor="red"

  enemy3=createSprite(width-860,height-625,100,20)
  enemy3.shapeColor="red"

  enemy4=createSprite(width-660,height-625,100,20)
  enemy4.shapeColor="red"

  enemy5=createSprite(width-460,height-625,100,20)
  enemy5.shapeColor="red"

  enemy6=createSprite(width-260,height-625,100,20)
  enemy6.shapeColor="red"

  enemy7=createSprite(width-1260,height-565,100,20)
  enemy7.shapeColor="Green"

  enemy8=createSprite(width-1060,height-565,100,20)
  enemy8.shapeColor="Green"

  enemy9=createSprite(width-860,height-565,100,20)
  enemy9.shapeColor="Green"

  enemy10=createSprite(width-660,height-565,100,20)
  enemy10.shapeColor="Green"

  enemy11=createSprite(width-460,height-565,100,20)
  enemy11.shapeColor="Green"

  enemy12=createSprite(width-260,height-565,100,20)
  enemy12.shapeColor="Green"

  enemy13=createSprite(width-1260,height-505,100,20)
  enemy13.shapeColor="yellow"

  enemy14=createSprite(width-1060,height-505,100,20)
  enemy14.shapeColor="yellow"

  enemy15=createSprite(width-860,height-505,100,20)
  enemy15.shapeColor="yellow"

  enemy16=createSprite(width-660,height-505,100,20)
  enemy16.shapeColor="yellow"

  enemy17=createSprite(width-460,height-505,100,20)
  enemy17.shapeColor="yellow"

  enemy18=createSprite(width-260,height-505,100,20)
  enemy18.shapeColor="yellow"

  enemy19=createSprite(width-1260,height-445,100,20)
  enemy19.shapeColor="blue"

  enemy19=createSprite(width-1060,height-445,100,20)
  enemy19.shapeColor="blue"

  enemy20=createSprite(width-860,height-445,100,20)
  enemy20.shapeColor="blue"

  enemy21=createSprite(width-660,height-445,100,20)
  enemy21.shapeColor="blue"

  enemy22=createSprite(width-460,height-445,100,20)
  enemy22.shapeColor="blue"

  enemy23=createSprite(width-260,height-445,100,20)
  enemy23.shapeColor="blue"

  enemy24=createSprite(1100,height-445,100,20)
  enemy24.shapeColor="blue"

box1=createSprite(200,60,30,30)
box1.shapeColor="orange"

box2=createSprite(400,60,30,30)
box2.shapeColor="orange"

box3=createSprite(600,60,30,30)
box3.shapeColor="orange"

box4=createSprite(800,60,30,30)
box4.shapeColor="orange"

box5=createSprite(1000,60,30,30)
box5.shapeColor="orange"

box6=createSprite(200,120,30,30)
box6.shapeColor="orange"

box7=createSprite(400,120,30,30)
box7.shapeColor="orange"

box8=createSprite(600,120,30,30)
box8.shapeColor="orange"

box9=createSprite(800,120,30,30)
box9.shapeColor="orange"

box10=createSprite(1000,120,30,30)
box10.shapeColor="orange"

box11=createSprite(200,180,30,30)
box11.shapeColor="orange"

box12=createSprite(400,180,30,30)
box12.shapeColor="orange"

box13=createSprite(600,180,30,30)
box13.shapeColor="orange"

box14=createSprite(800,180,30,30)
box14.shapeColor="orange"

box15=createSprite(1000,180,30,30)
box15.shapeColor="orange"

bar=createSprite(width-770,height-50,150,20)
bar.shapeColor="black"

 ball=createSprite(width-770,height-70,30,30)
ball.addImage(ballImage)
ball.scale=0.3
ball.setCollider("circle",0,0,30)

score=0
timer=120

lifeOne=createSprite(width-300,height-70,20,20)
lifeOne.addImage(lifeOneImage)
lifeOne.scale=0.3

}

function draw() {
  background(0);  

  edges=createEdgeSprites()
ball.bounceOff(edges[0])
ball.bounceOff(edges[1])
ball.bounceOff(edges[2])
ball.bounceOff(bar)

if(keyDown("space")&&gameState==="Play"){
  ball.velocityX=random(-15.9)
  ball.velocityY=random(-15,-9)
  }
  
  if(ball.isTouching(enemy1)){
score=score+1
ball.velocityY=10
enemy1.remove()
counter=counter+1
}

if(ball.isTouching(enemy2)){
  score=score+1
  ball.velocityY=10
  enemy2.remove()
  counter=counter+1
  }
  
  if(ball.isTouching(enemy3)){
  score=score+1
  ball.velocityY=10
  enemy3.remove()
  counter=counter+1
    }
    
    if(ball.isTouching(enemy4)){
    score=score+1
      ball.velocityY=10
      enemy4.remove()
      counter=counter+1
      }
   
  if(ball.isTouching(enemy5)){
  score=score+1
  ball.velocityY=10
  enemy5.remove()
  counter=counter+1
   }
        
   if(ball.isTouching(enemy6)){
    score=score+1
    ball.velocityY=10
    enemy6.remove()
  counter=counter+1  
  }
    
    if(ball.isTouching(enemy7)){
      score=score+1
      ball.velocityY=10
      enemy7.remove()
    counter=counter+1  
    }
      
      if(ball.isTouching(enemy8)){
        ball.velocityY=10
        score=score+1
        enemy8.remove()
      counter=counter+1  
      }
        
        if(ball.isTouching(enemy9)){
          score=score+1
          ball.velocityY=10
          enemy9.remove()
          counter=counter+1
          }
          
          if(ball.isTouching(enemy10)){
            score=score+1
            ball.velocityY=10
            enemy10.remove()
         counter=counter+1             
          }
            
            if(ball.isTouching(enemy11)){
              score=score+1
              ball.velocityY=10
              enemy11.remove()
              counter=counter+1
              }
              
              if(ball.isTouching(enemy12)){
                ball.velocityY=10
                score=score+1
                enemy12.remove()
                counter=counter+1
                }
                
                if(ball.isTouching(enemy13)){
                  ball.velocityY=10
                  score=score+1
                  enemy13.remove()
                  counter=counter+1
                  }
                  
                  if(ball.isTouching(enemy14)){
                    ball.velocityY=10
                    score=score+1
                    enemy14.remove()
                    counter=counter+1
                    }
                    
                    if(ball.isTouching(enemy15)){
                      ball.velocityY=10
                      score=score+1
                      enemy15.remove()
                      counter=counter+1
                      }
                      
                      if(ball.isTouching(enemy16)){
                        ball.velocityY=10
                        score=score+1
                        enemy16.remove()
                        counter=counter+1
                        }
                        
if(ball.isTouching(enemy17)){
score=score+1
ball.velocityY=10
enemy17.remove()
counter=counter+1
}                                                                                                                                                                    

if(ball.isTouching(enemy18)){
  ball.velocityY=10
  score=score+1
enemy18.remove()
counter=counter+1
}
        
if(ball.isTouching(enemy19)){
  ball.velocityY=10
  score=score+1
  enemy19.remove()
counter=counter+1  
}
  
 if(ball.isTouching(enemy20)){
  ball.velocityY=10
  score=score+1
  enemy20.remove()
counter=counter+1  
}

if(ball.isTouching(enemy21)){
 ball.velocityY=10
  score=score+1
  enemy21.remove()
counter=counter+1
}    
    
if(ball.isTouching(enemy22)){
  score=score+1
  ball.velocityY=10
  enemy22.remove()
counter=counter+1
}    
    
if(ball.isTouching(enemy23)){
  ball.velocityY=10
  score=score+1
  enemy23.remove()
  counter=counter+1
}    

if(ball.isTouching(enemy24)){
  ball.velocityY=10
  score=score+1
  enemy24.remove()
counter=counter+1
}

ball.bounceOff(box1)
ball.bounceOff(box2)
ball.bounceOff(box3)
ball.bounceOff(box4)
ball.bounceOff(box5)
ball.bounceOff(box6)
ball.bounceOff(box7)
ball.bounceOff(box8)
ball.bounceOff(box9)
ball.bounceOff(box10)
ball.bounceOff(box11)
ball.bounceOff(box12)
ball.bounceOff(box13)
ball.bounceOff(box14)
ball.bounceOff(box15)


if(keyDown("left_Arrow")){
  bar.velocityX=-10  
  bar.velocityY=0
  }
  
  if(keyDown("right_Arrow")){
    bar.velocityX=10
  bar.velocityY=0
  }
  
if(ball.y>650){
gameState="End"
a=0
lifeOne.remove()
}

if(frameCount%30===0&&timer>0){
  timer=timer-1
}

if(timer===0){
gameState="End"
}

  drawSprites();
if(gameState==="End"){
  timer=0
textSize(50)
fill("Black")
  text("GameOver",500,300) 
}

fill("Black")
textSize(60)
text(timer,900,600)

if(counter===0){
  textSize(50)
text("Press Space to Start",450,300)
}

if(counter===24){
textSize(50)
fill("Black")
text("YouWin!!!!!!!!",500,300)
}

textSize(50)
fill("Black")
text(score,600,350)
}
