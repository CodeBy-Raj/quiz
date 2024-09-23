const questions = [
    {
        question: "Best college of AKTU ?",
         answers: [
            {text: "AKG" , correct: "false"},
            {text: "ABES" , correct: "true"},
            {text: "KNIT" , correct: "false"},
            {text: "IET" , correct: "false"},


         ]


    },
    {
        question: "Which branch is best ?",
         answers: [
            {text: "AIML" , correct: "false"},
            {text: "CS" , correct: "true"},
            {text: "IT" , correct: "false"},
            {text: "CSE" , correct: "false"},


         ]
    },
    {
        question: "Gaurav sir is best for DSA?",
         answers: [
            {text: "YES" , correct: "false"},
            {text: "NO" , correct: "true"},
           


         ]
    },
    {
        question: "How abes is established ?",
         answers: [
            {text: "With hard work" , correct: "false"},
            {text: "Galti Se" , correct: "true"},
            


         ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    
    currentQuestionIndex = 0;
    score=0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
        resetState();
        let currentQuestion = questions[currentQuestionIndex];  
        let questionNo = currentQuestionIndex + 1;
        questionElement.innerHTML = questionNo + "." + currentQuestion.question;


    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);

        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);

        
    });

}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct ==="true";

    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;

    } );
    nextButton.style.display = "block"; 
}
function showScore(){
    resetState();
    questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML= "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }

    else{
        showScore();    
    }

}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }

});
startQuiz();