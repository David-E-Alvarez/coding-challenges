// var myStr1 = "Coding in Python is fun because coding Python allows for coding in Python easily while coding".toLowerCase();
// var cleanMyStr1 = myStr1.replace(/[.,!]/g, "");
// var myStr1Arr = myStr1.split(" ");

// var myStr2 = "I like coding. I like testing. I love debugging!".toLowerCase();
// var cleanMyStr2 = myStr2.replace(/[.,!]/g, "");
// var myCleanStr2 = cleanMyStr2.split(" ");

// var myStr3 = "Debug, test, deploy. Debug, debug, test, deploy. Debug, test, test, deploy!".toLowerCase();
// var cleanMyStr3 = myStr3.replace(/[.,!]/g, "");
// var myCleanStr3 = cleanMyStr3.split(" ");

console.log("------>", getWords("Debug, test, deploy. Debug, debug, test, deploy. Debug, test, test, deploy!".toLowerCase()));

function getWords(paragraph) {
    paragraphStr = paragraph.toLowerCase();
    cleanParagraphStr = paragraphStr.replace(/[.,!]/g, "");
    finalCleanParagraphString = cleanParagraphStr.split(" ");

    const myMap = new Map();
    for(var i = 0; i < finalCleanParagraphString.length; i++){
        if(myMap.has(finalCleanParagraphString[i])){
            myMap.set(finalCleanParagraphString[i], myMap.get(finalCleanParagraphString[i]) + 1);
        }else{
            myMap.set(finalCleanParagraphString[i], 1);
        }
    }
    const myMapArr = [...myMap];
    myMapArr.sort((a,b) => b[1] - a[1]);

    const slicedArr = myMapArr.slice(0,3);
    const arr2Return = [];
    console.log("slicedArr: ", slicedArr.length);
    for(let i = 0; i < slicedArr.length; i++){
        arr2Return.push(slicedArr[i][0]);
    }

    paragraph = arr2Return;
    return paragraph;
}






