class Tree{
    constructor(){
  this.treeImg = loadImage("sprites/tree.png");
  this.tree1 = loadImage("sprites/3.4.png");
  this.tree2 = loadImage("sprites/tree1.png");
  this.tree3 = loadImage("sprites/tree2.png");
    }
    display(){
        if(chance==4){
         image(this.treeImg,1000,800)
        }
        if(chance==3){
        image(this.tree1,1000,800)
        }
        if(chance==2){
        image(this.tree2,1000,800)
        }
        if(chance==1){
        image(this.tree3,1000,800)
        }
    }
}