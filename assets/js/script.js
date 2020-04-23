var scoreElement = document.getElementById("score");
var score = localStorage.getItem("score")
scoreElement.textContent = score

// localStorage.setItem("firstNameElement", firstNameElement.value);
var firstNameElement = document.getElementById("formGroupExampleInput")


var btn = document.getElementById("button1")
btn.addEventListener("click", function () {
    foo()
    window.location = "./score.html"

})

// current score and current name
// combine them
// store locally
// existing scores


score
// 6
firstNameElement.value
// afton

var scores = JSON.parse(localStorage.getItem("scores"))

if (!scores) {
    scores = []
}


function foo() {
    let user = {
        name: firstNameElement.value,
        score: score
    };
    scores.push(user)
    localStorage.setItem("scores", JSON.stringify(scores))

}