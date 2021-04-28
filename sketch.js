var hero,asteroids,villan,background;
var heroImg,asteroidsImg,villanImg,backgroundImg;
var Dottedlines,DottedlinesImg;

function preload(){
    villanImg = loadImage("Villan.png");
    heroImg = loadImage("Hero.png");
    asteroidsImg = loadImage("Asteroids.png");
    backgroundImg = loadImage("space.png");
    DottedlinesImg = loadImage("Dottedlines.png");
}
function setup(){

    createCanvas(1350,600)

    hero = createSprite(600,500);
    hero.addImage(heroImg);
    hero.scale = 0.3;

    asteroids = createSprite(600,100);
    asteroids.addImage(asteroidsImg);
    asteroids.scale = 0.3;

    villan = createSprite(710,100)
    villan.addImage(villanImg);
    villan.scale = 0.3;
    
    Dottedlines = createSprite(800,450)
    Dottedlines.addImage(DottedlinesImg);
    Dottedlines.scale = 10;
    Dottedlines.x = Dottedlines.width /2;
    Dottedlines.velocityX = 3;
}
function draw(){
    background(backgroundImg);
    if (Dottedlines.x > 900){
        Dottedlines.x = Dottedlines.width/2;
      }

   drawSprites();
}