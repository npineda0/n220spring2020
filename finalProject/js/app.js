//first card selected, for remembering
cardClicked = null;
secondCard = null;

//gets all cards by class selector
let card = document.querySelectorAll(".card");
//gets replay button
let btn  = document.getElementById("btn");

//runs through array of cards and when clicked goes to game()
for(let i =0; i < card.length; i++) {
    card[i].addEventListener("click", game);
}
//console.log(card)

//main function for the basic rules of game
function game(event) {
    showHidden(event);
    //removeCard(event);
}

//reveals value of face down card when clicked & displays for 2 sec
function showHidden(event) {
    //when a card is clicked the innerHTML will display the number of the card
    event.target.innerHTML = event.target.dataset.hidden;

    //displays card number for 2 seconds 
    setTimeout(function() {
        event.target.innerHTML = "";
    }, 2000)
}

//when two cards are the same they'll be removed
function removeCard(event) {

    //console.log(firstCard, event.target);
    cardClicked = event.target;
    console.log(cardClicked.innerHTML);

    if(cardClicked.innerHTML == 3 && cardClicked.innerHTML == 3) {
        cardClicked.remove();
    }
}

//replay game option
function replay() {
   window.location.reload();
}


/*
Concentration
Create a version of the 'classic' game of memory (aka concentration). 
There should be a 4 x 4 grid of cards laid out face-down in front of the user.
When clicked, reveal the face of a card. When a second card is tapped,
reveal the face of that card as well. If the two cards match, remove them
from the game. If they don’t, return them to face-down and allow the user
to choose two more.

Requirements
*1. A 4x4 grid of facedown cards
*2. Reveal the value of a facedown card on click
3. If two revealed cards match, remove them
4. If two revealed cards do not match, return them to face down
5. A ‘replay game’ option when the game is over
*6. Use setTimeout to keep both face up cards visible for two seconds before hiding / removing them
*/