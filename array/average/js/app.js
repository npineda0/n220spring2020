let inputNum = document.getElementById("text")
let showNum = document.getElementById("showNum")
let btn = document.getElementById("avgSumCalc");
btn.addEventListener("click", avgSumCalc);

function avgSumCalc() {
    var numComma = inputNum.value;
    var numArray = numComma.split(",");
    let sum = 0;

    for(let i = 0; i < numArray.length; i++) {
        sum += Number(numArray[i]);
    }   
    
    for(let i = 0; i < numArray.length; i++) {
        var avg = sum / numArray.length;
    }

    showNum.innerHTML = "sum: " + sum + " average: " + avg;

    inputNum.value = "";
}