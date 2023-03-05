class Bird {
    constructor() {
        this.x = 80;
        this.y = 200;
        this.width = 34;
        this.height = 26;
        this.image = loadImage('./assets/sprite.png');
        this.speed = 0;
        this.gravity = 0.6;
        this.flap = 12;
        this.flatLoop = 0;
    }
    draw() {
        this.speed += this.gravity;
        this.y += this.speed;

        let getBirdWidth = this.width + 12;
        let getBirdHeight = this.height + 12;
        let getBirdX = this.x;
        let getBirdY = this.y;
        let getBirdDX = 277;
        let getBirdDY = 112;
        let getBirdDWidth = this.width;
        let getBirdDHeight = this.height;

        if (Math.floor(this.y) % 2 === 0) {
            getBirdDX = 277;
            getBirdDY = 112;
        }

        if (Math.floor(this.y) % 3 === 0) {
            getBirdDX = 277;
            getBirdDY = 138;
        }

        if (Math.floor(this.y) % 5 === 0) {
            getBirdDX = 277;
            getBirdDY = 166;
        }

        return image(
            this.image,
            getBirdX,
            getBirdY,
            getBirdWidth,
            getBirdHeight,
            getBirdDX,
            getBirdDY,
            getBirdDWidth,
            getBirdDHeight
        );
    }
    onFlap() {
        this.speed = -this.flap;
    }
}
