import questions from "./questions.json" assert {type: "json"};

let qusetionNumber = 0;

export function getNextQuestion() {
    return questions[qusetionNumber++].question;
}