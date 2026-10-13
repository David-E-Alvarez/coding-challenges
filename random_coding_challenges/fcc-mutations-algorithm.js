// Implement the Mutations Algorithm

// Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

// User Stories:

//     Create a function named mutation that takes an array as its argument.
//     mutation should return true if the string in the first element of the array contains all of the letters of the string in the second element of the array, and false otherwise. For example:
//         mutation(["hello", "Hello"]), should return true because all of the letters in the second string are present in the first, ignoring case.
//         mutation(["hello", "hey"]) should return false because the string hello does not contain a y.
//         mutation(["Alien", "line"]), should return true because all of the letters in line are present in Alien.

// Tests:

//     Passed: 1. mutation(["hello", "hey"]) should return false.
//     Passed: 2. mutation(["hello", "Hello"]) should return true.
//     Passed: 3. mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) should return true.
//     Passed: 4. mutation(["Mary", "Army"]) should return true.
//     Passed: 5. mutation(["Mary", "Aarmy"]) should return true.
//     Passed: 6. mutation(["Alien", "line"]) should return true.
//     Passed: 7. mutation(["floor", "for"]) should return true.
//     Passed: 8. mutation(["hello", "neo"]) should return false.
//     Passed: 9. mutation(["voodoo", "no"]) should return false.
//     Passed: 10. mutation(["ate", "date"]) should return false.
//     Passed: 11. mutation(["Tiger", "Zebra"]) should return false.
//     Passed: 12. mutation(["Noel", "Ole"]) should return true.

function mutation(arr){
    let word1 = arr[0].toLowerCase();
    let word2 = arr[1].toLowerCase();
    //does word1 have all the letters word2 have?
    for(let i = 0; i < word2.length;i++){
        if(!word1.includes(word2[i])){
            return false;
        }
    }
    return true;
}


console.log("true or false?: ", mutation(["floor", "for"]));














// function mutation(arr){
//     let firstWord = arr[0].toLowerCase();
//     console.log("firstWord: ", firstWord);
//     let secondWord = arr[1].toLowerCase();
//     console.log("secondWord: ", secondWord);

//     let sortedFirstWord = firstWord.split('').sort().join('');
//     console.log("sortedFirstWord: ", sortedFirstWord);
//     let sortedSecondWord = secondWord.split('').sort().join('');
//     console.log("sortedSecondWord: ", sortedSecondWord);

//     noDuplicatesSortedFirstWord = [...new Set(sortedFirstWord)].join('');
//     noDuplicatesSortedSecondWord = [... new Set(sortedSecondWord)].join('');

//     if(noDuplicatesSortedFirstWord == noDuplicatesSortedSecondWord){
//         return true;
//     }else{
//         if(noDuplicatesSortedFirstWord.includes(noDuplicatesSortedSecondWord)){
//             return true;
//         }else{
//             return false;
//         }
//     }
// }