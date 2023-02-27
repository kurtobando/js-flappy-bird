const reset = document.getElementById('reset');
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d', { alpha: false });

const bird = {
    height: 30,
    width: 30,
    color: 'green',
    currentXAxis: 10,
    currentYAxis: 10,
};
const pipe = {
    height: canvas.height,
    width: 50,
    color: 'red',
    currentXAxis: canvas.width - 50,
};
const hole = {
    height: 200,
    width: pipe.width,
    color: 'white',
    currentYAxis: getRandomHole(0, canvas.height - 200),
    currentXAxis: pipe.currentXAxis,
};

let isGameOver = false;
let score = 0;
let time = 0;
let currentBackgroundSpeed = 0;
let currentPipeSpeed = 4;

const initialVelocity = 12;
const gravity = 0.8;
const gravityOnJump = getGravityOnJump();
const img = new Image();

img.src = './assets/flappy-bird-background.png';

// Background scrolling speed

function getRandomHole(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getGravityOnJump() {
    return Math.pow(initialVelocity, 2) / (2 * gravity);
}

function getGravityAfterJump() {
    return gravity + (initialVelocity * time) / Math.pow(gravity, 2);
}

function calculateTimeAfterJump() {
    return (time += 1 / 60);
}

function renderBird() {
    context.beginPath();
    context.fillStyle = 'green';
    context.rect(bird.currentXAxis, bird.currentYAxis, bird.width, bird.height);
    context.stroke();
    context.fill();
}

function renderPipe() {
    context.beginPath();
    context.fillStyle = pipe.color;
    context.rect(pipe.currentXAxis, 0, pipe.width, pipe.height);
    context.fill();
}

function renderHole() {
    context.beginPath();
    context.fillStyle = hole.color;
    context.rect(hole.currentXAxis, hole.currentYAxis, hole.width, hole.height);
    context.fill();
}

function renderBackground() {
    context.drawImage(img, currentBackgroundSpeed, 0, canvas.width + 5, canvas.height);
    context.drawImage(img, currentBackgroundSpeed + canvas.width, 0, canvas.width + 5, canvas.height);
}

function clearCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}

function onGameOver() {
    console.log('Game over');
    isGameOver = true;
}

function onStart() {
    isGameOver = false;
    bird.currentYAxis = 20;
    pipe.currentXAxis = canvas.width + 200;
    hole.currentXAxis = pipe.currentXAxis;
    time = 0;
}

function isBirdHitsBottom() {
    return bird.currentYAxis + bird.height >= canvas.height;
}

function isBirdHitsTop() {
    return bird.currentYAxis <= 0;
}

function isPipeReachLeftOnCanvas() {
    return pipe.currentXAxis <= -100;
}

function resetPipe() {
    pipe.currentXAxis = canvas.width + 200;
    hole.currentXAxis = pipe.currentXAxis;
    hole.currentYAxis = getRandomHole(0, canvas.height - 200);
}

function onAnimate() {
    console.log('Game is animating');
    if (isGameOver) return;

    clearCanvas();

    renderBackground();
    renderPipe();
    renderHole();
    renderBird();

    calculateTimeAfterJump();

    if (isBirdHitsBottom()) {
        return onGameOver();
    }

    if (isBirdHitsTop()) {
        onGameOver();
        bird.currentYAxis = 0;
        return;
    }

    if (isPipeReachLeftOnCanvas()) {
        resetPipe();
        score += 1;
    }

    // pipe hits the bird
    if (pipe.currentXAxis <= bird.width && pipe.currentXAxis >= 0) {
        if (
            bird.currentYAxis < hole.currentYAxis ||
            bird.currentYAxis + bird.height > hole.currentYAxis + hole.height
        ) {
            return onGameOver();
        }
    }

    // background hits the left
    if (currentBackgroundSpeed <= -canvas.width) {
        currentBackgroundSpeed = 0;
    }

    bird.currentYAxis += getGravityAfterJump();
    pipe.currentXAxis -= currentPipeSpeed;
    hole.currentXAxis -= currentPipeSpeed;
    currentBackgroundSpeed -= 0.1;

    window.requestAnimationFrame(onAnimate);
}

window.addEventListener('load', () => {
    onStart();
    onAnimate();
});

canvas.addEventListener('click', () => {
    if (isGameOver) return;
    bird.currentYAxis -= gravityOnJump;
    time = 0;
});

reset.addEventListener('click', () => {
    if (!isGameOver) return;
    onStart();
    onAnimate();
});
