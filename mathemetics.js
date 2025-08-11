// Common Math Properties (সবচেয়ে বেশি ব্যবহৃত)
// Property	মান (Approx.)	ব্যবহার
// Math.PI	3.141592653589793	পাই এর মান (বৃত্তের ক্ষেত্রফল, পরিধি বের করতে)
// Math.E	2.718281828459045	ইউলার সংখ্যা (exponential growth, logarithm এ ব্যবহৃত)
// Math.SQRT2	1.4142135623730951	√2 (square root of 2)
// Math.SQRT1_2	0.7071067811865476	√(1/2) বা 1/√2
// Math.LN2	0.6931471805599453	ln(2) (2 এর প্রাকৃতিক লগারিদম)
// Math.LN10	2.302585092994046	ln(10) (10 এর প্রাকৃতিক লগারিদম)
// Math.LOG2E	1.4426950408889634	log₂(e)
// Math.LOG10E	0.4342944819032518	log₁₀(e)
// ==============

console.log(Math.PI);       // 3.141592653589793
console.log(Math.E);        // 2.718281828459045
console.log(Math.SQRT2);    // 1.4142135623730951

// উদাহরণ: বৃত্তের ক্ষেত্রফল = πr²
let r = 5;
let area = Math.PI * r * r;
console.log(area); // 78.53981633974483




const min = Math.min(23,45,9,1,78,-90,89);
console.log(min); //Output:-90

const max = Math.max(23,45,9,1,78,-90,89);
console.log(max);

console.log(Math.abs(50-88)); //33

console.log(Math.round(2.95)); //3

console.log(Math.floor(2.999999)); //2; doshomik er por joto beshi man e thakok na keno sob somoy nicher diker porno songkha k dhorbe

console.log(Math.ceil(2.0001)); //3, onekta celiing fan like joto kom thakok na keno sob somoy uporer porno songkha k dhorbe;

console.log(Math.random()); //prothi refresh e noton man dibe 1 er vitor

const rand = Math.round(Math.random()*10);
console.log(rand);
