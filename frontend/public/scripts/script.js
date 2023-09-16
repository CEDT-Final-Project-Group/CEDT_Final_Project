import { BACKEND_URL } from "./config.js";
import { getNextQuestion } from "./quiz.js";
let a=0;

document.addEventListener("DOMContentLoaded", function () {
  const getQuestion = document.getElementById("get-question");
  getQuestion.addEventListener("click", loadQuestion);
  const getScoreboard = document.getElementById("get-scoreboard");
  getScoreboard.addEventListener("click", loadScoreboard);
});

function loadQuestion() {
  const question = document.getElementById("question");
  question.textContent = getNextQuestion();
}

async function loadScoreboard() {
  const data = await fetch(`${BACKEND_URL}/scoreboard`).then((res) =>
    res.json()
  );
  const itemList = document.getElementById("itemList");
  itemList.innerHTML = "";
  for (const player of data) {
    const newRow = document.createElement("tr");
    const username = document.createElement("td");
    username.textContent = player.username;
    const score = document.createElement("td");
    score.textContent = player.score;
    newRow.appendChild(username);
    newRow.appendChild(score);
    itemList.appendChild(newRow);
  }
}