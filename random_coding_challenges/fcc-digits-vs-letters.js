// Digits vs Letters
// Given a string, return "digits" if the string has more digits than letters, "letters" if it has more letters than digits, and "tie" if it has the same amount of digits and letters.

// Digits consist of 0-9.
// Letters consist of a-z in upper or lower case.
// Ignore any other characters.
// Tests:
// Passed:1. digitsOrLetters("abc123") should return "tie".
// Passed:2. digitsOrLetters("a1b2c3d") should return "letters".
// Passed:3. digitsOrLetters("1a2b3c4") should return "digits".
// Passed:4. digitsOrLetters("abc123!@#DEF") should return "letters".
// Passed:5. digitsOrLetters("H3110 W0R1D") should return "digits".
// Passed:6. digitsOrLetters("P455W0RD") should return "tie".

function digitsOrLetters(str) {
  let letterCounter = 0;
  let digitCounter = 0;
  for(let i = 0; i < str.length; i++){
    if(isNaN(str[i])){
      letterCounter = letterCounter + 1;
    }else{
      digitCounter = digitCounter + 1;
    }
  }
  if(digitCounter == letterCounter){
    return "tie";
  }else{
    return letterCounter > digitCounter ? "letters" : "digits";
  }
  
  
}

// console.log(digitsOrLetters("H3110 W0R1D"));



