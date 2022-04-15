let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");

//will listen for when the user clicks the div and go to changeColor function
box1.addEventListener("click", changeColor);
box2.addEventListener("click", changeColor);
box3.addEventListener("click", changeColor);

//grey square 200px box(1-3)
box1.style.backgroundColor = "#abadb0";
box1.style.height = "200px";
box1.style.width = "200px";
box1.style.float = "left";
box1.style.marginLeft = "5px";

box2.style.backgroundColor = "#abadb0";
box2.style.height = "200px";
box2.style.width = "200px";
box2.style.float = "left";
box2.style.marginLeft = "5px";

box3.style.backgroundColor = "#abadb0";
box3.style.height = "200px";
box3.style.width = "200px";
box3.style.float = "left";
box3.style.marginLeft = "5px";

function changeColor(event) {
    let color = event.target.getAttribute("data-color");
    event.target.style.backgroundColor = color;
}