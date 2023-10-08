import questions from "./questions.json" assert {type: "json"};
import { usernameT, scorePoint, totalCorrect } from "./script.js";
import { addScoreboard } from "./scoreboard.js";

let questionNumber = -1;
const questionImage = document.getElementById("question-box");
const btns = document.querySelectorAll('button[id^=answer]');

function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex > 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex--);

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}

export function loadNextQuestion() {
    if (questionNumber + 1 == questions.length) {
        endQuiz();
        return;
    }
    let currQuestion = questions[++questionNumber];
    questionImage.innerHTML = `<img id="question-image" src="./scripts/images/questions/${currQuestion.image}" alt="${currQuestion.image}">`
    let i = 0;
    btns.forEach(btn => {
        let choices = currQuestion.choices[i++];
        if (currQuestion.type == "text") btn.innerHTML = choices;
        else btn.innerHTML = `<img id="answers${i - 1}-image" src="./scripts/images/answers/${choices}" alt="${choices}">`;
    });
};

export function startQuiz() {
    questionNumber = -1;
    shuffle(questions);
    loadNextQuestion();
}

export function getAnswer() {
    return questions[questionNumber].answer;
}

export function getQuestionScore() {
    return questions[questionNumber].score;
}

let myInterval;

export function startTimer(duration, display) {
    let timer = duration;
    let minutes = parseInt(timer / 60, 10);
    let seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.innerHTML = minutes + ":" + seconds;

    if (--timer < 0) {
        endQuiz();
        return;
    }
    myInterval = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.innerHTML = minutes + ":" + seconds;

        if (--timer < 0) {
            endQuiz();
            return;
        }
    }, 1000);
}

export function endQuiz() {
    clearInterval(myInterval);

    const endingScoreText = document.getElementById("ending-score-text");
    endingScoreText.innerHTML = `You have fix a total of ${totalCorrect} logic gates with the score of ${scorePoint}`;

    const quizPage = document.getElementById("quiz-page");
    quizPage.classList = "hide";

    const endingPage = document.getElementById("ending-page");
    endingPage.classList = "";

    const endingImageBox = document.getElementById("ending-image-box");

    const endingText = document.getElementById("ending-text");
    const endingMessage = document.getElementById("ending-message-text");
    if (scorePoint >= 10) {
        endingText.innerHTML = `Congratulation!`;
        endingImageBox.innerHTML = `<img src="./scripts/images/ending_1.png" id="ending-image" alt="dogo">`;
        endingMessage.innerHTML = `With your great help, the people of Electralandia are able to restore the grand Logic Gate, and are now erupted in celebration! With ${usernameT} the great Logician, 
                                    hailed as a hero, led a joyous parade throughout the street. The kingdom's unity and brilliance were reborn, ensuring a bright and united future once more.`;
    }
    else {
        endingText.innerHTML = `...`;
        endingImageBox.innerHTML = `<img src="./scripts/images/ending_2.png" id="ending-image" alt="dogo">`
        endingMessage.innerHTML = `Despite ${usernameT}'s efforts, the grand Logic Gate remained incomplete. Electralandia was now overrun by sinister Bugs. The grand Logician's valiant fight ended in despair.
                                Electralandia, once a beacon of hope, now crumbled to the ground, the kingdom's brilliance was extinguished forever.`;
    }

    const payload = {
        username: usernameT,
        score: scorePoint,
    };
    addScoreboard(payload);
}