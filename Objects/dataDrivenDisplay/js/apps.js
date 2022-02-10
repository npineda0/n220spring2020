let car= {
    x: 0,
    y: 250,
    roofWidth: 200,
    roofHeight: 80, 
    roofCurve: 20,      //curve of rectangle corner
    bodyWidth: 240,
    bodyHeight: 42,
    bodyCurve: 15,
    wheels: 40,          //radius
}

function setup() {
    createCanvas(600,600);
}

function draw() {
    background(204);
    rect(car.x, car.y, car.roofWidth, car.roofHeight, car.roofCurve, car.roofCurve);
    rect(car.x-10, car.y+40, car.bodyWidth, car.bodyHeight, car.bodyCurve, car.bodyCurve, car.bodyCurve, car.bodyCurve);
    circle(car.x+20, car.y+80, car.wheels);
    circle(car.x+190, car.y+80, car.wheels);

    moveCar(10);
}

function moveCar(speed) {
    car.x += speed;
}
