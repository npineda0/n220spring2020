let pswrdResult = document.getElementById("passwordResult");
let username = document.getElementById("username");
let password = document.getElementById("password");

function checkInput() {
    let usernameTxt = username.value;
    let passwordTxt = password.value;
    if(usernameTxt=="Username" && passwordTxt=="Password"){
        pswrdResult.innerHTML = "success";
    } else {
        pswrdResult.innerHTML = "wrong information"
    }
}

/*
When the button is clicked, verify the user has 
written these (exact) strings in the first and
second field:

First field should be  "Username"
Second field should be  "Password"
If the two fields match, update a DIV
on the page with the text "Success" or
else "Wrong information".

For this assignment: use only one if statement
to to the check.

Remember you'll need to use the
double-equals (==) to check for equality,
and the double-ampersand to check if two things
are true.

if( (oneThingIsTrue) && (anotherThingIsTrue) ) {
*/