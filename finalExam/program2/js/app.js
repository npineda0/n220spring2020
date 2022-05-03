//get div from document
let numDiv = document.getElementById("numDiv");

//starting number
let startNum = 1000;
//show number in div
numDiv.innerHTML = startNum;

//add event listner to div
numDiv.addEventListener("click", increase);

//function to increase num in div by 5%
function increase() {
    //equation to increase number by 5%
    startNum = startNum + (startNum * .05);
    //display increased number in div
    numDiv.innerHTML = startNum;
}
