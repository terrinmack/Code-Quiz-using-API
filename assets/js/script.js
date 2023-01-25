var questions = [ 
    {
        // question 0
        question: "Commonly used data types do NOT include:",
        answers: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
        correctAnswer: "3"
    },
    {
        // question 1
        question: "The condition in an if / else statement is enclosed within ____.",
        answers: ["1. quotes", "2. curly brackets", "3. parentheses", "4. square brackets"],
        correctAnswer: "3"
    },
    {
        // question 2
        question: "Arrays in Javascript can be used to store ____.",
        answers: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
        correctAnswer: "4"
    },
    {
        // question 3
        question: "String values must be enclosed within ____ when being assigned to variables.",
        answers: ["1. commmas", "2. curly brackets", "3. quotes", "4. parentheses"],
        correctAnswer: "3"
    },
    {
        // question 4
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: ["1. Javascript", "2. terminal/bash", "3. for loops", "4. console.log"],
        correctAnswer: "4"
    }
];

// variables
var startContainerEl = document.querySelector('#start-container');
var questionContainerEl = document.querySelector('#question-container');
var endContainerEl = document.querySelector('#end-container');
var highscoreContainerEl = document.querySelector('#highscore-container');

var timerEl = document.querySelector('#timer');
var startBtn = document.querySelector('#start-btn');
var submitBtn = document.querySelector('#submit-btn');
var clearScoreBtn = document.querySelector('#clear-score-btn');
var viewHighscoreBtn = document.querySelector('.highscore-link')

var choicesEl = document.querySelector('#choices');
var responseEl = document.querySelector('#response');

var timer;
var timerCount = 75;
var currentQuestionIndex = 0;
var questionTitle = '';
var answerChoices = '';


// start quiz
function startQuiz() {
    // hide start screen
    startContainerEl.setAttribute('class', 'hide');
    // show question screen
    questionContainerEl.setAttribute('class', 'show');
    // start timer
    startTimer();
}

// render start page/loads
function init() {
    highscoreContainerEl.setAttribute('class','hide');
    startContainerEl.setAttribute('class', 'show');
    endContainerEl.setAttribute('class', 'hide');
    questionContainerEl.setAttribute('class', 'hide');
}

// start timer
function startTimer() {
    timer = setInterval(function() {
        console.log(timer);
        timerCount--;
        timerEl.textContent = timerCount
         if (timerCount === 0) {
            clearInterval(timer);
            endQuiz();
        }
    }, 1000)
}

// render questions 

// highscore header button
function viewHighscores() {
    highscoreContainerEl.setAttribute('class','show');
    startContainerEl.setAttribute('class', 'hide');
    endContainerEl.setAttribute('class', 'hide');
    questionContainerEl.setAttribute('class', 'hide');
}

// button listeners
startBtn.addEventListener('click', startQuiz);
