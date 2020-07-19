class Ball{
    constructor(paddle){
        this.radius = 8;
        this.position = {x:500,y:200};
        this.color = "red";
        this.maxSpeed = 6;
        this.dx = this.maxSpeed;
        this.dy =this.maxSpeed;
        this.paddle = paddle
    }


    draw(ctx){
        ctx.beginPath();
        ctx.arc(this.position.x,this.position.y,this.radius,0,Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    update(dt){
        let newX = this.position.x + this.dx;
        let newY = this.position.y + this.dy;
        let bend = 0;
        // collision detection with side walls
        if( newX > SCREEN_WIDTH - this.radius || newX < this.radius){
            this.dx = -this.dx;
        }
        // collision detection with up and down walls
        if( newY < this.radius){
            this.dy = -this.dy;
        }
        else if(newY + this.radius >= SCREEN_HEIGHT){
            gameState = GAME_STATES.OVER;
        }


        // collision detection with the paddle
        if(this.position.y + this.radius > paddle.position.y && this.position.x >= paddle.position.x && this.position.x <= paddle.position.x + paddle.width){

            this.dy = -this.dy;

            if(this.position.x > paddle.position.x + paddle.width - 25){
                //bend = (25 - Math.abs(this.position.x - paddle.position.x + paddle.width)) / this.maxSpeed;
                this.dx = Math.abs(this.dx);
                //this.dy -= bend;
            }
            else if(this.position.x < paddle.position.x + 25){
                bend = ( 25 - Math.abs(this.position.x - paddle.position.x))/ this.maxSpeed;
                this.dx = Math.abs(this.dx) * (-1);
                this.dy += bend;
            }


        }

        
        // update position

        this.position.x += this.dx;
        this.position.y += this.dy;
    }

}