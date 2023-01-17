// timer starts at 60s and stops at 0
var timeLeft = 90
// if (timeLeft === 0) {
//     clearInterval(intervalID);
// }
var startPage = document.getElementById("startPage")
var questionsDiv = document.getElementById("questionsDiv")
var answerChoices = document.getElementById("answerChoices")
var question = document.getElementById("question")
var endScreen = document.getElementById("endScreen")
var questionIndex = 0

console.log("test");

// on event listener click, start timer
document.getElementById("buttonStart").addEventListener("click", function(){
    const intervalID = setInterval(myCallback, 1000);
    function myCallback()
    {
        timeLeft = timeLeft -1
        document.querySelector("header").innerHTML=timeLeft;
    
        if (timeLeft <= 0) {
            clearInterval(intervalID);
        }
    };    
    startPage.setAttribute("class", "hide")
    questionsDiv.removeAttribute("class", "hide")
    showQuestions()
});

function showQuestions() {
    var currentQuestion = questions[questionIndex]
    question.textContent = currentQuestion.title
    answerChoices.innerHTML = ""
    currentQuestion.choices.forEach(function(choice){
        var answerButton = document.createElement("button")
        answerButton.textContent = choice
        answerButton.setAttribute("value", choice)
        // attach click event to check answer value againt correct answer
        // check each answer on each button created
        answerButton.onclick = checkAnswer
        answerChoices.append(answerButton)
    })
}

// creates function that evaluates right or wrong
function checkAnswer() {
    if (this.value === questions[questionIndex].correctAnswer) {
        console.log("Correct!");
      } else {
        console.log("Wrong!");
        //   subtract 10s on wrong answer
        timeLeft = timeLeft - 10
        document.querySelector("header").innerHTML=timeLeft;
      }
        questionIndex = questionIndex +1
        showQuestions()
}

// questions, multiple choice options, and answer
var questions = [
    {
        title : "Commonly used data types do not include:",
        choices: ["string", "boolean", "alert", "number"],
        correctAnswer: "alert"
    },

    {
        title : "The condition in an if/else statement is enclosed with ___________.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        correctAnswer: "parentheses"
    },
    
    {
        title : "Arrays in JavaScript can be used to store ____________.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        correctAnswer: "all of the above"
    },

    {
        title : "String values must be enclosed within ___________ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parentheses"],
        correctAnswer: "quotes"
    },
    
    {
        title : "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["JavaScript", "terminal/bash", "for loops", "console log"],
        correctAnswer: "console log"
    },
];


// var result = 