// question arrays
var questions = [ 
    {
        // question 0
        title: "Commonly used data types do NOT include:",
        choices: ["Strings", "Booleans", "Alerts", "Numbers",],
        correctAnswer: "Alerts"
    },
    {
        // question 1
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["Quotes", "Curly brackets", "Parentheses", "Square brackets"],
        correctAnswer: "Parentheses"
    },
    {
        // question 2
        title: "Arrays in Javascript can be used to store ____.",
        choices: ["Numbers and strings", "Other arrays", "Booleans", "All of the above"],
        correctAnswer: "All of the above"
    },
    {
        // question 3
        title: "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["Commmas", "Curly brackets", "Quotes", "Parentheses"],
        correctAnswer: "Quotes"
    },
    {
        // question 4
        title: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["Javascript", "Terminal/bash", "For loops", "Console.log"],
        correctAnswer: "Console.log"
    }
];

// variables
var timer;
var timerCount = 15;
var timerEl = document.querySelector('.time-left')

var startContainerEl = document.querySelector('.start-container');
var questionContainerEl = document.querySelector('.quiz-container');
var resultContainerEl = document.querySelector('.result-container');
var highscoreContaineEl = document.querySelector('.highscore-container');

var finalScore = document.querySelector('#final-score');

var questionTitle = document.querySelector('.question');
var feedbackContainer = document.querySelector('.feedback');
var feedbackEl = document.querySelector('.feedback-text')

var startBtn = document.querySelector('.start-btn');
var submitBtn = document.querySelector('.submit-btn');

var currentQuestion = 0;
var score = 0;

// render start page 
function init() {

}
// start quiz
function startQuiz() {
    // hide start screen
    startContainerEl.setAttribute('id', 'hide');
    // show question screen
    questionContainerEl.setAttribute('id', 'show');
    // start timer
    startTimer();
    showNextQuestion();
}

// start timer
function startTimer() {
    timer = setInterval(function() {

        timerCount--;
        timerEl.innerHTML = timerCount;

         if (timerCount === 0) {
            clearInterval(timer);
            endQuiz();
        } if (timerCount < 0) {
            clearInterval(timer);
            endQuiz();
        }
    }, 1000)

    console.log(timer)
}

// start button event listener
startBtn.addEventListener('click', startQuiz)

// show questions
function showNextQuestion() {
    var question = questions[currentQuestion];

    if (question === undefined) {
        endQuiz();
    } else {
        questionTitle.innerHTML = question.title;
        question.choices.forEach(function(choice, index) {
            var button = document.querySelector('#answer' + index);
            button.innerHTML = choice;
            button.setAttribute('correctAnswer', question.correctAnswer)
        });
    }
    console.log('Question #' + currentQuestion);
    console.log(question);
}

// check answer/looping
// why wont the points keep adding? why does the timer go neg?
var answerSelections = 4;
for (i = 0; i < answerSelections; i++) {

    var button = document.querySelector('#answer' + i);
    button.addEventListener('click', function () {
        feedbackContainer.setAttribute('id', 'show');
            if (this.getAttribute('correctAnswer') == this.innerHTML) {
                feedbackEl.innerText = 'Correct!'
                score = + 10;
            } else {
                feedbackEl.innerText = 'Wrong!';
                timerCount = - 10; 
                    if (timerCount < 0) {timerCount = 0}
            }
            currentQuestion++;
            showNextQuestion();

            console.log(button)
    });
}

// end quiz
function endQuiz () {
    // end timer
    clearInterval(timer);
    // hide questions
    questionContainerEl.setAttribute('id', 'hide');
    // show last correct/wrong answer
    feedbackContainer.setAttribute('id', 'show');
    // show results
    resultContainerEl.setAttribute('id', 'show');
    // show final score
    finalScore.innerText = score;
    
}

// submit score!
submitBtn.addEventListener('click', function(event) {
    event.preventDefault();
    // hide results page
    resultContainerEl.setAttribute('id', 'hide');
    // show highscore page
    highscoreContaineEl.setAttribute('id', 'show');


});
