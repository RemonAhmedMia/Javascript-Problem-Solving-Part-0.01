// **JavaScript এ দুইটা ভ্যালু বা ডাটা একে অপরের সাথে অদলবদল করা
// 01:পুরনো পদ্ধতি (Temporary variable ব্যবহার করে):
let a = 5;
let b = 7;
console.log(a, b);

const temp = a;
a = b;
b = temp;
console.log(a , b);

// 02:আধুনিক পদ্ধতি (Destructuring দিয়ে):

let x = 5;
let y = 10;

[x, y] = [y, x];

console.log(x, y); // 10 5
