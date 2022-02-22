var nimbus,nimbusImg
var backgroundImg
var canvas;

var enemy1,enemy1Img
var enemy2,enemy2Img
var enemy3,enemy3Img
var enemy4,enemy4Img
var enemy5,enemy5Img
var enemy6,enemy6Img

var dragonballs,dragonballsImg


var gameState=0

function preload(){
  nimbusImg=loadAnimation("nimbus.png","nimbus_2.png","nimbus_3.png","nimbus_4.png")

  backgroundImg=loadImage("DBZ.png")
  enemy1Img=loadImage("enemy 1.png")
  enemy2Img=loadImage("enemy 2.png")
  enemy3Img=loadImage("enemy 3.png")
  enemy4Img=loadImage("enemy4.png")
  enemy5Img=loadImage("enemy5.png")
  enemy6Img=loadImage("enemy6.png")

  dragonballsImg=loadImage("Dragonballs.png")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight)
  nimbus=createSprite(50,300)
  nimbus.addAnimation("nimbus",nimbusImg)
  nimbus.scale=0.5

  enemy1=createSprite(1000,50)
  enemy1.addImage("enemy1",enemy1Img)
  enemy1.scale=0.5
  
  enemy2=createSprite(1000,150)
  enemy2.addImage("enemy2",enemy2Img)
  enemy2.scale=0.3

  enemy3=createSprite(1000,300)
  enemy3.addImage("enemy3",enemy3Img)
  enemy3.scale=0.3
  
  enemy4=createSprite(1000,450)
  enemy4.addImage("enemy4",enemy4Img)
  enemy4.scale=0.15

  enemy5=createSprite(1000,550)
  enemy5.addImage("enemy5",enemy5Img)
  enemy5.scale=0.3

  enemy6=createSprite(1200,450)
  enemy6.addImage("enemy6",enemy6Img)
  enemy6.scale=0.5

  dragonballs=createSprite(1200,450)
  dragonballs.addImage("dragonballs",dragonballsImg)
  dragonballs.scale=0.1

}

function draw() {
  background(backgroundImg);
  if (keyDown(UP_ARROW)) {
    nimbus.velocityY = -10
  } else {
    nimbus.velocityY = 0
  }

  if (keyDown(DOWN_ARROW)) {
    nimbus.velocityY = 10
  }

  if (nimbus.isTouching(enemy1) || nimbus.isTouching(enemy2) || nimbus.isTouching(enemy3) || nimbus.isTouching(enemy4) ||nimbus.isTouching(enemy5) || nimbus.isTouching(enemy6)) {
    nimbus.velocityX = 0
    nimbus.velocityY = 0
  }
  
  drawSprites();
}

