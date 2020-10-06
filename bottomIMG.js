class BottomIMG extends Bottom{
    constructor(x,y,width,height){
        super(1190,height-30,170,20);
        this.image = loadImage("sprites/dustbin1.png");
    }

    display(){
        image(this.image,1083,480,215,200);
        super.display();
    }
}