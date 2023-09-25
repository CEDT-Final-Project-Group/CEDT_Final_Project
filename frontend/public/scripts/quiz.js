import questions from "./questions.json" assert {type: "json"};

let qusetionNumber = 0;
const question = document.getElementById("question");

export function loadNextQuestion() {
    question.textContent = questions[qusetionNumber].question;
    qusetionNumber++
    //
};
