const questions = [
    {
        question: 'What is the capital of Japan?',
        answers:[
            {text: 'Beijing' , correct: false},
            {text: 'Seoul' , correct: false},
            {text: 'Tokyo' , correct: true},
            {text: 'Bangkok' , correct: false},
        ]
    },
        {
        question: 'Which planet is known as the Red Planet?',
        answers:[
            {text: 'Venus' , correct: false},
            {text: 'Mars' , correct: true},
            {text: 'Jupiter' , correct: false},
            {text: 'Saturn' , correct: false},
        ]
    },
    {
        question: 'Who wrote the play "Romeo and Juliet"?',
        answers:[
            {text: 'William Shakespear' , correct: true},
            {text: 'Charles Dickens' , correct: false},
            {text: 'Mark Twain' , correct: false},
            {text: 'Jane Austen' , correct: false},
        ]
    },
    {
        question: 'What is the largest ocean on Earth?',
        answers:[
            {text: 'Atlantic Ocean' , correct: false},
            {text: 'Indian Ocean' , correct: false},
            {text: 'Arctic Ocean' , correct: false},
            {text: 'Pacific Ocean' , correct: true},
        ]
    },
    {
        question: 'Which element has the chemical symbol "O" ?',
        answers:[
            {text: 'Gold' , correct: false},
            {text: 'Oxygen' , correct: true},
            {text: 'Osmium' , correct: false},
            {text: 'Silicon' , correct: false},
        ]
        },
        {
        question: 'What year did the Titanic sink?',
        answers:[
            {text: '1902' , correct: false},
            {text: '1912' , correct: true},
            {text: '1922' , correct: false},
            {text: '1932' , correct: false},
        ]
    },
    {
        question: 'What is the hardest natural substance on Earth?',
        answers:[
            {text: 'Gold' , correct: false},
            {text: 'Diamond' , correct: true},
            {text: 'Iron' , correct: false},
            {text: 'Platinum' , correct: false},
        ]
    },
    {
        question: 'Who painted the Mona Lisa?',
        answers:[
            {text: 'Vincent van Gogh' , correct: false},
            {text: 'Pablo Picasso' , correct: false},
            {text: 'Leonardo da Vinci' , correct: true},
            {text: 'Michelangelo' , correct: false},
        ]
    },
    {
        question: 'What is the smallest country in the world by land area?',
        answers:[
            {text: 'Monaco' , correct: false},
            {text: 'Vatican City' , correct: true},
            {text: 'San Marino' , correct: false},
            {text: 'Leichtenstein' , correct: false},
        ]
    },
    {
        question: 'Which country is known as the Land of the Rising Sun?',
        answers:[
            {text: 'China' , correct: false},
            {text: 'South Korea' , correct: false},
            {text: 'Japan' , correct: true},
            {text: 'Thailand' , correct: false},
        ]
    },
];

const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const progressBar = document.getElementById ('progress-bar');

let currentQuestionIndex = 0;
let score = 0;


function startQuiz () {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = 'Next';
    shuffleQuestions();
    showQuestion();
    updateProgessBar();
};

function showQuestion() {
    resetState ();
   let currentQuestion = questions[currentQuestionIndex];
   let questionNo = currentQuestionIndex + 1;
   questionElement.innerText = questionNo + '. ' + currentQuestion.question;

   currentQuestion.answers.forEach (answer => {
       const button = document.createElement('button');
       button.innerText = answer.text;
       button.classList.add('btn');
       answerButtonsElement.appendChild(button);
       if (answer.correct) {
           button.dataset.correct = answer.correct;
       }
       button.addEventListener('click', selectAnswer);
   });
};

function resetState() {
    nextButton.style.display = 'none';
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === 'true';
    if (isCorrect) {
        selectedBtn.classList.add('correct');
        score++;
    } else {
        selectedBtn.classList.add('wrong');
    }
    Array.from(answerButtonsElement.children).forEach(button => {
        if (button.dataset.correct === 'true') {
            button.classList.add('correct');
        }
        button.disabled = true;
    });
    nextButton.style.display = 'block';
    updateProgessBar();
}

function showScore() {
    resetState();
    questionElement.innerHTML = `Your score is ${score} out of ${questions.length}!`;
    nextButton.innerHTML = 'Try Again';
    nextButton.style.display = 'block';
}
    


function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
    updateProgessBar ();
}

function updateProgessBar() {

    const progressValue = (currentQuestionIndex / questions.length) * 100;
    progressBar.value = progressValue;
}

function shuffleQuestions() {
    for (let i = questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questions[i], questions[j]] = [questions[j], questions[i]];
    }
}


nextButton.addEventListener('click', () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    }else {
        startQuiz();
    }
});

startQuiz();