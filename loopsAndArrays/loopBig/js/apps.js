let big = document.getElementById("bigNum");

//styling big div as a green rectangle
big.style.backgroundColor = "#8abf93";
big.style.height = "100px";
big.style.width = "500px";

let bigArray = [1000, 2000, 3000, 4000, 5000];

for(let i = 0; i < bigArray.length; i++)
{
    big.innerHTML += bigArray[i] + ", ";
}