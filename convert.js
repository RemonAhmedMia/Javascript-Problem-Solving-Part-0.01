function inchToFeet(inch){
    const feet = inch / 12 ;
    return feet;
}
const rimoHeight = inchToFeet(75);
console.log(rimoHeight); //Output:6.25feet
