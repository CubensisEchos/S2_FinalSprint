export default class Bullet {
    constructor(x, y, speed, damage, direction) {
        this.x = x;
        this.y =y;
        this.speed = speed;
        this.damage = damage;
        this.direction = direction;
        this.width = 5;
        this.height = 15;
        this.color = "green";
    }

    draw(ctx) {
        ctx.fillStyle = this.color;

        if (this.direction == "right") {
            this.x += this.speed;
        } else if (this.direction == "up") {
            this.y -= this.speed;
        }
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}