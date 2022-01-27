var diameter = 1;
var speed = 1;

function setup() {
    createCanvas(600, 600);
}

function draw() {
    background(204);
    circle(300, 300, diameter);
    diameter += speed;
    console.log(diameter);

    if (diameter >= 200) {
        diameter = 0;
    }
}