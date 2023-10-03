import questions from "./questions.json" assert {type: "json"};

let questionNumber = -1;
const question = document.getElementById("question");
const btns = document.querySelectorAll('button[id^=answer]');

export function loadNextQuestion() {
    if(questionNumber + 1 == questions.length)
    {
        console.log("end");
        return;
    }
    let currQuestion = questions[++questionNumber];
    question.textContent = currQuestion.question;
    let i=0
    btns.forEach(btn => {
        let choices = currQuestion.choices[i++];
        if(currQuestion.type == "text") btn.innerHTML = choices;
        else btn.innerHTML = `<img src="./scripts/images/${choices}" alt="${choices}">`;
    });
};

export function getAnswer() {
    return questions[questionNumber].answer;
}