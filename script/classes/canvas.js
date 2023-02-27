class Canvas {
    constructor(width, height) {
        this.width = window.innerWidth < 500 ? window.innerWidth : 500;
        this.height = window.innerHeight < 800 ? window.innerHeight : 800;
    }
}
