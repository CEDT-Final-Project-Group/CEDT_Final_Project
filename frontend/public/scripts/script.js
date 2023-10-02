import { loadNextQuestion } from "./quiz.js";
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