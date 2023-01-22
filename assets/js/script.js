// question arrays
var questions = [
    {
        question: "Commonly used data tuypes do NOT include:",
        options: ["strings", "booleans", "alerts", "numbers",],
        correctAnswer: "alerts",
    },
    {
        question: "The condition in an if / else statement is enclosed with ____?",
        options: ["quotes", "curly brackets", "parenthesis", "square brackets",],
        correctAnswer: "parenthesis",
    },
    {
        question: "Arrays in JavaScript can be used to store ___?",
        options: ["Numbers & Strings", "Other arrays", "Booleans", "All of the above",],
        correctAnswer: "All of the above",
    },
    {
        question: "String Values must be enclosed within ___ when being assigned to variables.",
        options: ["Commas", "Curly brackets", "Quotes", "Parenthesis",],
        correctAnswer: "Quotes",
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        options: ["Javascript", "Terminal/Bash", "for loops", "console.log",],
        correctAnswer: "console.log",
    },
];

// setting all var for script

// timer
var time = document.querySelector("#time");
var counter = 75;
var countDown;

// intro
var intro = document.querySelector("#introduction");

// start
var startButton = document.getElementById("start-btn");

// results 
var resultBox = document.querySelector("#result-box");
var result = document.querySelector("#result");
var results = document.querySelector("#results");

// initial/submit
var submitButton = document.querySelector("initials");
var initials = document.querySelector("#intials");
var finalScore = document.querySelector("#final-score");

// answers
var multipleChoice = document.querySelector("#multiple-choice")
var score = 0;

// questions
var questionBox = document.querySelector("#question-container");
var question = document.querySelector("#question");

// var set done


// start button trigger
startButton.addEventListener("click", startGame); 

// countdown timer
function timeSet() {
    counter = 75;
    countDown = setInterval(function() {
       counter --;
       if (counter < 0) {
        endGame();
       } else {
        time.innerText = counter;
       }
    }, 1000);
};

// start game
function startGame () {
    intro.classList.add("hidden");
    questionBox.classList.remove("hidden");
    currentQuestion = 0;

    setTime();

    nextQuestion();
};

// make question list
function nextQuestion () {
    var question = questions[currentQuestion];
    console.log(question);
    console.log ("Question #" + currentQuestion);
    if (question === undefined) {
        endGame();
    } else {
        question.innerHTML = question.title;
        question.choices.forEach(function(choice, index) {
            var button = document.querySelector("#answer" + index);
            button.innerHTML = choice;
            button.setAttribute("correctAnswer", question.correctAnswer);
        });
    }
    console.log(question);
}

// end game
function endGame() {
    questionBox.classList.add("hidden");
    results.classList.remove("hidden");
    finalScore.innerHTML =score;
    clearInterval(countDown);
}

// store high scores
function storeHighScores(event) {
    event.preventDefault();
    if (initialInput.value === "") {
        alert ("Please enter your initials");
        return;
    }
}

// submit
submitButton.addEventListener("click", function() {
    console.log(initials.value);
    var userInitials = initials.value;
    var storage = JSON.parse(localStorage.getItem("highscores"));
    if (storage === null) {
        storage = [];
    }
    storage.push({
        initials: userInitials,
        score: score
    });
    localStorage.setItem("highscores",JSON.stringify(storage));
    window.location = "./assets/highscore.html";
});

// question loop with points
var answerOptions = 4;
for (i - 0; i < answerOptions; i++) {
    var button = document.querySelector("#answer" + i);
    button.addEventListener("click", function() {
        resultBox.classList.remove("hidden");

        if (this.getAttribute("correctAnswer") == this.innerHTML) {
            result.innerHTML = "Correct!";
            score += 20;
        } else {
            result.innerHTML = "Wrong!"
            counter = -10;
        }
        currentQuestion++;
        nextQuestion();
        
    })
}










