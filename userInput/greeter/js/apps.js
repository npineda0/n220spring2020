let inputName = document.getElementById("username");

function greeting() {
    let greetName = inputName.value;
    console.log("hello " + greetName);

    inputName.value = "";
}