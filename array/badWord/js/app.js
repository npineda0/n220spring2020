let displayCaught = document.getElementById("catcher");
let stringTxt = document.getElementById("text");
let btn = document.getElementById("check");
//when btn is clicked, badCheck() will run
btn.addEventListener("click", badCheck);


function badCheck() {
    txt = stringTxt.value;
    txtArray = txt.split(" ");
    let tally = 0;

    let badClear = "clear";
    let badWater = "water";
    let badTires = "tires";

    for(let i = 0; i < txtArray.length; i++) {
        if(txtArray[i] == badClear || txtArray[i] == badWater || txtArray[i] == badTires) {
            tally ++;
            displayCaught.innerHTML="bad words: found <br/>" + "tally: " + tally;
        } else {
            displayCaught.innerHTML="bad words: not found <br/>" + "tally: 0";
        }
    }

    stringTxt.value = "";
}

/*
For the purposes of this exercise, bad words are: clear, water, tires.

Create an application that:

Takes input from a user using a simple text input field.
Splits the string on spaces
Loops through  the array looking for bad words in the array
Adds 1 to a tally count when a bad word is found
Outputs to the document
If any bad words were found (found / not found)
How many bad words, in total, were found
Clears out the text field so the user can input a new string
 

For example, if the user input "clear water is clear", there are 3 bad words in the string.
*/