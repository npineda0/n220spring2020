let answer = document.getElementById("answer");
let question1 = document.getElementById("question1");
let question2 = document.getElementById("question2");
let question3 = document.getElementById("question3");
 
question1.addEventListener("click", showAnswer);
question2.addEventListener("click", showAnswer);
question3.addEventListener("click", showAnswer);

function showAnswer(event) {
    let flashAnswer = event.target.getAttribute("data-answer");
    answer.innerHTML = flashAnswer;
}