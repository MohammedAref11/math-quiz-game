let numEL1 = document.getElementById("num1-el"); 
let numEl2 = document.getElementById("num2-el"); 

let userInput = document.getElementById("input-el"); 

let operatorEl = document.getElementById("oparation-el");

let userAnswerEl = document.getElementById("user-answer-el"); 
let correctAnswerEl = document.getElementById("correct-answer-el"); 

let userAnswer = 0; 

    let ranNum1 = Math.floor(Math.random() * 100 + 1); 
    let ranNum2 = Math.floor(Math.random() * 100 + 1);

function addition() { 
    let ranNum1 = Math.floor(Math.random() * 100 + 1); 
    let ranNum2 = Math.floor(Math.random() * 100 + 1);
    userAnswer = ranNum1 + ranNum2;
    operatorEl.textContent = "+";

    numEl2.textContent = ranNum2; 
    numEL1.textContent = ranNum1; 

    userInput.value = ""; 
    correctAnswerEl.textContent = "Correct Answer:";
    userAnswerEl.textContent = "Your Answer:";
}

function subtraction() { 

    let ranNum1 = Math.floor(Math.random() * 100 + 1); 
    let ranNum2 = Math.floor(Math.random() * 100 + 1);
    
    userAnswer = ranNum1 - ranNum2; 
    operatorEl.textContent = "-"; 

    numEl2.textContent = ranNum2; 
    numEL1.textContent = ranNum1; 

    userInput.value = ""; 
    correctAnswerEl.textContent = "Correct Answer:"
    userAnswerEl.textContent = "Your Answer:"
}

function mutiplication() { 

    let ranNum1 = Math.floor(Math.random() * 100 + 1); 
    let ranNum2 = Math.floor(Math.random() * 100 + 1);
    
    userAnswer = ranNum1 * ranNum2;
    operatorEl.textContent = "x"; 
    numEl2.textContent = ranNum2; 
    numEL1.textContent = ranNum1; 

    userInput.value = ""; 
    correctAnswerEl.textContent = "Correct Answer:"
    userAnswerEl.textContent = "Your Answer:"

}

function division() { 

    let ranNum1 = Math.floor(Math.random() * 100 + 1); 
    let ranNum2 = Math.floor(Math.random() * 20 + 1);
    
    userAnswer = ranNum1 / ranNum2;
    userAnswer = userAnswer.toFixed(2); 
    operatorEl.textContent = "÷"; 

    numEl2.textContent = ranNum2; 
    numEL1.textContent = ranNum1; 

    userInput.value = ""; 
    correctAnswerEl.textContent = "Correct Answer:";
    userAnswerEl.textContent = "Your Answer:";
}

function checkAnswer() { 
    let numbInput = Number(userInput.value);

    if (numbInput === userAnswer) { 
        userAnswerEl.textContent = "Your answer: " + numbInput + " 👍"; 
        correctAnswerEl.textContent = "Correct Answer: " + userAnswer; 
    }else { 
        userAnswerEl.textContent = "Your answer: " + numbInput + " 😔"; 
        correctAnswerEl.textContent = "Correct Answer: " + userAnswer; 
    }
}