
     var startButton = document.querySelector("#start-btn");
     var questionBox = document.querySelector("#questions-box");
     var questionTitle = document.querySelector("#question");
     var time = document.querySelector("#time")
     var intro = document.querySelector("#introduction");
     var answerButtons = document.querySelector("#answer-buttons");
     var resultBox = document.querySelector("#result-box");
     var result = document.querySelector("#result");
     var results = document.querySelector("#results");
     var finalScore = document.querySelector("#final-score");
     var initials = document.querySelector("#initials");
     var submitButton = document.querySelector("#submit-btn");
     var correctAnswer;
     var score = 0;
     var counter = 75;
     var currentQuestion = 0;
     var countDown;
     
     var containerHighScoresEl = document.getElementById("high-score-container")
     var ViewHighScoreEl = document.getElementById("view-high-scores")
     var listHighScoreEl = document.getElementById("high-score-list")
     var btnClearScoresEl = document.querySelector("#clear-high-scores")
     var HighScores = []

     // Timer 
     function setTime() {   
         counter = 75;     
         countDown = setInterval(function() {
             counter --;        
             if (counter < 0) {                        
                 endQuiz();
             } else {
                 time.innerText = counter; 
             }
         }, 1000);
     };
     // Timer ends
     
     // Start quiz
     function startQuiz() {    
         intro.classList.add("hide");
         questionBox.classList.remove("hide");
         currentQuestion = 0;    
     
         //start timer when first question is revealed
         setTime();
     
         //show the first question
         showNextQuestion();
     };
     // Start quiz ends
     
     // Generate questions
     function showNextQuestion() {    
         var question = questions[currentQuestion];
         console.log(question);    
         console.log("Question #" + currentQuestion);
         if (question === undefined) {
             endQuiz();
     
         } else {
             questionTitle.innerHTML = question.title;
             question.choices.forEach(function(choice, index) {
                 var button = document.querySelector("#answer" + index);
                 button.innerHTML = choice;     
                 button.setAttribute("correctAnswer", question.correctAnswer);            
                 
             });
         }
         console.log(question);
     }
     // Generate questions
     
     // End quiz
     function endQuiz() {
         questionBox.classList.add("hide");
         results.classList.remove("hide");
         finalScore.innerHTML = score;   
         clearInterval(countDown); 
     }
     //End quiz ends
     
     // Questions, options, answers
     var questions = [
         {
             title: "Commonly used data types do not include:",
             choices: ["strings", "booleans", "alerts", "numbers",],
             correctAnswer: "alerts",
         },
         {
             title: "The condition in an if / else statement is enclosed with ____ ?",
             choices: ["quotes", "curly brackets", "parenthesis", "square brackets",],
             correctAnswer: "parenthesis",
         },
         {
             title: "Arrays in JavaScript can be used to store ____ ?",
             choices: ["Numbers & Strings", "Other arrays", "Booleans", "All of the above",],
             correctAnswer: "All of the above",
         },
         {
             title: "String Values must be enclosed within ____ when being assigned to variables.",
             choices: ["Commas", "Curly brackets", "Quotes", "Parenthesis",],
             correctAnswer: "Quotes",
         },
         {
             title: "A very useful tool used during development and debugging for printing content to the debugger is:",
             choices: ["Javascript", "Terminal/Bash", "for loops", "console.log",],
             correctAnswer: "console.log",
         },
     ];
     // Questions, options, answers ends
     
     startButton.addEventListener("click", startQuiz);
     
     // Submit button
    //  submitButton.addEventListener("click", function() {
    //      console.log(initials.value);
    //      var userInitials = initials.value;
    //      var storage = JSON.parse(localStorage.getItem("highscores"));
    //      if (storage === null) {
    //          storage = [];
    //      }
    //      storage.push({
    //          initials: userInitials,
    //          score: score
    //      });
    //      localStorage.setItem("highscores",JSON.stringify(storage));
    //      window.location = "./assets/highscore.html";
    //  });
     // Submit button ends
     
     // Finding answers loop: correct = +20 points, incorrect = -10 seconds on timer.
     var numberOfAnswers = 4;
     for (i = 0; i < numberOfAnswers; i++) {
          
         var button = document.querySelector("#answer" + i);           
         button.addEventListener("click", function(){     
             resultBox.classList.remove("hide");    
         
             if (this.getAttribute("correctAnswer") == this.innerHTML) {
                 result.innerHTML = "Correct!";
                 score += 20;
             } else {
                 result.innerHTML = "Wrong!";
                 counter -= 10;
             }
             currentQuestion++;
             showNextQuestion();
         });
         }
     // Finding answers loop ends


// high scores

var storage = JSON.parse(localStorage.getItem("highscores"));
var container = document.getElementById("highscore-container");
var clearHighScores = document.querySelector("#clear-high-scores");

if (storage === null) {
    empty()
} else {
    showHighScores()
}

function empty() {
    // clear the container
    container.innerHTML = "";
    //create element h1
    var highscore = document.createElement("h1");
    //set the elements text content = no highscores
    highscore.textContent = "No high scores";
    // append it to the highscore container
    container.append(highscore);
}

function showHighScores() {
    // clear the container
    container.innerHTML = "";
    // create ul
    var userHighscore = document.createElement("ul");
    // append ul to container
    container.append(userHighscore);
    // then make a for loop through storage
    for (var i = 0; i < storage.length; i++) {
        var listItem = document.createElement("li")
        listItem.textContent = "name: " + storage[i].initials + " score: " + storage[i].score;
        container.append(listItem);
    }
}

clearHighScores.addEventListener("click", function() {
    localStorage.setItem("highscores", null);
    empty();
});


  //create high score values
  var createHighScore = function(event) { 
    event.preventDefault() 
    var initials = document.querySelector("#initials").value;
    if (!initials) {
      alert("Enter your intials!");
      return;
    }

  formInitials.reset();

  var HighScore = {
  initials: initials,
  score: score
  } 

  //push and sort scores
  HighScores.push(HighScore);
  HighScores.sort((a, b) => {return b.score-a.score});

//clear visibile list to resort
while (listHighScoreEl.firstChild) {
   listHighScoreEl.removeChild(listHighScoreEl.firstChild)
}
//create elements in order of high scores
for (var i = 0; i < HighScores.length; i++) {
  var highscoreEl = document.createElement("li");
  highscoreEl.ClassName = "high-score";
  highscoreEl.innerHTML = HighScores[i].initials + " - " + HighScores[i].score;
  listHighScoreEl.appendChild(highscoreEl);
}

  saveHighScore();
  displayHighScores();

}
//save high score
var saveHighScore = function () {
    localStorage.setItem("HighScores", JSON.stringify(HighScores))
        
}

//load values/ called on page load
var loadHighScore = function () {
    var LoadedHighScores = localStorage.getItem("HighScores")
        if (!LoadedHighScores) {
        return false;
    }

    LoadedHighScores = JSON.parse(LoadedHighScores);
    LoadedHighScores.sort((a, b) => {return b.score-a.score})


    for (var i = 0; i < LoadedHighScores.length; i++) {
        var highscoreEl = document.createElement("li");
        highscoreEl.ClassName = "high-score";
        highscoreEl.innerText = LoadedHighScores[i].initials + " - " + LoadedHighScores[i].score;
        listHighScoreEl.appendChild(highscoreEl);

        HighScores.push(LoadedHighScores[i]);
        
    }
}  
