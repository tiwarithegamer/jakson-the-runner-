var path, boy, bomb;
var pathImg, boyImg, bombImg;
var bound1, bound2


function preload() {
  pathImg  = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  bomb = loadImage("bomb.png");
}

function setup() {
createCanvas(400, 400);
  
path = createSprite(200, 200, 100, 100);
path.addImage(pathImg);
path.y = path.height /2;
path.velocityY = 4;

boy = createSprite(200, 350, 40, 40);
boy.addAnimation("sahilRunning",boyImg);
boy.scale = 0.1

bound1 = createSprite(374, 200, 50,400);
bound1.shapeColor = "black";

bound2 = createSprite(27, 200, 50, 400);
bound2.shapeColor = "black";

bomb =createSprite(1100,Math.round(random(50, 250)));

}

function draw() {
background(220);

if(path.y > 400 ){
  path.y = height/2;
}
boy.x = World.mouseX

boy.bounceOff(bound1);
boy.bounceOff(bound2)

drawSprites();

}

