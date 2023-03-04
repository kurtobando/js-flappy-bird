class Pipe extends Canvas {
    constructor(props) {
        super(props);

        this.canvas = {
            width: this.width,
            height: this.height,
        };
        this.speed = 3;
        this.gap = 240;
        this.xAxis = this.canvas.width;
        this.yAxis = 200;
        this.width = 70;
        this.height = this.gap;
        this.image = {
            down: loadImage('./assets/pipe-up.png'),
            up: loadImage('./assets/pipe-down.png'),
        };
    }
    draw() {
        this.drawPipeUp();
        this.drawPipeDown();
        // rect(this.xAxis, this.yAxis, this.width, this.height);

        this.xAxis -= this.speed;
        if (this.xAxis < -this.width) {
            this.xAxis = this.canvas.width;
            this.yAxis = this.getRandomY();
        }
    }
    drawPipeUp() {
        image(this.image.up, this.xAxis, 0, this.width, this.yAxis);
    }
    drawPipeDown() {
        image(this.image.down, this.xAxis, this.yAxis + this.height, this.width, this.canvas.height);
    }
    getRandomY() {
        return random(50, canvas.height - 200);
    }
}
