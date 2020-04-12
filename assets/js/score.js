var scoreElement = document.getElementById("score");
var score = localStorage.getItem("score")
scoreElement.textContent = score
var firstName = document.getElementById("firstName")
firstName.textContent = localStorage.getItem("firstName")

