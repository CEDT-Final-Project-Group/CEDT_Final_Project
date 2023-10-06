import { loadNextQuestion, getAnswer } from "./quiz.js";
import { loadScoreboard } from "./scoreboard.js";



document.addEventListener("DOMContentLoaded", function () {
  /*
  //scoreboard button
  const getScoreboard = document.getElementById("get-scoreboard");
  getScoreboard.addEventListener("click", loadScoreboard);
  */
  //submit button
  const submitButton = document.getElementById("submit-button");
  submitButton.addEventListener("click", submitName)
  const startButton = document.getElementById("start-button");
  startButton.addEventListener("click", startQuiz)

  const btns = document.querySelectorAll('button[id^=answer]');
  btns.forEach(btn => {
    btn.addEventListener('click', event => {
      event.preventDefault()
      let chosenButton = event.currentTarget;
      let ButtonId = chosenButton.id
      let chosenChoice = parseInt(ButtonId.charAt(ButtonId.length - 1));
      let answer = getAnswer();
      let answerButtonID = "answer" + (answer.toString());
      const answerButton = document.getElementById(answerButtonID);
      answerButton.classList.add("correctAnswer");
      if (chosenChoice != answer) chosenButton.classList.add("wrongAnswer");
      setTimeout(function () {
        chosenButton.className = "answer-button";
        answerButton.className = "answer-button";
        loadNextQuestion();
      }, 1000);
    });
  });
});

let usernameT = "NaN";

function submitName() {
  const usernameInput = document.getElementById("username-input");
  usernameT = usernameInput.value;
  const mainMenu = document.getElementById("main-menu");
  mainMenu.classList = "hide";
  const introPage = document.getElementById("intro-page");
  introPage.classList = "";
}

function startQuiz() {
  const mainMenu = document.getElementById("intro-page");
  mainMenu.classList = "hide";
  const introPage = document.getElementById("quiz-page");
  introPage.classList = "";
}

//main
loadNextQuestion()