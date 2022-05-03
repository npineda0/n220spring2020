//get div from document
let display = document.getElementById("display");

//array to loop through
var wordArray = ["cheese", "crackers", "wine", "knife", "velocipedes"];
console.log(wordArray);

//loops through array
//will not display last word since the new length is now 4
for(i = 0; i < wordArray.length -1; i++) {  
    //display words in div
    display.innerHTML += wordArray[i] + ", ";
}