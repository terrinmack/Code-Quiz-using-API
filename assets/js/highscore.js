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