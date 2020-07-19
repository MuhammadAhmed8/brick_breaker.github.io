class Brick{
    static width = 52;
    static height = 25;
    
    constructor(position,ball){
        this.isVisible = true;
        this.position = position;
        this.image = document.querySelector("#brick_img");
        this.ball = ball;
    }

    draw(ctx){
        if(this.isVisible)
            ctx.drawImage(this.image, this.position.x, this.position.y, Brick.width, Brick.height);
    }

    update(dt){
        if(!this.isVisible) return;

        // collision detection between ball and brick

        let ballX = this.ball.position.x;
        let ballY = this.ball.position.y;
        let x = this.position.x;
        let y = this.position.y;
        let bWidth = Brick.width;
        let bHeight = Brick.height;
        let r = this.ball.radius;
        let testX = ballX;
        let testY = ballY;

        if(ballX < x)
            testX = x;
        else if(ballX > x + bWidth)
            testX = x + bWidth;
            
        if(ballY < y)
            testY = y;
        else if(ballY > y + bHeight)
            testY = y + bHeight;
        
        let diffX = testX - ballX;
        let diffY = testY - ballY;
        let distSq = (diffX * diffX) + (diffY * diffY);

        if( distSq < r*r){
            this.isVisible = false;
            this.ball.dy *= (-1);
            score++;
            
        }


            
    }
}