//Even Finder Function
function isEven(number){
    if(number % 2===0){
        return true;
    }
    else{
        return false;
    }
}
// console.log(isEven(98));
//Odd Finder Function
function isOdd(num){
    const reminder = num % 2;
    if(reminder ===1){
        return true;
    }
    else{
        return false;
    }
}
const myNumber = isOdd(175);
console.log('Is The number Odd?: ', myNumber);

const herNumber = isOdd(168);
console.log('Is The number Odd?: ', herNumber);