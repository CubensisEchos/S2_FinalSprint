//stuff for player character 

export default class Player {
    constructor(x, y, sprite, bulletController) {
        this.x = x;
        this.y = y;
        this.sprite = sprite;
        this.bulletController = bulletController;
        this.radius = 25;
        this.width = 50;
        this.height = 50;
        this.speed = 10;
        this.upPress = false;
        this.rightPress = false;
        this.downPress = false;
        this.leftPress = false;
        this.wPress = false;

        document.body.addEventListener("keydown", this.keyDown);
        document.body.addEventListener("keyup", this.keyUp);
    }

    //player sprite
    draw(ctx) {
        ctx.drawImage(this.sprite, this.x - 20, this.y - 20, 40, 40);

        this.shoot();
    };

    shoot() {
        if(this.wPress){
            let speed = 5;
            let delay = 7;
            let damage = 1;
            let bulletX = this.x ;
            let bulletY = this.y;
            this.bulletController.shoot(bulletX, bulletY, speed, delay, damage, "up");
        }

        if(this.dPress){
            let speed = 5;
            let delay = 7;
            let damage = 1;
            let bulletX = this.x;
            let bulletY = this.y;
            this.bulletController.shoot(bulletX, bulletY, speed, delay, damage, "right");
        }
    }

    

    //movement and shooting
    inputs() {
        if (this.upPress) {
          this.y -= this.speed;
        }
        if (this.rightPress) {
          this.x += this.speed;
        }
        if (this.downPress) {
            this.y += this.speed;
          }
        if (this.leftPress) {
          this.x -= this.speed;
        }
      };

    keyDown = (event) => {


        if(event.key == "ArrowUp") {
            this.upPress = true;
        }
        if(event.key == "ArrowRight") {
            this.rightPress = true;
        }
        if(event.key == "ArrowDown") {
            this.downPress = true;
        }
        if(event.key == "ArrowLeft") {
            this.leftPress = true;
        }
        if(event.key == "w"){
            this.wPress = true;
        }
        if(event.key == "d"){
            this.dPress = true;
        }
    };

    keyUp = (event) => {


        if(event.key == "ArrowUp") {
            this.upPress = false;
        }
        if(event.key == "ArrowRight") {
            this.rightPress = false;
        }
        if(event.key == "ArrowDown") {
            this.downPress = false;
        }
        if(event.key == "ArrowLeft") {
            this.leftPress = false;
        }
        if(event.key == "w"){
            this.wPress = false;
        }
        if(event.key == "d"){
            this.dPress = false;
        }
    };

    //player boundries
    boundryCheck(canvasWidth, canvasHeight) {
        //up
        if (this.y < this.radius) { 
            this.y = this.radius;
        }
        //down
        if (this.y > canvasHeight - this.radius) {
            this.y = canvasHeight - this.radius;
        }
        //left
        if (this.x < this.radius) { 
            this.x = this.radius;
        }
        //right
        if (this.x > canvasWidth - this.radius) { 
            this.x = canvasWidth - this.radius;
        }
    };
}