var garden,rabbit;
var gardenImg,rabbitImg;
var Apples_img
var OrangeLeavesImg


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  Apples_img= loadImage("apple.png")
  OrangeLeavesImg= loadImage("orangeLeaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  rabbit.x=World.mouseX;
  spawnApples();
  spawnOrange_leaves();
  drawSprites();
}
  function spawnApples(){
   
        var Apples= Math.round(random(1,2));
    if (frameCount % 80 == 0) {
      if (Apples == 1){
        
      
    

    Apples = createSprite(random(50,350), 40 , 10 , 10);
    Apples.velocityY= +1
    Apples.addImage(Apples_img)
    console.log(frameCount)
    Apples.scale= 0.1
    }
   }
   }

   function spawnOrange_leaves(){
     var Orange_Leaves= Math.round(random(1,2));
     if (frameCount % 80 == 0){
       if (Orange_Leaves == 1){

        Orange_Leaves = createSprite(random(50,350), 40 , 10 , 10);
        Orange_Leaves.velocityY= +1
         Orange_Leaves.addImage(OrangeLeavesImg)
         console.log(frameCount)
         Orange_Leaves.scale= 0.1
       }
     }
   }