class GameOver extends Canvas {
    constructor(props) {
        super(props);

        this.image = loadImage('./assets/sprite.png');
    }

    draw() {
        image(this.image, this.width / 5, this.height / 4, 300, 480, 175, 228, 225);
    }
}
