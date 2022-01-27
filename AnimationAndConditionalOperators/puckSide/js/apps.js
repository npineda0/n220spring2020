function setup() {
    createCanvas(400,300)
}

function draw() {
    background(204);
    circle(mouseX, mouseY, 30);

    if (mouseX >= 200) {        //if mouseX cordinates is greater than or equal to 200
        fill("#c73838");        //fill is red
    }
    else {                      //if mouseX cordinates is less than 200
        fill("#4074cf");        //fill is blue
    }
}