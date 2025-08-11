function inchToFeet(inch){
    const feet = inch / 12 ;
    return feet;
}
const rimoHeight = inchToFeet(75);
console.log(rimoHeight); //Output:6.25feet


function inchToFeet2(inch) {
    const freeFranction = inch / 12 ;
    const feetNumber = parseInt(freeFranction);
    const inchRemaining = inch % 12;
    const result = feetNumber + " ft " + inchRemaining + " inch " ;
    return result;
}
const rimonHeight = inchToFeet2(75);
console.log(rimonHeight); //Output: 6ft 3 inch



// Mile To km Convert=============

//1mile = 1.60934 km;

function mileToKilometer(mile) {
    const kilo = mile / 1.60934;
    return kilo;
}
const output = mileToKilometer(10);
console.log(output);
