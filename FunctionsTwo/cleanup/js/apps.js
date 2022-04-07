let cleaned = document.getElementById("cleaned");
let string = document.getElementById("string");

function octoRemover() {
    let stringVal = string.value;
    let stringClean = stringVal.replace(/#/g,"");
    cleaned.innerHTML = stringClean;
}