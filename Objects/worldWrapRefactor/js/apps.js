let ball = {
    speed: 5,
    radius: 30,
    x: 0
}

function setup() {
    createCanvas(800,600);
}

function draw() {
    background(204);
    circle(ball.x, 300, ball.radius);
    ball.x += ball.speed;
    if (ball.x > 800) {
        ball.x = 0;
    }
}