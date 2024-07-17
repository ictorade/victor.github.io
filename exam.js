const questionElement = document.getElementById("questions");
const options = Array.from(document.getElementsByClassName("option-text"));

const questionCounterText = document.getElementById("questionCounter");
const scoreText = document.getElementById("score");

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
let matricNumber = '';

const questions = [
    {
        question: "Which country do I live in?",
        option1: "Nigeria",
        option2: "Ghana",
        option3: "Morocco",
        option4: "Zambia",
        answer: 1
    },
    {
        question: "Which country was once called the Gold Coast?",
        option1: "Nigeria",
        option2: "Ghana",
        option3: "Morocco",
        option4: "Zambia",
        answer: 2
    },
    {
        question: "Which country starts with Z?",
        option1: "Nigeria",
        option2: "Ghana",
        option3: "Morocco",
        option4: "Zambia",
        answer: 4
    }
];

// CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

function startExam() {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
}

function getNewQuestion() {
    if (questionCounter >= MAX_QUESTIONS) {
        // All questions have been answered
        return;
    }
    questionCounter++;
    questionCounterText.innerText = `${questionCounter}/${MAX_QUESTIONS}`;

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    questionElement.innerText = currentQuestion.question;

    options.forEach(option => {
        const number = option.dataset["number"];
        option.innerText = currentQuestion["option" + number];
        option.parentElement.classList.remove("selected", "last-selected"); // Reset classes
    });

    availableQuestions.splice(questionIndex, 1);
    acceptingAnswers = true;
}

options.forEach(option => {
    option.addEventListener("click", handleAnswerClick);
});

function handleAnswerClick(e) {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    if (selectedAnswer == currentQuestion.answer) {
        incrementScore(CORRECT_BONUS);
    }

    if (questionCounter >= MAX_QUESTIONS) {
        selectedChoice.parentElement.classList.add("last-selected");
    } else {
        selectedChoice.parentElement.classList.add("selected");
    }

    setTimeout(() => {
        if (questionCounter < MAX_QUESTIONS) {
            getNewQuestion();
        }
    }, 200);  // Reduced delay to 200 milliseconds for quicker transition
}

function incrementScore(num) {
    score += num;
    scoreText.innerText = score;
}

document.getElementById("submit-btn").addEventListener("click", function() {
    // Get matric number from local storage
    const matricNumber = localStorage.getItem('matricNumber');
    
    if (!matricNumber) {
        alert('Matric number not found. Please re-verify.');
        return;
    }

    // Save score to local storage
    let scores = JSON.parse(localStorage.getItem('scores')) || {};
    scores[matricNumber] = score;
    localStorage.setItem('scores', JSON.stringify(scores));

    // Redirect to projects page
    alert("You have finished this examination. Kindly check your results!")
    window.location.assign("project.html");
});

// Start the exam when the script loads
startExam();

