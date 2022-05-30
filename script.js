
// An array with the questions and answers
var questions = [
    {
      question1:  "What is a Javascipt Array?",
      answer1: "A piece of code which allows you style a webpage",
      answer2: "A piece of code which allows you to cycle through a number of stored variables",
      answer3: "A container which allows you store data"
    },
    {
      question2: "What year was Javascript invented?",
      answer1: "1985",
      answer2: "1995",
      answer3: "2005"
    },
    {
      question3: "What is a JavaScript If statement?",
      answer1: "A piece of code used to execute code if conditions are true",
      answer2: "A piece of code which allows you to complete math functions",
      answer3: "A piece of code which will store any data if entered by the user"
    }
];
// Where it will tell you if you got the answer wrong or right
var choiceDisplay = document.getElementById("choice-display");
// Where the questions and answers will be displayed
var question1 = document.querySelector(".question");
var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");
// The button to start the quiz
var myBtn = document.querySelector("button");
// A counter to tell you the correct number of answers
let answerCorrect = 3;

var removeListener = function (){
    answer1.removeEventListener("click", answeredOne1False);
    answer2.removeEventListener("click", answeredOne1False);
    answer3.removeEventListener("click", answeredOne1Correct);
}

var answeredOne1False = function(){
    answerCorrect--;
    choiceDisplay.textContent = "You Chose Unwisely!";
    removeListener();
    setTimeout(askQuestion2, 2500);
    console.log(answerCorrect);
    };
var answeredOne1Correct = function(){
    choiceDisplay.textContent = "You Chose Correct!";
    removeListener();
    setTimeout(askQuestion2, 2500);
    console.log(answerCorrect);
};


// var startingTime = 1;
// let time = startingTime * 60;
// var countDownEl = document.getElementById("count-down");



// var updateTime = function (){
//     const minutes = Math.floor(time / 60);
//     let seconds = time % 60;
//     countDownEl.innerHTML =  `${minutes}:${seconds}`;
//     setInterval(updateTime, 1000);
//     clearInterval();
//     time--;
// };

var askQuestion1 = function (){
    question1.textContent = questions[0].question1;
    answer1.textContent = questions[0].answer1;
    answer2.textContent = questions[0].answer2;
    answer3.textContent = questions[0].answer3;
    var clickOne1False = answer1.addEventListener("click", answeredOne1False);
    var clickOne2False = answer2.addEventListener("click", answeredOne1False);
    var clickOne3Correct = answer3.addEventListener("click", answeredOne1Correct);
}

var askQuestion2 = function (){
    question1.textContent = questions[1].question2;
    answer1.textContent = questions[1].answer1;
    answer2.textContent = questions[1].answer2;
    answer3.textContent = questions[1].answer3;

}

var startQuiz = function (){
    


    askQuestion1();
    // updateTime();
    
}

myBtn.addEventListener("click", startQuiz);