class InputHandler{
    constructor(paddle){
        document.addEventListener("keydown",function(e){
            switch(e.keyCode){
                case 37:
                    paddle.moveLeft();
                    break;
                case 39:
                    paddle.moveRight();
                    break;    
            }
        })

        document.addEventListener("keyup",function(e){
            switch(e.keyCode){
                case 37:
                    if(paddle.dx < 0)
                        paddle.stop();
                    break;
                case 39:
                    if(paddle.dx > 0)
                        paddle.stop();
                    break;    
            }
        })
    }
}