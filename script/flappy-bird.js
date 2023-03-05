const DOMScore = document.getElementById('score');
const DOMBestScore = document.getElementById('best-score');

let canvas;
let gameReady;
let gameOver;
let bg;
let road;
let bird;
let score = {
    current: 0,
    best: 0,
};
let currentState = null;
let states = {
    IS_GAME_READY: 1,
    IS_GAME_STARTED: 2,
    IS_GAME_OVER: 3,
};
let timeout = null;

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
    pixelDensity(1);
    gameOver.draw();
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
        onGameOver();
    }

    // bird reach to bottom
    if (bird.y > canvas.height - bird.height) {
        onGameOver();
    }

    // bird hit the top gap
    if (bird.x + bird.width >= pipe.gap.x && bird.x <= pipe.gap.x + pipe.gap.width && bird.y <= pipe.gap.y) {
        onGameOver();
    }

    // bird hit the bottom gap
    if (
        bird.x + bird.width >= pipe.gap.x &&
        bird.x <= pipe.gap.x + pipe.gap.width &&
        bird.y + bird.height >= pipe.gap.y + pipe.gap.height
    ) {
        onGameOver();
    }

    // bird pass the gap
    if (
        bird.x + bird.width > pipe.gap.x + bird.width &&
        bird.x + bird.width < pipe.gap.x + pipe.gap.width + bird.width
    ) {
        if (currentState === states.IS_GAME_STARTED) {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                score.current += 1;
            }, 500);
        }
    }

    onScore();
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

function onGameOver() {
    currentState = states.IS_GAME_OVER;
    bird.y = canvas.height / 3;
    bird.speed = 0;
    pipe.gap.x = canvas.width;
    pipe.gap.y = pipe.getRandomY();
    score.best = score.best < Math.floor(score.current) ? Math.floor(score.current) : score.best;
    score.current = 0;
}

function onScore() {
    DOMScore.innerHTML = `Current Score: ${Math.floor(score.current)}`;
    DOMBestScore.innerHTML = `Best Score: ${score.best}`;
}
