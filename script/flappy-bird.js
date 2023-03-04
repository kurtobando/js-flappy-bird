let canvas;
let gameReady;
let gameOver;
let bg;
let road;
let bird;
let score = 0;
let currentState = null;
let states = {
    IS_GAME_READY: 1,
    IS_GAME_STARTED: 2,
    IS_GAME_OVER: 3,
};

function preload() {
    canvas = new Canvas();
    gameReady = new GameReady();
    gameOver = new GameOver();
    bg = new Background();
    road = new Road();
    bird = new Bird();
    pipe = new Pipe();

    currentState = states.IS_GAME_READY;
}

function setup() {
    createCanvas(canvas.width, canvas.height).id('flappy-bird');
}

function draw() {
    switch (currentState) {
        case states.IS_GAME_READY:
            bg.draw();
            road.draw();
            gameReady.draw();
            break;
        case states.IS_GAME_STARTED:
            bg.draw();
            road.draw();
            pipe.draw();
            bird.draw();
            break;
        case states.IS_GAME_OVER:
            bg.draw();
            road.draw();
            gameOver.draw();
            break;
    }

    // bird reach to top
    if (bird.y < 0) {
        currentState = states.IS_GAME_OVER;
        bird.y = canvas.height / 3;
        bird.speed = 0;
    }

    // bird reach to bottom
    if (bird.y > canvas.height - bird.height) {
        currentState = states.IS_GAME_OVER;
        bird.y = canvas.height / 3;
        bird.speed = 0;
    }

    // bird hit the pipe up
    if (bird.y < pipe.yAxis && bird.x > pipe.xAxis && bird.x < pipe.xAxis + pipe.width) {
        currentState = states.IS_GAME_OVER;
        bird.y = canvas.height / 3;
        bird.speed = 0;
        pipe.xAxis = canvas.width;
    }

    // bird hit the pipe down
    if (bird.y > pipe.yAxis + pipe.height && bird.x > pipe.xAxis && bird.x < pipe.xAxis + pipe.width) {
        currentState = states.IS_GAME_OVER;
        bird.y = canvas.height / 3;
        bird.speed = 0;
        pipe.xAxis = canvas.width;
    }
}

function mouseClicked() {
    switch (currentState) {
        case states.IS_GAME_READY:
            currentState = states.IS_GAME_STARTED;
            break;
        case states.IS_GAME_OVER:
            currentState = states.IS_GAME_READY;
            break;
        default:
            bird.onFlap();
            break;
    }
}
