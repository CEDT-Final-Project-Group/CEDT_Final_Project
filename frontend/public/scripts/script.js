import { BACKEND_URL } from "./config.js";
import { getNextQuestion } from "./quiz.js";

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