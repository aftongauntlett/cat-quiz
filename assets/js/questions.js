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

function nextQuestion() {

    while (questionArea.children.length > 0) {
        questionArea.removeChild(questionArea.children[0])
    }

    var currentQuestion = questions[currentQuestionIndex]
    myQuestion.innerHTML = currentQuestion.question


    // Create a for loop to iterate over current question.choices

    for (var i = 0; i < currentQuestion.choices.length; i++) {
        const button = document.createElement('button')
        button.textContent = currentQuestion.choices[i]
        button.setAttribute('id', 'question' + i)
        questionArea.appendChild(button);
        setupClickHandler(i)

    }
}


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

nextQuestion();

setInterval(function () {
    if (countDownTimer < 0) {
        endGame()
    } else {
        countDownTimer--
    }
    const timer = document.getElementById("timer")
    var timerString = "";
    if (countDownTimer > 60) {
        timerString += Math.floor(countDownTimer / 60) + "m ";
    }

    //used mod to get seconds
    var seconds = countDownTimer % 60
    timerString += seconds + "s"
    timer.innerHTML = timerString
}, 1000)

function endGame() {
    window.location.pathname = "./gameover.html"
}



// Ran out of time to create the scoreboard and saving it local storage. 