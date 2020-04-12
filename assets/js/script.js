var scoreElement = document.getElementById("score");
var score = localStorage.getItem("score")
scoreElement.textContent = score

var firstNameElement = document.getElementById("formGroupExampleInput")
var firstName = localStorage.getItem("firstName")
firstNameElement.textContent = firstName
console.log(firstName)


// setting local storage for the initials to be stored at the end
localStorage.setItem("firstName", JSON.stringify(highScoreList)); {

}
