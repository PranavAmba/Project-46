var formObj,question;
var posX = 400
var posY = 300
var answer;
var userAns;
var backGround,playerImg,treeImg,cutterImg,tree1,tree2,tree3;
var player,tree;
var chance
var firstQuestion
var cuttingSound,laughSound;

function preload() {
  backGround = loadImage("sprites/bg.png");
  
  cuttingSound = loadSound("sounds/cutting.mp3")
  laughSound = loadSound("sounds/laugh.mp3")
}

function setup() {
  createCanvas(displayWidth-20,displayHeight-30);
  formObj = new Form();
  formObj.display();
  chance = 4;
  
  firstQuestion=0

  player = new Player();
  tree = new Tree();
}

function draw() {
 background(backGround); 
 // formObj.generateQuestions(); 
  spawnQuestions();
  player.display();
  tree.display();
 
  textSize(50);
  fill(255)
  text(question,posX,posY);
  text(chance,200,200)
  posY = posY + 5;
 userAns = formObj.ansInput.value();
 console.log(userAns)
 if(userAns==answer){
   posY = displayHeight+1;
 }

}
function spawnQuestions() {
 if(posY>displayHeight){
   if (userAns!=answer&&firstQuestion==1) {
     laughSound.play();                       
     chance = chance-1;
   }
   firstQuestion = 1
formObj.generateQuestions();
 } 
 
if (chance==0) {
  fill(255)
  textSize(30)
  text("Game Over",100,200)
}
}