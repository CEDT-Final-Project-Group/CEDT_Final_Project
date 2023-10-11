import { loadNextQuestion, getAnswer, startTimer, getQuestionScore, startQuiz } from "./quiz.js";
import { loadScoreboard } from "./scoreboard.js";

export let usernameT = "NaN";
export let scorePoint = 0;
export let totalCorrect = 0;
let canAnswer = true;

document.addEventListener("DOMContentLoaded", function () {
  //submit button
  const submitButton = document.getElementById("submit-button");
  submitButton.addEventListener("click", submitName)

  const startButton = document.getElementById("start-button");
  startButton.addEventListener("click", LoadQuiz)

  const nextButton = document.getElementById("next-button");
  nextButton.addEventListener("click", scoreboardPage)

  const menuButton = document.getElementById("menu-button");
  menuButton.addEventListener("click", menuPage)

  const score = document.getElementById("score");

  const btns = document.querySelectorAll('button[id^=answer]');
  btns.forEach(btn => {
    btn.addEventListener('click', event => {
      if (!canAnswer) return;
      canAnswer = false;

      event.preventDefault();

      let chosenButton = event.currentTarget;
      let ButtonId = chosenButton.id
      let chosenChoice = parseInt(ButtonId.charAt(ButtonId.length - 1));
      let answer = getAnswer();
      let answerButtonID = "answer" + (answer.toString());

      const answerButton = document.getElementById(answerButtonID);
      answerButton.classList.add("correctAnswer");

      if (chosenChoice != answer) {
        chosenButton.classList.add("wrongAnswer");
        scorePoint -= 1;
      }
      else {
        scorePoint += getQuestionScore();
        totalCorrect++;
      }
      score.innerHTML = scorePoint;

      setTimeout(function () {
        chosenButton.className = "answer-button";
        answerButton.className = "answer-button";
        loadNextQuestion();
        canAnswer = true;
      }, 500);
    });
  });
});

function submitName() {
  const usernameInput = document.getElementById("username-input");
  usernameT = usernameInput.value;
  if (usernameT == "" || usernameT == null) {
    alert("Name must be filled out");
    return;
  }

  const mainMenu = document.getElementById("main-menu");
  mainMenu.classList = "hide";

  const introPage = document.getElementById("intro-page");
  introPage.classList = "";
  const greeting = document.getElementById("greeting");
  greeting.innerHTML = `Greetings ${usernameT}, our Esteemed Logician,`
}

function LoadQuiz() {
  scorePoint = 0;
  totalCorrect = 0;
  score.innerHTML = scorePoint;
  startQuiz();

  let oneMinutes = 60 * 2;
  let display = document.getElementById("timer");
  startTimer(oneMinutes, display);

  const introPage = document.getElementById("intro-page");
  introPage.classList = "hide";

  const quizPage = document.getElementById("quiz-page");
  quizPage.classList = "";
}

function scoreboardPage() {
  loadScoreboard();

  const endingPage = document.getElementById("ending-page");
  endingPage.classList = "hide";

  const scoreBoardPage = document.getElementById("scoreboard-page");
  scoreBoardPage.classList = "";
}

function menuPage() {
  const scoreBoardPage = document.getElementById("scoreboard-page");
  scoreBoardPage.classList = "hide";

  const mainMenu = document.getElementById("main-menu");
  mainMenu.classList = "";
}