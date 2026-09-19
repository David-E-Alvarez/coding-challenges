let arrStr = "";
let phoneNumber = "";

function createPhoneNumber(numbers){
    for(let i = 0; i < numbers.length; i++){
        arrStr += numbers[i];
    }
    phoneNumber = "(" + arrStr.slice(0,3) + ") " + arrStr.slice(3,6) + "-" + arrStr.slice(6,10);
    return phoneNumber;
}

console.log(createPhoneNumber([1,2,3,4,5,6,7,8,9,0]));

