var questions = [ 
    {
        // question 0
        title: "Commonly used data types do NOT include:",
        choices: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
        correctAnswer: "3"
    },
    {
        // question 1
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["1. quotes", "2. curly brackets", "3. parentheses", "4. square brackets"],
        correctAnswer: "3"
    },
    {
        // question 2
        title: "Arrays in Javascript can be used to store ____.",
        choices: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
        correctAnswer: "4"
    },
    {
        // question 3
        title: "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["1. commmas", "2. curly brackets", "3. quotes", "4. parentheses"],
        correctAnswer: "3"
    },
    {
        // question 4
        questititleon: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["1. Javascript", "2. terminal/bash", "3. for loops", "4. console.log"],
        correctAnswer: "4"
    }
];

// start quiz
function startQuiz() {
    // hide start screen
    startContainerEl.setAttribute('class', 'hide');
    // show question screen
    questionContainerEl.setAttribute('class', 'show');
    // start timer
    startTimer();
    startQuiz();
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

