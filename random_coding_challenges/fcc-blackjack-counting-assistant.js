// In the casino game Blackjack, a player can determine whether they have an advantage on the next hand over the house by keeping track of the relative number of high and low cards remaining in the deck. This is called Card Counting.

// Having more high cards remaining in the deck favors the player. When the count is positive, the player should bet high. When the count is zero or negative, the player should bet low.

// Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

// User Stories:

// [x]You should use let to declare a global variable named count and set it to 0.
// [x]You should have a function called cardCounter.
// [x]The cardCounter function should receive a card parameter which can either be a number or string.
// For values between 2 to 10, the card parameter will be a number.
// For all other values, the card parameter will be a string.
// The cardCounter function should modify the global count variable based on certain criteria.
// The global count variable should be increased by 1 for the cards 2, 3, 4, 5, or 6
// The global count variable should remain unchanged for the cards 7, 8, 9.
// The global count variable should be decreased by 1 for the cards 10, "J", "Q", "K", "A"
// The cardCounter function should return a string with current count and the string Bet if the count is positive.
// The cardCounter function should return a string with current count and the string Hold if the count is less than or equal to 0.
// In the function output, the current count and the player's decision (Bet or Hold) should be separated by a space. For example, -3 Hold.
// Tests:
// Waiting:1. You should use let to declare a global variable named count and set it to 0.
// Waiting:2. You should have a function named cardCounter.
// Waiting:3. Your function should return the value of count and the text (Bet or Hold) with one space character between them.
// Waiting:4. After the cards 2, 3, 4, 5, then calling cardCounter(6) should return the string 5 Bet.
// Waiting:5. After the cards 7, 8, then calling cardCounter(9) should return the string 0 Hold.
// Waiting:6. After the cards 10, "J", "Q", "K", then calling cardCounter("A") should return the string -5 Hold.
// Waiting:7. After the cards 3, 7, "Q", 8, then calling cardCounter("A") should return the string -1 Hold.
// Waiting:8. After the cards 2, "J", 9, 2, then calling cardCounter(7) should return the string 1 Bet.
// Waiting:9. After the cards 2, 2, then calling cardCounter(10) should return the string 1 Bet.
// Waiting:10. After the cards 3, 2, "A", 10, then calling cardCounter("K") should return the string -1 Hold

let count = 0;

cardCounter(7);
cardCounter(8);
// cardCounter(4);
// cardCounter(5);
console.log(cardCounter(9));

function cardCounter(card){
  if(card == 2 || card == 3 || card == 4 || card == 5 || card == 6){
    count = count + 1;
  }
  if(card == 10 || card == "J" || card == "Q" || card == "K" || card == "A"){
    count = count - 1;
  }
  return count + " " + (count > 0 ? "Bet" : "Hold");
}




