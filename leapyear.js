// Simple Logic==========

function isLeapYear(year){
    if (year % 4 === 0) {
        return true;
    } else {
        return false ;
    }
}
const lipi = isLeapYear(2028);
console.log(lipi); // Jei year ta leapyear hobe seta k true dhekabe


// ====================

function isLeapYear2(year){
    if(year % 100 !==0 && year % 4 ===0) {
        return true;
    } else if(year % 100 === 0 && year % 4 === 0) {
        return true;
    } else {
        return false;
    }
}
const lipi2 = isLeapYear2(2021);
const lipi3 = isLeapYear2(2052);
const lipi4 = isLeapYear2(2002);
const lipi5 = isLeapYear2(2030);
console.log(lipi2 , lipi3 , lipi4 , lipi5);
