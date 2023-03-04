class Bird {
    constructor() {
        this.x = 80;
        this.y = 200;
        this.width = 40;
        this.height = 30;
        this.image = loadImage('./assets/bird.png');
        this.speed = 0;
        this.gravity = 0.6;
        this.flap = 12;
    }
    draw() {
        this.speed += this.gravity;
        this.y += this.speed;

        return image(this.image, this.x, this.y, this.width, this.height);
    }
    onFlap() {
        this.speed = -this.flap;
    }
}
