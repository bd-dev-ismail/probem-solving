// Sum of Number an array [12, 65, 45, 78, 32, 45, 92];
function getSumOfAnArray(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        const index  = i;
        const element = numbers[index];
        sum = sum + element;
        console.log(index, element, sum);
    }
    return sum;
}
const myNumber = [12, 65, 45, 68, 32, 45, 92];
getSumOfAnArray(myNumber);
