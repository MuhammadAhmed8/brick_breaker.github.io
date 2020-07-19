// global constant game screen width and height
const SCREEN_WIDTH = 800;       
const SCREEN_HEIGHT = 600;
const GAME_STATES = {
    PLAYING: 1,
    OVER: 2,
    PAUSE: 3,
}
var score = 0;
var gameState = GAME_STATES.PLAYING;


let canvas = document.querySelector("#gameScreen");
let scoreElement = document.querySelector("#score");
let ctx = canvas.getContext("2d");

let paddle = new Paddle();
let ball = new Ball(paddle);
let controller = new InputHandler(paddle);
let bricks = levelBuilder(level1, ball, Brick.width, Brick.height);

paddle.draw(ctx);
ball.draw(ctx);

let lastTime = 0;

let gameObjects = [paddle, ball, ...bricks];

function updateScore(){
    scoreElement.textContent = score;
}

function gameLoop(timestamp){
    if(gameState === GAME_STATES.OVER){
        return;
    }
    let dt = timestamp - lastTime;
    lastTime = timestamp;

    ctx.clearRect(0,0,SCREEN_WIDTH,SCREEN_HEIGHT);

    gameObjects.forEach(object => object.update(dt));
    gameObjects.forEach(object => object.draw(ctx));
    updateScore();
    requestAnimationFrame(gameLoop);
}



gameLoop(0);