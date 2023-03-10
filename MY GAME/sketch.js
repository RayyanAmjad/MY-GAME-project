var sand,sandbg;
var cowboy, cowboyimg
var zombie, zombieimg





function preload(){
    sand = loadImage("IMAGES/SAND.jpg")
    cowboyimg = loadImage("IMAGES/COWBOY.png")
    zombieimg = loadImage("IMAGES/zombies1-removebg-preview.png")

}

function setup() {
  createCanvas(1000,1000);

  sandbg = createSprite(200,200,5000,1000);
  sandbg.addImage(sand);
  sandbg.scale = 3;

  cowboy = createSprite(100,500,100,100);
  cowboy.addImage(cowboyimg);
  cowboy.scale = 0.3

  zombie = createSprite(500,200,100,100);
  zombie.addImage(zombieimg);
  zombie.scale = 0.9
  

  


  

  
 
 
  
  
}

function draw() {
  
  background(255);

  if(keyDown(UP_ARROW)){
    cowboy.y = cowboy.y -10;
  }

  if(keyDown(DOWN_ARROW)){
    cowboy.y = cowboy.y +10;
  }
  
  drawSprites();
}

