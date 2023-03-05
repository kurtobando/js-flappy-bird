class GameOver extends Canvas {
    constructor(props) {
        super(props);

        this.image = loadImage('./assets/sprite.png');
    }
    draw() {
        let getGameOverWidth = 300;
        let getGameOverHeight = 40;
        let getGameOverX = window.innerWidth < 500 ? this.width / 9 : this.width / 5;
        let getGameOverY = this.height / 3;
        let getGameOverDx = 175;
        let getGameOverDy = 228;
        let getGameOverDWidth = 225;
        let getGameOverDHeight = 40;

        image(
            this.image,
            getGameOverX,
            getGameOverY,
            getGameOverWidth,
            getGameOverHeight,
            getGameOverDx,
            getGameOverDy,
            getGameOverDWidth,
            getGameOverDHeight
        );
    }
}
