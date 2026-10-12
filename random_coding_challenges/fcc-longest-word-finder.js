// Build a Longest Word Finder App
//https://www.freecodecamp.org/learn/javascript-v9/lab-longest-word-in-a-string/build-a-longest-word-finder-app
// In this lab, you will build a function that returns the length of the longest word in the provided sentence.

// For example, in the sentence "The quick brown fox jumped over the lazy dog", the longest word is "jumped", which has a length of 6.

// Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

// User Stories:

//     You should create a function named findLongestWordLength that takes a string as an argument.
//     The function should return the length of the longest word in the string.

// Tests:

//     Passed: 1. You should create a function named findLongestWordLength.
//     Passed: 2. findLongestWordLength should have a single parameter.
//     Passed: 3. findLongestWordLength("The quick brown fox jumped over the lazy dog") should return a number.
//     Passed: 4. findLongestWordLength("The quick brown fox jumped over the lazy dog") should return 6.
//     Passed: 5. findLongestWordLength("May the force be with you") should return 5.
//     Passed: 6. findLongestWordLength("Google do a barrel roll") should return 6.
//     Passed: 7. findLongestWordLength("Googling do a barrel roll") should return 8.
//     Passed: 8. findLongestWordLength("What is the average airspeed velocity of an unladen swallow") should return 8.
//     Passed: 9. findLongestWordLength("What if we try a super-long word such as otorhinolaryngology") should return 19.


// function findLongestWordLength(str){
//     let splitStr = str.split(" ");
//     //console.log("splitStr: ", splitStr);
//     splitStr.sort((a, b) => b.length - a.length);
//     return splitStr[0].length;
// }

function findLongestWordLength(str){
    let splitStr = str.split(" ");
    let longestWordLength = 0;
    for(let i = 0; i < splitStr.length; i++){
        if(splitStr[i].length > longestWordLength){
            longestWordLength = splitStr[i].length;
        }
    }
    return longestWordLength;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
