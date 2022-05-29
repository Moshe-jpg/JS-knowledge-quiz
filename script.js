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

var askQuestions = function (){
    var question1 = document.querySelector(".question");
    question1.textContent = questions[0].question1;
    var answer1 = document.getElementById("answer1");
    answer1.textContent = questions[0].answer1;
    var answer2 = document.getElementById("answer2");
    answer2.textContent = questions[0].answer2;
    var answer3 = document.getElementById("answer3");
    answer3.textContent = questions[0].answer3;
    
}

var startQuiz = function (){
    


    askQuestions();
    // updateTime();
}

document.querySelector("button").addEventListener("click", startQuiz);