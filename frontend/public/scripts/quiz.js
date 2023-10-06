import questions from "./questions.json" assert {type: "json"};

let questionNumber = -1;
const question = document.getElementById("question");
const questionImage = document.getElementById("question-box");
const btns = document.querySelectorAll('button[id^=answer]');

export function loadNextQuestion() {
    if (questionNumber + 1 == questions.length) {
        console.log("end");
        return;
    }
    let currQuestion = questions[++questionNumber];
    //question.textContent = currQuestion.question;
    questionImage.innerHTML = `<img id="question-image" src="./scripts/images/questions/${currQuestion.image}" alt="${currQuestion.image}">`
    let i = 0
    btns.forEach(btn => {
        let choices = currQuestion.choices[i++];
        if (currQuestion.type == "text") btn.innerHTML = choices;
        else btn.innerHTML = `<img id="answers${i - 1}-image" src="./scripts/images/answers/${choices}" alt="${choices}">`;
    });
};

export function getAnswer() {
    return questions[questionNumber].answer;
}