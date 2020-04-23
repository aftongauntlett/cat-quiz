// started with variables
var countDownTimer = 120;
var myQuestion = document.getElementById("myQuestion")
const questionArea = document.getElementById("question-area");
var score = 0;
var currentQuestionIndex = 0
var questions = [
    {
        // created an array of objects for each question and answer
        image: "./assets/images/enterprise2.jpg",
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
        image: "./assets/images/spot.jpg",
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
        image: "./assets/images/geordi.jpg",
        question: "What was Geordi La Forge's station aboard the Enterprise?",
        answer: "Chief Engineer",
        choices: [
            "Flight Controller",
            "First Officer",
            "Chief Operations Officer",
            "Chief Engineer",
        ]
    },
    {
        image: "./assets/images/lore.jpg",
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
        image: "./assets/images/risa.jpg",
        question: "What was planet Risa known for?",
        answer: "Pleasure",
        choices: [
            "Freedom",
            "Justice",
            "Pleasure",
            "Torture",
        ]
    },
    {
        image: "./assets/images/borg.jpg",
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
        image: "./assets/images/troi.jpg",
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
        image: "./assets/images/tashayar.jpg",
        question: "Who kept a holographic portrait of Tasha Yar after her death?",
        answer: "Data",
        choices: [
            "Data",
            "Riker",
            "Worf",
            "Geordi",
        ]
    },
    {
        image: "./assets/images/q.jpg",
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
        image: "./assets/images/wesley2.jpg",
        question: "On which planet did Wesley almost get the death penalty on?",
        answer: "Rubicun III",
        choices: [
            "Bajor",
            "Betazed",
            "Rigel III",
            "Rubicun III",
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
    document.getElementById("myImageTag").setAttribute("src", currentQuestion.image)


    // Created a for loop to iterate over the question choices in the array and created a button
    for (var i = 0; i < currentQuestion.choices.length; i++) {
        const button = document.createElement('button')
        button.textContent = currentQuestion.choices[i]
        button.setAttribute('id', 'question' + i)
        button.setAttribute("class", "buttonCss")
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
            localStorage.setItem("score", score);
            // display score for each answer
            document.getElementById('score').innerHTML = "Score: " + score;


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

    // make it so when the timer gets below 30 seconds the color changes from green to red
    if (countDownTimer < 30) {
        timer.setAttribute("class", "timerRed")
    }

    var seconds = countDownTimer % 60
    timerString += seconds + "s"
    timer.innerHTML = timerString
}, 1000)


// what happens when the function endGame is called anywhere in the code. It sends you to the game over page.
function endGame() {
    window.location = "/star-trek-quiz/gameover.html"
}
// /gameover.html - use this when testing locally












