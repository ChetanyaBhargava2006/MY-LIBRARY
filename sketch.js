var movrect;
var fixrect;
var o1;
var o2;

function setup() {
 createCanvas(1200,800);
 fixrect = createSprite(200, 200, 50, 50);
 movrect = createSprite(600, 400, 50, 50);
 o1 = createSprite(400,200,50,50);
 o2 = createSprite(700,200,50,50);

 fixrect.shapeColor = "green";
 movrect.shapeColor = "green";
 o1.shapeColor = "green";
 o2.shapeColor = "green";

fixrect.debug = true;
movrect.debug = true;
}


function draw() {
  background(255,255,255); 
  movrect.x = World.mouseX;
  movrect.y = World.mouseY;
  
 if(isTouching(o1,movrect)){
  movrect.shapeColor = "red";
  fixrect.shapeColor = "red";
}
else{
  fixrect.shapeColor = "green";
  movrect.shapeColor = "green";
}

if(isTouching(o2,movrect)){
  movrect.shapeColor = "blue";
  fixrect.shapeColor = "blue";
}
else{
  fixrect.shapeColor = "green";
  movrect.shapeColor = "green";
}

  drawSprites();
}
