function oddAverege(numbers) {
    const odds = []; //odd number gula k ekta array er moddhe rakhar jonno;
    for(const number of numbers) {
        if (number % 2 === 1) {
            //console.log(number); bijor songkha gula ber korar jonno
            odds.push(number); //odd er moddhe number k push kore dilam,orthat amader joto gula odd number ashbe segula k amra ekta array er moddhe dhukailam
        }
    }
    //shodu matro odd numbers gula ekhane pawua jabe
    //console.log(odds);
    let sum = 0;
    for(const number of odds){
        sum = sum + number;
    }
    const count = odds.length;
    console.log(sum , count);
    //ekhon ghor ber korbo: sum/ koita upadan ache
    const avg = sum / count ;
    return avg
    
}
const numbers = [45,67,56,51,80,81,91,90,101,21,11,9,49];
const avg = oddAverege(numbers);
console.log(avg);



// function oddAverege(numbers) {
//     const odds = [];
//     for(const number of numbers) {
//         if (number % 2 === 1) {
//             odds.push(number)
//         }
//     }
//     let sum = 0;
//     for(const number of odds){
//         sum = sum + number;
//     }
//     const count = odds.length;
//     console.log(sum , count);
//     const avg = sum / count;
//     return avg ;
// }
// const numbers = [20, 21, 45, 46,71,70,91,9,80,81];
// const avg = oddAverege(numbers);
// console.log(avg);
