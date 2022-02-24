let fav = document.getElementById("fav");

//style fav div as a blue square
fav.style.backgroundColor = "#6a92d4";
fav.style.height = "300px";
fav.style.width = "300px";

//array of strings
let favArray = ["coffee", "music", "books", "painting", "nintendo switch"];

//for loop with a conditional of the array length
for (let i = 0; i < favArray.length; i++)
{
    //favArray[i] has an index of i to follow for loop
    let itemAtIndex = favArray[i];
    //variable to not repeat statement
    //<br /> puts statement at a new line
    let statement = itemAtIndex + ", is one of my favorite things. <br />";

    //+= displays all statements, = displays only one
    fav.innerHTML += statement;
}

