//game code
import Player from "./Player.js";
import BulletController from "./BulletController.js";


const canvas = document.getElementById("gameArea");
const ctx = canvas.getContext("2d");
const playerSprite = new Image();
const pausedImage = new Image();

let gameActive = false;
let bulletController =  new BulletController(canvas);
let player = new Player(canvas.width / 2.2, canvas.height / 1.3, bulletController);

function loadSprite() {
    playerSprite.src = "Photos/Blob shooter sprite1.png";
    pausedImage.src = "Photos/Blob Shooter1.png"
    playerSprite.onload = () => {
        console.log("Player sprite loaded successfully");
        player = new Player(100, 100, playerSprite, bulletController);
        drawGame();
    };
    playerSprite.onerror = () => {
        console.error("Failed to load player sprite");
    };
}


function drawGame(){
    requestAnimationFrame(drawGame);
    clearScreen();
    if(gameActive) {
    player.inputs();
    player.boundryCheck(canvas.width, canvas.height);
    player.draw(ctx,);
    bulletController.update();
    bulletController.draw(ctx);
    } else {
        drawPausedImage();
    }
}


function drawPausedImage() {
    ctx.drawImage(pausedImage, canvas.width / 2 - 400, canvas.height / 2 - 100, 800, 200);
}


function clearScreen(){
    ctx.fillStyle = "GREY";
    ctx.fillRect(0,0, canvas.width, canvas.height);
}

document.body.addEventListener("keydown", (event) => player.keyDown(event));
document.body.addEventListener("keyup", (event) => player.keyUp(event));

//makes game active only when canvas is clicked
canvas.addEventListener("click", () => {
    gameActive = !gameActive;
    console.log("Canvas clicked, gameActive: ", gameActive); 
});

//stop scrolling when game is active
window.addEventListener("keydown", (event) => {
    if(gameActive && ["ArrowUp", "ArrowRight", "ArrowDown", "ArrowLeft", " "].includes(event.key)) {
        event.preventDefault();
    }
});


loadSprite();
