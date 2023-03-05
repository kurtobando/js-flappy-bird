class GameReady extends Canvas {
    constructor(props) {
        super(props);

        this.image = loadImage('./assets/sprite.png');
    }
    draw() {
        let getGameReadyWidth = window.innerWidth < 500 ? this.width / 6 : this.width / 4;

        image(this.image, getGameReadyWidth, this.height / 4, 250, 540, 0, 229, 173);
    }
}
