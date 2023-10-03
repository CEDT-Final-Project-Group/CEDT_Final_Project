import { loadNextQuestion, getAnswer } from "./quiz.js";
import { loadScoreboard } from "./scoreboard.js";



document.addEventListener("DOMContentLoaded", function () {
  /*const getQuestion = document.getElementById("get-question");
  getQuestion.addEventListener("click", loadNextQuestion);
  */
  /*
  //scoreboard button
  const getScoreboard = document.getElementById("get-scoreboard");
  getScoreboard.addEventListener("click", loadScoreboard);
  */
  //submit button
  const submitButton = document.getElementById("submit-button");
  submitButton.addEventListener("click", submitName)

  const btns = document.querySelectorAll('button[id^=answer]');
  btns.forEach(btn => {
    btn.addEventListener('click', event => {
        event.preventDefault()
        let chosenButton = event.currentTarget;
        let ButtonId = chosenButton.id
        let chosenChoice = parseInt(ButtonId.charAt(ButtonId.length - 1));
        let answer = getAnswer();
        let answerButtonID = "answer"+ (answer.toString());
        const answerButton = document.getElementById(answerButtonID);
        answerButton.className = "correctAnswer";
        if(chosenChoice != answer) chosenButton.className = "wrongAnswer";
        setTimeout(function(){
          chosenButton.className = "";
          answerButton.className = "";
          loadNextQuestion();
        }, 1000);
    });
  });
});

let usernameT = "NaN";

function submitName() {
  const usernameInput = document.getElementById("username-input");
  usernameT = usernameInput.value;
  const username = document.getElementById("username");
  username.textContent = usernameT;
  const popup = document.getElementById("popup");
  popup.style.display = "none";
  const main = document.getElementById("main");
  main.classList = "";
}

function loadQuestionPage() {
  //
}

function loadScoreboardPage() {
  //
}

//main
loadNextQuestion()