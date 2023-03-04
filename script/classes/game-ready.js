class GameReady extends Canvas {
    constructor(props) {
        super(props);

        this.image = loadImage('./assets/sprite.png');
    }
    draw() {
        image(this.image, this.width / 4, this.height / 4, 250, 540, 0, 229, 173);
    }
}
