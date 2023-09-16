import { loadNextQuestion } from "./quiz.js";
import { loadScoreboard } from "./scoreboard.js";

let a=0;

document.addEventListener("DOMContentLoaded", function () {
  const getQuestion = document.getElementById("get-question");
  getQuestion.addEventListener("click", loadNextQuestion);
  const getScoreboard = document.getElementById("get-scoreboard");
  getScoreboard.addEventListener("click", loadScoreboard);
});

function loadQuestionPage() {
  //
}

function loadScoreboardPage() {
  //
}