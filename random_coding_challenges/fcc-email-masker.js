var myStr = "johnpaul@gmail.com";
//console.log(myStr.indexOf("@"));

var indexOfAtSign = myStr.indexOf("@");
//console.log("indexOfAtSign: ", indexOfAtSign);

var subStrOfMyStr = myStr.substring(0,indexOfAtSign);
//console.log("subStrofMyStr: ",subStrOfMyStr);

var lettersToMakeAsterisks = subStrOfMyStr.substring(1,indexOfAtSign-1);
//console.log(lettersToMakeAsterisks);

var asteriskLetters = lettersToMakeAsterisks.replace(/[a-zA-Z]/g, "*");
//console.log("asteriskLetters: ", asteriskLetters);

var maskedEmail = myStr[0] + asteriskLetters + subStrOfMyStr.slice(-1) + myStr.substring(indexOfAtSign);
console.log("maskedEmail: ", maskedEmail);