class Road extends Canvas {
    constructor(props) {
        super(props);

        this.image = loadImage('./assets/road.png');
        this.speed = 0;
    }
    draw() {
        let imageX = this.speed;
        let imageY = this.height - 65;
        let imageW = this.width;
        let imageH = 120;

        image(this.image, imageX, imageY, imageW, imageH);
        image(this.image, imageW + imageX, imageY, imageW, imageH);

        // restart image loop
        if (imageW + imageX <= 0) {
            this.speed = 0;
        }
        this.speed -= 1;
    }
}
