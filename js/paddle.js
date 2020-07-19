class Paddle{
    constructor(){
        this.width = 110;
        this.height = 20;
        this.color = "blue";
        this.dx = 0;
        this.maxSpeed = 10;
        this.position = {
            x: SCREEN_WIDTH/2 - this.width/2,
            y: SCREEN_HEIGHT - this.height - 10,
        }
    }

    moveLeft(){
        this.dx =  -this.maxSpeed;
    }

    moveRight(){
        this.dx = this.maxSpeed;
    }

    stop(){
        this.dx = 0;
    }

    draw(ctx){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.position.x,this.position.y,this.width,this.height);
        ctx.fillStyle = "black";
        ctx.fillRect(this.position.x,this.position.y,25,this.height);
        ctx.fillRect(this.width + this.position.x - 25,this.position.y,25,this.height);

    }

    update(dt){
        let newPos = this.position.x + this.dx;
        
        if(newPos < 0)
            newPos = 0;
        else if(newPos + this.width > SCREEN_WIDTH)    
            newPos = SCREEN_WIDTH - this.width;

        this.position.x = newPos;

    }
}