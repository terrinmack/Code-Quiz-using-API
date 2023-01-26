var questions = [ 
    {
        // question 0
        title: "Commonly used data types do NOT include:",
        a: "Strings", 
        b: "Booleans", 
        c: "Alerts", 
        d: "Numbers",
        correctAnswer: "c"
    },
    {
        // question 1
        title: "The condition in an if / else statement is enclosed within ____.",
        a: "Quotes", 
        b: "Curly brackets", 
        c: "Parentheses", 
        d: "Square brackets",
        correctAnswer: "c"
    },
    {
        // question 2
        title: "Arrays in Javascript can be used to store ____.",
        a: "Numbers and strings", 
        b: "Other arrays", 
        c: "Booleans", 
        d: "All of the above",
        correctAnswer: "d"
    },
    {
        // question 3
        title: "String values must be enclosed within ____ when being assigned to variables.",
        a: "Commmas", 
        b: "Curly brackets", 
        c: "Quotes", 
        d: "Parentheses",
        correctAnswer: "c"
    },
    {
        // question 4
        title: "A very useful tool used during development and debugging for printing content to the debugger is:",
        a: "Javascript", 
        b: "2. Terminal/bash", 
        c: "3. For loops", 
        d: "Console.log",
        correctAnswer: "d"
    }
];

// variables
var timer;
var timerCount = 75;
var timerEl = document.querySelector('.time-left')
var startContainerEl = document.querySelector('.start-container');
var questionContainerEl = document.querySelector('.quiz-container');
var viewHighscoreNav = document.querySelector('.view-highscores');
var answersEls = document.querySelector('.answer');
var questionEl = document.querySelector('.question');
var a_text = document.querySelector('#a');
var b_text = document.querySelector('#b');
var c_text = document.querySelector('#c');
var d_text = document.querySelector('#d');
var startBtn = document.querySelector('.start-btn')
var submitBtn = document.querySelector('.submit-btn')

let currentQuestion = 0;
let score = 0;

// start quiz
function startQuiz() {
    // hide start screen
    startContainerEl.setAttribute('id', 'hide');
    // show question screen
    questionContainerEl.setAttribute('id', 'show');
    // hide viewhighscore button
    var currentQuestionData = questions[currentQuestion];
    questionEl.innerText = currentQuestionData.title;
    a_text.innerText = currentQuestionData.a;
    b_text.innerText = currentQuestionData.b;
    c_text.innerText = currentQuestionData.c;
    d_text.innerText = currentQuestionData.d;
    // start timer
    startTimer();
    console.log(questions)
}

// start timer
function startTimer() {
    timer = setInterval(function() {

        timerCount--;
        timerEl.innerHTML = timerCount;

         if (timerCount === 0) {
            clearInterval(timer);
            endQuiz();
        }
    }, 1000)
    console.log(timer)
}

startBtn.addEventListener('click', startQuiz)