// var scoreElement = document.getElementById("score");
// var score = localStorage.getItem("score")
// scoreElement.textContent = score
// var firstName = document.getElementById("firstName")
// firstName.textContent = localStorage.getItem("firstName")


// scores is in local storage
// create var to get it out 

var scores = JSON.parse(localStorage.getItem("scores"))
$(".finalScore");

scores.forEach(function (entry) {
    $(".finalScore").append("<div class='col-6'>" + entry.name + "</div>")
    $(".finalScore").append("<div class='col-6'>" + entry.score + "</div>")

});