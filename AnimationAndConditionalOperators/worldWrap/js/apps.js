var speed = 5;
var radius = 30;
var x = 0;

function setup() {
    createCanvas(800,600);
}

function draw() {
    background(204);
    circle(x, 300, 30);
    x += speed;
    if (x > 800) {
        x = 0;
    }
    console.log(x);
}