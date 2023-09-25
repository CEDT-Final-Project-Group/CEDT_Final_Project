import { loadNextQuestion } from "./quiz.js";
import { loadScoreboard } from "./scoreboard.js";



document.addEventListener("DOMContentLoaded", function () {
  /*const getQuestion = document.getElementById("get-question");
  getQuestion.addEventListener("click", loadNextQuestion);
  const getScoreboard = document.getElementById("get-scoreboard");
  getScoreboard.addEventListener("click", loadScoreboard);*/
  const submitName = document.getElementById("submit-name");
  submitName.addEventListener("click", getUserName)
});

let username = "NaN";

function getUserName() {
  const usernameInput = document.getElementById("username-input");
  username = usernameInput.value;
  console.log(username);
}

function loadQuestionPage() {
  //
}

function loadScoreboardPage() {
  //
}