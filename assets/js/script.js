// question aray
var questions = [
    { q: 'Commonly used data types do not include:', 
          a: '3. alerts', 
          choices: [{choice: '1. string'}, {choice: '2. booleans'}, {choice: '3. alerts'}, {choice: '4. numbers'}]
    },
    { q: '"The condition in an if / else statement is enclosed with ____ ?', 
          a: '3. paranthesis', 
          choices: [{choice: '1. quotes'}, {choice: '2. curly brackets'}, {choice: '3. paranthesis'}, {choice: '4. square brackets'}]
    },
    { q: 'Arrays in Javascript can be used to store ____?', 
          a: '4. all of the above', 
          choices: [{choice: '1. numbers & strings'}, {choice: '2. other arrays'}, {choice: '3. booleans'}, {choice: '4. all of the above'}]
    },
    { q: 'String Values must be enclosed within ____ when being assigned to variables.', 
          a: '3. quotes', 
          choices: [{choice: '1. commas'}, {choice: '2. curly brackets'}, {choice: '3. quotes'}, {choice: '4. paranthesis'}]
    },
    { q: '"A very useful tool used during development and debugging for printing content to the debugger is:', 
          a: '4. console.log', 
          choices: [{choice: '1. javascript'}, {choice: '2.  terminal/bash'}, {choice: '3. for loops'}, {choice: '4. console.log'}]
    },
]

// set variables by get element id!
var questionContainerE1 = document.getElementById('question-container');
var startContainerE1 = document.getElementById('intro-container');
var endContainerE1 = document.getElementById('end-container');
var scoreContainerE1 = document.getElementById('score-banner');
var initialsFormE1 = document.getElementById('initials-form');
var highScoreContainerE1 = document.getElementsByTagName('high-score-container');
var viewHighScoreE1 = document.getElementById('view-high-scores');
var highScoreListE1 = document.getElementById('high-score-list');
var correctE1 = document.getElementById('correct');
var wrongE1 = document.getElementById('wrong');

var startGameBtnE1 = document.querySelector('#start-game');
var goBackBtnE1 = document.querySelector('#go-back');
var clearScoreBtnE1 = document.querySelector('#clear-high-scores');

var questionE1 = document.getElementById('question');
var answerChoices = document.getElementById('answer-choices');
var timerE1 = document.getElementById('timer');
var score = 0;
var counter =75;
var timeleft;
var gameover;

var highScores = [];
var shuffledQuestions
var currentQuestion = 0;

// time set
function setTime() {
    counter = 75;
    timeleft = setInterval(function() {
        counter --;
        if (counter < 0) {
            gameover();
        } else {
            timerE1.innerText = counter;
        }
    }, 1000);
};
// time set end

// start quiz
var startGame = function() {
    startContainerE1.classList.add('hide');
    startContainerE1.classList.remove('show');
    questionContainerE1.classList.remove('hide');
    questionContainerE1.classList.add('show');
    setTime();
    setQuestion()
}

// start questions
var setQuestion = function() {
    restAnswers()
    showQuestion(shuffledQuestions[currentQuestion]) 
};

var restAnswers = function() {
    while (answerChoices.firstChild) {
        answerChoices.removeChild(answerChoices.firstChild)
    };
};

var showQuestion = function(index) {
    questionE1.innerText = index.q
    for (var i = 0; i <index.choices.length; i++) {
        var answerbutton = document.createElement('button')
        answerbutton.innerText = index.choices[i].choice
        answerbutton.classList.add('btn')
        answerbutton.classList.add('answerbtn')
        answerbutton.addEventListener('click', answerCheck)
        answerChoices.appendChild(answerbutton)
    }
};

// show correct and wrong on screen. remove hide
var correctAnswer = function() {
    if (correctE1.className = 'hide') {
        correctE1.classList.remove('hide')
        correctE1.classList.add('banner')
        wrongE1.classList.add('hide')
        wrongE1.classList.remove('banner')
    }
}

var wrongAnswer = function() {
    if (wrongE1.className = 'hide') {
        wrongE1.classList.remove('hide')
        wrongE1.classList.add('banner')
        correctE1.classList.add('hide')
        correctE1.classList.remove('banner')
    }
}

var answerCheck = function(event) {
    var selectedanswer = event.target
        if (shuffledQuestions[currentQuestion].a === selectedanswer.innerText){
            correctAnswer()
            score = score + 10

        } else {
            wrongAnswer()
            score = score - 10; 
            if (score < 0) {
                score = 0
            }
            timeleft = timeleft - 10;
        };

        currentQuestion++
        if (shuffledQuestions.length > currentQuestion +1) {
            setQuestion()
        } else {
            gameover = 'true';
            showScore();
        }
}

var showScore = function () {
    
}