
//Drawing Drawer
function setup() {
    createCanvas(600, 600);
}

function draw() {
    background(204);
    //follow mouse
    drawCar(mouseX, mouseY);

}

function drawCar(x, y) {
    //the last two 20's curves the edge of the top left&right corners
    rect(x, y, 200, 80, 20, 20);
    //the last four 15's curves all edges of rectangle
    rect(x-10, y+40, 240, 42, 15, 15, 15, 15);
    circle(x+20, y+80, 40);
    circle(x+190, y+80, 40);
}


/*
//Red Remover
function setup () {
    createCanvas(600,600);
}

function draw() {
    let noRed = removeRed(170, 200, 150);
    fill(noRed);
    circle(300, 300, 50);
}

function removeRed(red, green, blue) {
    red.setRed(0);
    var green = 0 < 255;
    var blue = 0<255;
    return removeRed(red, green, blue);
}
*/


/*
//Polar Points
function setup() {
    createCanvas(400, 400);
}

function draw() {
    var res = polarPoint();
    translate(100, 100);
    circle(res.x, res.y, 10);
}

function polarPoint(r) {
    var x = r*Math.sin(mouseX);
    var y = Math.cos(mouseX);
return createVector(x, y);
}
*/