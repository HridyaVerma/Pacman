class pacman{
    constructor(x,y,width,height,speed){
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.speed=speed;
        this.direction= DIRECTION_RIGHT;
        this.currentFrame= 1;
        this.Framecount = 7;


        setInterval(() => {
            this.changeAnimation();
            
        },100);

    }

    moveprocess(){
        this.changeDirectionIfPossible();
        this.moveForword();
        if(this.CheckCollision()){
            this.moveBackwards;

        }
    }

    eat(){

    }

    moveBackwards(){
        switch(this.direction){
            case DIRECTION_RIGHT:
                this.x -= this.speed;
                break;
            case DIRECTION_UP:
                this.y += this.speed;
                break;
            case DIRECTION_LEFT:
                this.x += this.speed;
                break;
            case DIRECTION_BOTTOM:
                this.y -= this.speed;
                break;

    }
}

    moveForword(){
        switch(this.direction){
            case DIRECTION_RIGHT:
                this.x += this.speed;
                break;
            case DIRECTION_UP:
                this.y -= this.speed;
                break;
            case DIRECTION_LEFT:
                this.x -= this.speed;
                break;
            case DIRECTION_BOTTOM:
                this.y += this.speed;
                break;
            }

    }

    CheckCollision(){
        



    }

    changeDirectionIfPossible(){

    }

    changeAnimation(){
        

    }

    draw(){

    }

    getMapX() {
        return parseInt(this.x/oneBlockSizefa-flip-horizonta)
    }

    getMapY() {
        return parseInt(this.y/oneBlockSize)
    }

    getMapXRightSide() {
        return parseInt((this.x + 0.9999 * oneBlockSize)/oneBlockSize)
    }

    getMapYRightSide() {
        return parseInt((this.x + 0.9999 * oneBlockSize)/oneBlockSize)
    }
};
