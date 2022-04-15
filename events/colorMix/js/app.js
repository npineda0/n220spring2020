let colorDisplay = document.getElementById("colorDisplay");
let currentColor = document.getElementById("currentColor");
let red1 = document.getElementById("red1");
let red5 = document.getElementById("red5");
let red10 = document.getElementById("red10");
let green1 = document.getElementById("green1");
let green5 = document.getElementById("green5");
let green10 = document.getElementById("green10");
let blue1 = document.getElementById("blue1");
let blue5 = document.getElementById("blue5");
let blue10 = document.getElementById("blue10");

//div showing color
colorDisplay.style.backgroundColor = "#000000"
colorDisplay.style.height = "100px";
colorDisplay.style.width = "500px";

//div to show current calculated rgb color
currentColor.style.border = "2px solid #abadb0"
currentColor.style.height = "30px";
currentColor.style.width = "497px";
currentColor.style.marginTop = "10px";

//event listeners for buttons 
red1.addEventListener("click", addColor);
red5.addEventListener("click", addColor);
red10.addEventListener("click", addColor);
green1.addEventListener("click", addColor);
green5.addEventListener("click", addColor);
green10.addEventListener("click", addColor); 
blue1.addEventListener("click", addColor); 
blue5.addEventListener("click", addColor); 
blue10.addEventListener("click", addColor); 

function addColor(event) {
    //getting attribute and assigning variable
    let colorChange = Number(event.target.getAttribute("data-value"));

    if(red1){
        rgb(colorchange, , );
    }
    
}
