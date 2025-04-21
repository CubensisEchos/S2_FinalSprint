import Bullet from "./Bullet.js";

export default class bulletController{
    bullets = [];
    timerBetweenBullets = 0;
    
    constructor() {
        this.bullletDelay = 0;    
    }

    shoot(x, y, speed, delay, damage, direction) {
        if(this.timerBetweenBullets <= 0) {
            this.bullets.push(new Bullet(x, y, speed, damage, direction));
            this.timerBetweenBullets = delay * 3;
        }        
    }

    update() {
        if (this.timerBetweenBullets > 0) {
            this.timerBetweenBullets--;
        }
    }

    draw(ctx) {
        this.bullets.forEach((bullet) => bullet.draw(ctx));

    }

}