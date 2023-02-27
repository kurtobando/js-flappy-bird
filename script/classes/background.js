class Background extends Canvas {
    constructor() {
        super();

        this.image = loadImage('./assets/background.png');
    }

    draw() {
        return background(this.image);
    }
}
