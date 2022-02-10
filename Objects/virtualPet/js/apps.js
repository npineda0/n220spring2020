let pet = {
    x: 300,
    y: 300,
    radius: 30,
    offsetX: 30 
}

function setup () {
    createCanvas(700,600);
}

function draw() {
    background(204);

    circle(mouseX, mouseY, pet.radius);

    function mousePressed() {
        if (mousePressed) {
            pet.x = pet.offsetX - 1;
        }
        else {
            pet.x = pet.offsetX + 1;
        }
    }
}



