
// create vars 15 questions, 4 answers each = 60 answers total. 

// var questions = [
{
    // created an array of objects for each question
    //         question: "What is the name of the ship captained by Jean Luc Picard?",
    //         answer: "NCC-1701",
    //         choices: [
    //             "NCC-1701",
    //             "Death Star",
    //             "Firefly",
    //             "Saturn-V",
    //         ]
    //     },
    //     {
    //         question: "What is Data's cats name?",
    //         answer: "Spot",
    //         choices: [
    //             "Kitty",
    //             "Beta",
    //             "Spot",
    //             "Sparky",
    //         ]
    //     },
    //     {
    //         question: "What was Geordi La Forge's station abord the Enterprise?",
    //         answer: "Chief Engineer",
    //         choices: [
    //             "Flight Controller",
    //             "First Officer",
    //             "Chief Operations Officer",
    //             "Chief Engineer",
    //         ]
    //     },
    //     {
    //         question: "What was Data's brothers name?",
    //         answer: "Lore",
    //         choices: [
    //             "Beta",
    //             "Mode",
    //             "Lore",
    //             "Meta",
    //         ]
    //     },
    //     {
    //         question: "Planet Remus is home to which race?",
    //         answer: "Romulans",
    //         choices: [
    //             "Klingons",
    //             "Romulans",
    //             "Orions",
    //             "Andorians",
    //         ]
    //     },
    //     {
    //         question: "What was the ultimate goal of The Borg?",
    //         answer: "Achieve perfection",
    //         choices: [
    //             "Achieve perfection",
    //             "Assimulate civilization",
    //             "Destroy all planets",
    //             "Destroy Earth",
    //         ]
    //     },
    //     {
    //         question: "Deanna Troi is half human, half what?",
    //         answer: "Betazoid",
    //         choices: [
    //             "Romulan",
    //             "Vulcan",
    //             "Betazoid",
    //             "Andoirian",
    //         ]
    //     },
    //     {
    //         question: "Who kept a small holographic portrait of Tasha Yar after her death?",
    //         answer: "Data",
    //         choices: [
    //             "Data",
    //             "Riker",
    //             "Worf",
    //             "Geordi",
    //         ]
    //     },
    //     {
    //         question: "What season did Q first appear?",
    //         answer: "Season 1",
    //         choices: [
    //             "Season 1",
    //             "Season 2",
    //             "Season 3",
    //             "Season 4",
    //         ]
    //     },
    //     {
    //         question: "Which actor played the role of Wesley Crusher?",
    //         answer: "Wil Wheaton",
    //         choices: [
    //             "Patrick Stewart",
    //             "Wil Wheaton",
    //             "Leonardo DiCaprio",
    //             "Jonathan Frakes",
    //         ]
    //     }

    // ]


    //create function for "try again" button = to send user back to the start, resetting everything


    // create a way for the all 15 questions to loop through while staying on the same page

    // for (var i = 0; i < questions.length; i++) {
    //     console.log(questions[i]);
    // }

    // for (var i = 0; i < answers.length; i++) {
    //     console.log(answers[i]);
    // }



    // create a function for the "make it so" button on the questions page to move to the next set of questions


    // create a way for the multiple choice selections to verify if true or false and calculate the score





    // Set the timer countdown to begin at 2 minutes
    var countDownTimer = new Date(new Date().getTime() + 2 * 60000);

    // add if statement here to deduct 10 seconds from the timer if answer is incorrect
    // create a way for the timer to send user to Game Over page only if time = 0 while still in question selection stage (make timer end when all questions answered)
    // create a way for timer background color to turn red at 30 seconds

    // Update the count down every 1 second
    var x = setInterval(function () {

        var now = new Date().getTime();

        // Find the distance between now and the count down start
        var distance = countDownTimer - now;

        // Time calculations for minutes and seconds
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="timer"
        document.getElementById("timer").innerHTML = minutes + "m " + seconds + "s ";
        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("timer").innerHTML = "You Boldy Lost";
        }
    }, 1000);
}




// create a function for the submit button on the enter initials form, to actually submit and store the initials alongside their score. Once clicked, move to a new page displaying the leader board with users initials and score added

// make sure the scoreboard can store everyones entries even when refreshed.