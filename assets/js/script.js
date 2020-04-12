var scoreElement = document.getElementById("score");
var score = localStorage.getItem("score")
scoreElement.textContent = score

// localStorage.setItem("firstNameElement", firstNameElement.value);
var firstNameElement = document.getElementById("formGroupExampleInput")


var btn = document.getElementById("button1")
btn.addEventListener("click", function () {
    localStorage.setItem("firstName", firstNameElement.value)
    window.location = "./score.html"
})


// localStorage.getItem("firstName")

// firstNameElement.textContent = firstName
// console.log(firstName)


// setting local storage for the initials to be stored at the end
// localStorage.setItem("firstName", JSON.stringify(highScoreList)); {

// }

//submit prevent form - this will stop it from going to the 404 page
//  

// run this when the button is pressed