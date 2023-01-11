// timer
var timeLeft = 60


console.log("test");

// event listener click
document.getElementById("buttonStart").addEventListener("click", function(){
    const intervalID = setInterval(myCallback, 1000);
    function myCallback()
    {
        timeLeft = timeLeft - 1
        document.querySelector("header").innerHTML=timeLeft;
    
        if (timeLeft === 0) {
            clearInterval(intervalID);
        }
    };    
});

// questions, multiple choice options, and answer
var questions = [
    {
        question : "Commonly used data types do not include:",
        choices: ["string", "boolean", "alert", "number"],
        correctAnswer: "alert"
    },

    {
        question : "Commonly used data types do not include:",
        choices: ["string", "boolean", "alert", "number"],
        correctAnswer: "alert"
    },
    
    {
        question : "Commonly used data types do not include:",
        choices: ["string", "boolean", "alert", "number"],
        correctAnswer: "alert"
    },

    {
        question : "Commonly used data types do not include:",
        choices: ["string", "boolean", "alert", "number"],
        correctAnswer: "alert"
    },
];


var currentQuestion = 0