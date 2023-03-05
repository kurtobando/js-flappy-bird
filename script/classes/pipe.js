class Pipe extends Canvas {
    constructor(props) {
        super(props);

        this.speed = 3;
        this.image = {
            up: loadImage('./assets/pipe-up.png'),
            down: loadImage('./assets/pipe-down.png'),
        };
        this.gap = {
            width: 90,
            height: 200,
            x: this.width,
            y: 200,
        };
        this.pipe = {
            width: this.gap.width,
            height: this.height / 2 + 100,
        };
    }
    draw() {
        this.drawPipeUp();
        this.drawPipeDown();
        this.gap.x -= this.speed;

        if (this.gap.x < -this.gap.width) {
            this.gap.x = this.width;
            this.gap.y = this.getRandomY();
        }
    }
    drawPipeUp() {
        let getPipeUpWidth = this.pipe.width;
        let getPipeUpHeight = this.gap.y;
        let getPipeX = this.gap.x;
        let getPipeY = 0;

        image(this.image.up, getPipeX, 0, getPipeUpWidth, getPipeUpHeight);
    }
    drawPipeDown() {
        let getPipeUpWidth = this.pipe.width;
        let getPipeUpHeight = this.pipe.height;
        let getPipeX = this.gap.x;
        let getPipeY = this.gap.y + this.gap.height;

        image(this.image.down, getPipeX, getPipeY, getPipeUpWidth, getPipeUpHeight);
    }
    getRandomY() {
        return random(120, this.height - 200);
    }
}
