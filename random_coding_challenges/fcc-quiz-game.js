// Build a Quiz Game

// Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

// User Stories:

//     You should create an array named questions.
//     The questions array should contain at least five objects, each having the keys category, question, choices, and answer.
//     The category key should have the value of a string representing a question category.
//     The question key should have the value of a string representing a question.
//     The choices key should have the value of an array containing three strings, which are alternative answers to the question.
//     The answer key should have the value of a string, representing the correct answer to the question. Also, the value of answer should be included in the choices array.
//     You should have a function named getRandomQuestion that takes an array of questions as a parameter and returns a random question object from the array.
//     You should have a function named getRandomComputerChoice that takes the array of the available choices as a parameter, and returns a random answer to the selected question.
//     You should have a function named getResults that takes the question object as the first parameter and the computer's choice as the second parameter. The function should return The computer's choice is correct! if the answer is correct. Otherwise, it returns The computer's choice is wrong. The correct answer is: <correct-answer>, where <correct-answer> is the value of the correct answer to the chosen question.

// Tests:

//     Passed: 1. You should create an array named questions.
//     Passed: 2. The questions array should contain at least five objects, each having the keys category, question, choices, and answer.
//     Passed: 3. The category key should have the value of a string representing a question category.
//     Passed: 4. The question key should have the value of a string representing a question.
//     Passed: 5. The choices key should have the value of an array containing three strings different from each other.
//     Passed: 6. The answer key should have the value of a string.
//     Passed: 7. The value of answer should be included in the choices array.
//     Passed: 8. You should have a function named getRandomQuestion that takes an array of questions as a parameter and returns a random question object from the array.
//     Passed: 9. You should have a function named getRandomComputerChoice that takes the array of the available choices as a parameter, and returns a random answer to the selected question.

//     Failed: 10. You should have a function named getResults.
//     Failed: 11. Your getResults function should take the question object as the first parameter and the computer's choice as the second parameter.
//     Failed: 12. If the computer choice matches the answer, getResults should return The computer's choice is correct!
//     Failed: 13. If the computer choice doesn't match the answer, getResults should return The computer's choice is wrong. The correct answer is: <correct-answer>, where <correct-answer> is the value of the correct answer to the chosen question.
//     Failed: 14. Your getResults function should use exact equality comparison, not substring matching.

    


//https://www.freecodecamp.org/learn/javascript-v9/lab-quiz-game/lab-quiz-game


let questions = [
  {
    category: "food",
    question: "what is your favorite food?",
    choices: ["pizza","burgers","tacos"],
    answer: "pizza",
  },
  {
    category: "music",
    question: "what is your favorite music?",
    choices: ["rock","rap","country"],
    answer: "rock",
  },
  {
    category: "color",
    question: "what is your favorite color?",
    choices: ["red","blue","yellow"],
    answer: "red",
  },
  {
    category: "restaurant",
    question: "what is your favorite fast food restaurant?",
    choices: ["McDonalds","Burger King","KFC"],
    answer: "Burger King",
  },
  {
    category: "dessert",
    question: "what is your favorite dessert?",
    choices: ["ice cream","cookies","cake"],
    answer: "ice cream",
  },
];


function getRandomQuestion(questionsArr){
  return questionsArr[Math.floor(Math.random() * questionsArr.length)];
}
//console.log("getRandomQuestion(): ", getRandomQuestion(questions));


let choices = getRandomQuestion(questions).choices;
//console.log("choices: ", choices);


function getRandomComputerChoice(choicesParam){
  return choicesParam[Math.floor(Math.random() * choicesParam.length)];
}

//console.log("getRandomComputerChoice(choices): ", getRandomComputerChoice(choices));

let questionObject = getRandomQuestion(questions);
let computerChoice = getRandomComputerChoice(choices);
//console.log("questionObject: ", questionObject);
//console.log("computerChoice: ", computerChoice);

function getResults(questionObjectParam, choiceParam){
  console.log("questionObjectParam: ", questionObjectParam, "\n", "choiceParam: ", choiceParam);
}

getResults(questionObject, computerChoice);



















