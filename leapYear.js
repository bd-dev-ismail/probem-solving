function isLeapYear(year){
    const reminder = year % 4;
    if(reminder === 0){
        return true;
    }
     return false;
    
}
const isMyYearLeapYear = isLeapYear(2024);
console.log('Is My Year is a Leap Year', isMyYearLeapYear);
const isHerYearLeapYear = isLeapYear(2002);
console.log('Is Her Year is a Leap Year', isHerYearLeapYear);