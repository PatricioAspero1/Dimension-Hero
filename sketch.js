const World= Matter.World
const Engine= Matter.Engine
const Bodies= Matter.Bodies
var background,backgroundImg
var engine,world
var Hero,HeroImg

function preload(){
backgroundImg=loadImage("Img/Forest background.png");
HeroImg=loadImage("Img/Pixel_Knight.jpg");
}

function setup() {
  createCanvas(800,300);
  engine=Engine.create();
  world=engine.world
  Hero=createSprite(50,279,50,50)
  Hero.addImage("Hero",HeroImg);
  Hero.scale=0.2;
}

function draw() {
  background(backgroundImg); 
   
  drawSprites();
}

