let dvText = document.getElementById("text")
//variable to keep track of how many times code is ran
let amount = 0;

dvText.style.backgroundColor = "#89c797";
dvText.style.width = "300px";
dvText.style.height = "300px";

function appendText() {
    //each time function is run, amount increases by 1 
    amount++;
    let text = "mc";
    if (amount > 3) text = "divdivdiv";

    //text inside div
    dvText.innerHTML = text;

}