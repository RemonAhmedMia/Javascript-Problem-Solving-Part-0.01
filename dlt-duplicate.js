const biriyanikhur = ["Al-Amin" , "Rimon" , "Rakib" , "Humayon" , "Rakib" , "Tanvir" , "Tanvir" , "Humayon"];
function noDuplicate(array) {
    const unique = []; //এটাই হবে সেই array যেখানে পরে duplicate ছাড়া নামগুলো জমা থাকবে।
    for(const item of array) {  //for...of লুপের মাধ্যমে তুমি array-এর প্রতিটি element (item) এক এক করে নিচ্ছো। প্রতিবার লুপ চালার সময় item এর মান হবে পরবর্তী নাম (e.g. "Al-Amin", তারপর "Rimon", …)।
        if (unique.includes(item) === false) {  //এখানে চেক করা হচ্ছে: unique অ্যারেতে এই item আগেই আছে কি না।
            unique.push(item);
        }
    }
    return unique ;
}
const uniqueArray = noDuplicate(biriyanikhur);
console.log(uniqueArray);


// =========================Number

const delleteDuplicate = [4, 40, 4 ,60, 60, 56,87,983,90.12,54,30,90];
function dltDuplicate(array){
    const uniqueItem = [];
    for(const item of array) {
        if (uniqueItem.includes(item) === false) {
            uniqueItem.push(item);
        }
    }
    return uniqueItem
}
const uniqueNumber = dltDuplicate(delleteDuplicate);
console.log(uniqueNumber);


// Again Name=================

const passInExam = ["Al-Amin" , "Rimon" , "Rakib" , "Humayon" , "Rakib" , "Tanvir" , "Tanvir" , "Humayon" , "Tanvir" , "Farukkka" , "Great"];

function getPass(pass) {
    const uniquePass = [];
    for(const item of pass) {
        if (uniquePass.includes(item) === false) {
            uniquePass.push(item);
        }
    } return uniquePass
}
const uniqueResult = getPass(passInExam);
console.log(uniqueResult);
