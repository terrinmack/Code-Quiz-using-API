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
    },
    {
        // question 5
        title: "BONUS: What breed of dog(s) does Terri own?",
        choices: ["German Shepherd", "Australian Shepherd", "French Bulldog", "Shiba"],
        correctAnswer: "Australian Shepherd"
    },
];

// variables
var timer;
var timerCount = 75;
var timerEl = document.querySelector('.time-left')

var startContainerEl = document.querySelector('.start-container');
var questionContainerEl = document.querySelector('.quiz-container');
var resultContainerEl = document.querySelector('.result-container');
var highscoreContainerEl = document.querySelector('.highscore-container');

var highscoreList = document.querySelector('.highscore-list')

var questionTitle = document.querySelector('.question');
var feedbackContainer = document.querySelector('.feedback');
var feedbackEl = document.querySelector('.feedback-text')

var btnGrd = document.querySelector('.btn-grid')
var startBtn = document.querySelector('.start-btn');
var submitBtn = document.querySelector('.submit-btn');
var viewHighscoreBtn = document.querySelector('.view-highscores');

var currentQuestion = 0;
var score = 0;

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
                score += 10;
            } else {
                feedbackEl.innerText = 'Wrong!';
                timerCount -= 10; 
                    if (timerCount < 0) {timerCount = 0}
            }
            currentQuestion++;
            showNextQuestion();

            console.log(button)
            console.log(feedbackEl.innerText)
    });
}

// end quiz
function endQuiz () {
    // end timer
    clearInterval(timer);
    // hide questions
    questionTitle.setAttribute('id', 'hide');
    btnGrd.setAttribute('id', 'hide')
    // show results
    resultContainerEl.setAttribute('id', 'show');
    // show final score
    var finalScorePrompt = document.querySelector('.your-final-score');
    finalScorePrompt.textContent = 'Your final score is: ' + score + '!';
};

// submit score button
submitBtn.addEventListener('click', function() {
    highscoreContainerEl.setAttribute('id', 'show');
    var initials = document.querySelector('#initials').value;
    if (initials === null) {
        console.log('No initials entered');
    } else {
        var finalScore = {
            initials: initials,
            score: score
        }
        console.log(finalScore);
        var allScores = localStorage.getItem('allScores');
        if (allScores === null) {
            allScores = [];
        } else {
            allScores = JSON.parse(allScores);
        }
        allScores.push(finalScore);
        var newScore = JSON.stringify(allScores);
        localStorage.setItem('allScores', newScore);

        console.log(allScores)
        renderHighscores();
    }
})

// creating list elements for highscores
var allScores = localStorage.getItem('allScores');
allScores = JSON.parse(allScores);

if (allScores !==null) {
    for (var i = 0; i < allScores.length; i++) {
        var list = document.createElement('li');
        list.textContent = allScores[i].initials + "   - " + allScores[i].score;
        highscoreList.appendChild(list);
    }
}

// render score page
function renderHighscores() {
    resultContainerEl.setAttribute('id', 'hide');
    feedbackContainer.setAttribute('id', 'hide');
    highscoreContainerEl.setAttribute('id', 'show');
}

viewHighscoreBtn.addEventListener('click', function(event){
    event.preventDefault()
    clearInterval(timer);
    // hide start page
    startContainerEl.setAttribute('id', 'hide');
    // if questions are opened, hide question page
    questionContainerEl.setAttribute('id', 'hide');
    // if results are opened, hide results
    resultContainerEl.setAttribute('id', 'hide');
    // show highscsore page
    highscoreContainerEl.setAttribute('id', 'show');
})

var clear = document.querySelector('.clear-highscores')
clear.addEventListener('click', function(event) {
    event.preventDefault()
    localStorage.clear(allScores)
    window.location.reload()
})