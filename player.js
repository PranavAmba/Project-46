class Player{
    constructor(){
    this.playerImg = loadImage("sprites/player.png");
    this.cutterImg = loadImage("sprites/treecutter.png");
    }
    display(){
    imageMode(CENTER)
    image(this.playerImg,300,400)
    image(this.cutterImg,1500,400)
    }
}