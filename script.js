
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
      question3: "What is a JavaScript 'If' statement?",
      answer1: "A piece of code that will be executed based on if conditions are true or false",
      answer2: "A piece of code which allows you to complete math functions",
      answer3: "A piece of code which will store any data if entered by the user"
    }
];

// the timer function begins when the start button is pressed
var timer = document.getElementById("count-down");
var counter = 30;

var countDown = function (){
    
    setInterval(function(){
        counter--;

        if (counter >= 0){
            timer.innerHTML = counter;
        };

        if (counter <= 3){
            timer.style.color = "var(--fifth)";
            timer.style.fontWeight = "600";
        };

        if (counter == 0){
            question1.textContent = "";
            answer1.textContent = "";
            answer2.textContent = "";
            answer3.textContent = "";
            removeListener1();
            removeListener2();
            removeListener3();
            choiceDisplay.textContent = "Time Is Up";
            myBtn.textContent = "Try Again?";
            clearInterval(countDown);
            myBtn.addEventListener("click", tryAgain());
        };

    }, 1000);
};

// a restart quiz feature
var tryAgain = function (){
    counter = counter * 0 + 30;
    finalScore = finalScore * 0 + 3;
    timer.style.color = "var(--fourth)";
    textInput.style.display = "none";
    startQuiz();
};


// Where it will tell you if you got the answer wrong or right
var choiceDisplay = document.getElementById("choice-display");

// Where the questions and answers will be displayed
var question1 = document.querySelector(".question");
var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");


// The button to start the quiz
var myBtn = document.querySelector(".my-btn");

// array which will hold the submitted username initials
var names = [];

// array which will store the final score
var finalScoreArray = [];

// Submit btn
var initBtn = document.querySelector("#initial-submit");
var textInput = document.getElementById("text-input");

// Using the event listener on the bottom of the page, we will push the
var pushNames = function (){
    event.preventDefault();
    var textValue = textInput.value;
    names.push(textValue + " " + finalScore);
    finalScoreArray.push(finalScore);
    saveNames();
    saveScore();
    console.log(names);
}

// A counter to tell you the correct number of answers
let finalScore = 3;

// after the event fires, remove the event listeners
var removeListener1 = function (){
    answer1.removeEventListener("click", answeredOne1False);
    answer2.removeEventListener("click", answeredOne1False);
    answer3.removeEventListener("click", answeredOne1Correct);
}

var removeListener2 = function (){
    answer1.removeEventListener("click", answeredTwo1False);
    answer2.removeEventListener("click", answeredTwo1Correct);
    answer3.removeEventListener("click", answeredTwo1False);
};

var removeListener3 = function (){
    answer1.removeEventListener("click", answeredThree1Correct);
    answer2.removeEventListener("click", answeredThree1False);
    answer3.removeEventListener("click", answeredThree1False);
};

// if you got the 1st answer wrong... 
var answeredOne1False = function(){
    finalScore--;
    counter = counter - 5;
    choiceDisplay.textContent = "You Chose Unwisely! 5 Seconds Deducted";
    removeListener1();
    setTimeout(askQuestion2, 2500);
    console.log(finalScore);
    };

// if you got the 1st answer correct
var answeredOne1Correct = function(){
    choiceDisplay.textContent = "You Are Correct!";
    removeListener1();
    setTimeout(askQuestion2, 2500);
    console.log(finalScore);
};

// if you got the 2nd answer wrong
var answeredTwo1False = function (){
    finalScore--;
    counter = counter - 5;
    choiceDisplay.textContent = "You Chose Unwisely! 5 Seconds Deducted";
    removeListener2();
    setTimeout(askQuestion3, 2500);
    console.log(finalScore);
};

// if you got the 2nd answer correct
var answeredTwo1Correct = function (){
    choiceDisplay.textContent = "You Are Correct!";
    removeListener2();
    setTimeout(askQuestion3, 2500);
    console.log(finalScore);
};

// if you got the 3rd answer wrong
var answeredThree1False = function (){ 
    counter = counter * 0;
    timer.innerHTML = "Quiz Is Over";
    choiceDisplay.innerHTML = "Your Final Score Is " + finalScore + " Out Of 3!";
    textInput.style.display = "initial";
    initBtn.style.display = "initial";
    removeListener3();
    console.log(finalScore);
    if (counter === 0){
        timer.innerHTML = "Quiz Is Over";
        choiceDisplay.innerHTML = "Your Final Score Is " + finalScore + " Out Of 3!";
    };
    removeListener3();
    console.log(finalScore);
    myBtn.textContent = "Try Again?";
    myBtn.disabled = false;
    myBtn.addEventListener("click", function() {
        tryAgain();
    });
};

// if you got the 3rd answer correct
var answeredThree1Correct = function (){
    choiceDisplay.textContent = "You Are Correct";
    removeListener3();
    textInput.style.display = "initial";
    initBtn.style.display = "initial";
    counter = counter * 0;
    timer.innerHTML = "Quiz Is Over";
    choiceDisplay.innerHTML = "Your Final Score Is " + finalScore + " Out Of 3!";
    console.log(finalScore);
    counter = counter * 0;
    myBtn.textContent = "Try Again?";
    myBtn.disabled = false;
    myBtn.addEventListener("click", function() {
    tryAgain();
    });
    };
    

// question 1...
var askQuestion1 = function (){
    myBtn.textContent = "Please Choose 👆";
    myBtn.disabled = true;
    question1.textContent = questions[0].question1;
    answer1.textContent = questions[0].answer1;
    answer2.textContent = questions[0].answer2;
    answer3.textContent = questions[0].answer3;
    var clickOne1False = answer1.addEventListener("click", answeredOne1False);
    var clickOne2False = answer2.addEventListener("click", answeredOne1False);
    var clickOne3Correct = answer3.addEventListener("click", answeredOne1Correct);
};

// question 2...
var askQuestion2 = function (){
    question1.textContent = questions[1].question2;
    answer1.textContent = questions[1].answer1;
    answer2.textContent = questions[1].answer2;
    answer3.textContent = questions[1].answer3;
    var clickTwo1False = answer1.addEventListener("click", answeredTwo1False);
    var clickTwo1Correct = answer2.addEventListener("click", answeredTwo1Correct);
    var clickTwo1False = answer3.addEventListener("click", answeredTwo1False);
};

// question 3...
var askQuestion3 = function (){
    question1.textContent = questions[2].question3;
    answer1.textContent = questions[2].answer1;
    answer2.textContent = questions[2].answer2;
    answer3.textContent = questions[2].answer3;
    var clickThree1Correct = answer1.addEventListener("click", answeredThree1Correct);
    var clickThree1False = answer2.addEventListener("click", answeredThree1False);
    var clickThree1False = answer3.addEventListener("click", answeredThree1False);
};




// quiz begins when this function gets called
var startQuiz = function (){  
    countDown();
    askQuestion1();
    loadScore();
    loadNames();
}

// save final score to local storage
let saveScore = function (){
    localStorage.setItem("finalScoreArray", JSON.stringify(finalScoreArray));
}

var loadScore = function (){
    let savedScore = localStorage.getItem("finalScoreArray");
    if (!savedScore){
        return false;
    }
    console.log("Saved scores found");

    savedScore = JSON.parse(savedScore);

    for (i = 0; i < savedScore.length; i++){
        console.log(savedScore[i]);
    }
}

// save names to local storage
let saveNames = function (){
    localStorage.setItem("names", JSON.stringify(names));
}

// load the names from local storage
var loadNames = function(){
    let savedNames = localStorage.getItem("names");
    if (!savedNames){
        return false;
    }
    console.log("Saved names found");

    savedNames = JSON.parse(savedNames);

    for (i = 0; i < savedNames.length; i++){
        console.log(savedNames[i]);
    }
    
};

myBtn.addEventListener("click", startQuiz);
initBtn.addEventListener("click", pushNames);
