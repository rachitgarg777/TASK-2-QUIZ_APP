const questions = [
    {
        question: "Which is largest river?",
        answers:[
            {  text:"Nile", correct: false },
            {  text:"Ganges", correct: false }, 
            {  text:"Amazon", correct: true },
            {  text:"Nigera", correct: false },
        ]
    },
    {
        question: "What is color of Indian flag?",
        answers:[
            {  text:"Blue", correct: false },
            {  text:"Green", correct: false }, 
            {  text:"Orange", correct: false },
            {  text:"Tricolor", correct: true },
        ]
    },
    {
        question: "Which is largest Forest?",
        answers:[
            {  text:"Amazon", correct: true },
            {  text:"Andaman", correct: false }, 
            {  text:"Sundarban", correct: false },
            {  text:"Hughes", correct: false },
        ]
    },
    {
        question: "Who is Indian Pm?",
        answers:[
            {  text:"Pappu", correct: false },
            {  text:"Amit shah", correct: false }, 
            {  text:"Narendra Modi", correct: true },
            {  text:"Draupdi Murmu", correct: false },
        ]
    },
    {
        question: "INDIA recently Launched which moon mission?",
        answers:[
            {  text:"Chandrayaan 1", correct: false },
            {  text:"Gaganyaan", correct: false }, 
            {  text:"Aditya L1", correct: false },
            {  text:"Chandryaan 3", correct: true },
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex=0;
let score = 0;
function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}
function showQuestion(){
    resetState();

    let currentQuestion =questions[currentQuestionIndex];
    let questionNo =currentQuestionIndex+1;
    questionElement.innerHTML= "Qs " + questionNo+".  "+ currentQuestion.question; 
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML= answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct= answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}
function resetState(){
    nextButton.style.display= "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectBtn= e.target;
    const isCorrect= selectBtn.dataset.correct==="true";
    if(isCorrect){
        selectBtn.classList.add("correct");
        score++;
    }else{
        selectBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextButton.style.display="block";
}
function showScore(){
    resetState();
    questionElement.innerHTML= `KUDOS!!!          You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML=" Wanna Play again";
    nextButton.style.display="block";
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex< questions.length){
        showQuestion();
    }else{
        showScore();
    }
}
nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex< questions.length){
        handleNextButton();

    }else{
        startQuiz();
    }
});
startQuiz();

