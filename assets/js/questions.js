var countDownTimer = 120;
var myQuestion = document.getElementById("myQuestion")
const questionArea = document.getElementById("question-area");
var score = 0;
var currentQuestionIndex = 0
var questions = [
    {
        // created an array of objects for each question and answer

        question: "What is the name of the ship captained by Jean Luc Picard?",
        answer: "NCC-1701",
        choices: [
            "NCC-1701",
            "Death Star",
            "Firefly",
            "Saturn-V",
        ]
    },
    {
        question: "What is Data's cats name?",
        answer: "Spot",
        choices: [
            "Kitty",
            "Beta",
            "Spot",
            "Xena",
        ]
    },
    {
        question: "What was Geordi La Forge's station abord the Enterprise?",
        answer: "Chief Engineer",
        choices: [
            "Flight Controller",
            "First Officer",
            "Chief Operations Officer",
            "Chief Engineer",
        ]
    },
    {
        question: "What was Data's brothers name?",
        answer: "Lore",
        choices: [
            "Beta",
            "Mode",
            "Lore",
            "Meta",
        ]
    },
    {
        question: "Planet Remus is home to which race?",
        answer: "Romulans",
        choices: [
            "Klingons",
            "Romulans",
            "Orions",
            "Andorians",
        ]
    },
    {
        question: "What was the ultimate goal of The Borg?",
        answer: "Achieve perfection",
        choices: [
            "Achieve perfection",
            "Assimulate civilization",
            "Destroy all planets",
            "Destroy Earth",
        ]
    },
    {
        question: "Deanna Troi is half human, half what?",
        answer: "Betazoid",
        choices: [
            "Romulan",
            "Vulcan",
            "Betazoid",
            "Andoirian",
        ]
    },
    {
        question: "Who kept a small holographic portrait of Tasha Yar after her death?",
        answer: "Data",
        choices: [
            "Data",
            "Riker",
            "Worf",
            "Geordi",
        ]
    },
    {
        question: "What season did Q first appear?",
        answer: "Season 1",
        choices: [
            "Season 1",
            "Season 2",
            "Season 3",
            "Season 4",
        ]
    },
    {
        question: "Which actor played the role of Wesley Crusher?",
        answer: "Wil Wheaton",
        choices: [
            "Patrick Stewart",
            "Wil Wheaton",
            "Leonardo DiCaprio",
            "Jonathan Frakes",
        ]
    }

]

// created a function that displays the questions and runs them until the timer ends or the last question is answered.

function nextQuestion() {

    // when the while loop begins, it will remove all existing buttons (children)

    while (questionArea.children.length > 0) {
        questionArea.removeChild(questionArea.children[0])
    }

    var currentQuestion = questions[currentQuestionIndex]
    myQuestion.innerHTML = currentQuestion.question


    // Created a for loop to iterate over the question choices in the array and created a button

    for (var i = 0; i < currentQuestion.choices.length; i++) {
        const button = document.createElement('button')
        button.textContent = currentQuestion.choices[i]
        button.setAttribute('id', 'question' + i)
        questionArea.appendChild(button);
        setupClickHandler(i)

    }
}

// makes it so clicking the button does something. If the currentQuestion.choices === currentQuestion.answer the score goes up, if they do not match, the timer loses ten seconds. If there are no more questions or the timer reaches 0, it ends the game.

function setupClickHandler(index) {
    const button = document.getElementById('question' + index)
    const currentQuestion = questions[currentQuestionIndex]
    button.addEventListener("click", function () {
        if (currentQuestion.choices[index] === currentQuestion.answer) {
            score++
        } else {
            countDownTimer -= 10
        }
        currentQuestionIndex++
        if (currentQuestionIndex < questions.length) {
            nextQuestion();
        } else {
            endGame();
        }
    })
}

// calls the function for the next question 

nextQuestion();

// created a timer, if countdown reaches 0 - end game. Used mod to get seconds.

setInterval(function () {
    if (countDownTimer < 0) {
        endGame();
    } else {
        countDownTimer--
    }
    const timer = document.getElementById("timer")
    var timerString = "";
    if (countDownTimer > 60) {
        timerString += Math.floor(countDownTimer / 60) + "m ";
    }

    var seconds = countDownTimer % 60
    timerString += seconds + "s"
    timer.innerHTML = timerString
}, 1000)

// what happens when the function endGame is called anywhere in the code. It sends you to the game over page. 
function endGame() {
    window.location = "https://aftongauntlett.github.io/star-trek-quiz/gameover.html"
}



// Ran out of time to create the scoreboard and saving it local storage. Spent a lot of time on Google for this HW assignment.
// var firstNameInput = document.querySelector("#first-name");


// submit.addEventListener("click", function (event) {
//     event.preventDefault();

//     localStorage.setItem("firstname", "");
//     document.getElementById("result").innerHTML = localStorage.getItem("firstname");

