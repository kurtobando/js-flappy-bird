class GameReady extends Canvas {
    constructor(props) {
        super(props);

        this.image = loadImage('./assets/sprite.png');
    }
    draw() {
        let getGameReadyWidth = window.innerWidth < 500 ? this.width / 6 : this.width / 4;
        let getGameReadyHeight = this.height / 4;
        let getGameReadyX = 250;
        let getGameReadyY = 540;
        let getGameReadyDx = 0;
        let getGameReadyDy = 229;
        let getGameReadyDWidth = 173;

        image(
            this.image,
            getGameReadyWidth,
            getGameReadyHeight,
            getGameReadyX,
            getGameReadyY,
            getGameReadyDx,
            getGameReadyDy,
            getGameReadyDWidth
        );
    }
}
