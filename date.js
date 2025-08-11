const date = new Date();
console.log(date); //Ajker date dheknor jonno

// JavaScript এ Date object হলো এমন একটা বিল্ট-ইন অবজেক্ট যেটা সময় ও তারিখ নিয়ে কাজ করতে দেয়।
// এটা দিয়ে তুমি:

// বর্তমান সময় বের করতে পারো

// নির্দিষ্ট তারিখ তৈরি করতে পারো

// সময়/তারিখ পরিবর্তন করতে পারো

// দিন, মাস, বছর, ঘন্টা, মিনিট ইত্যাদি আলাদা করে নিতে পারো

// ** Date object তৈরি করার 4টি পদ্ধতি::

// 1. বর্তমান তারিখ ও সময়
let now = new Date();
console.log(now);

// 2. নির্দিষ্ট তারিখ (String দিয়ে)
let date1 = new Date("2025-08-11");
console.log(date1);

// 3. বছর, মাস, দিন (মাস 0-11, জানুয়ারি=0, ডিসেম্বর=11)
let date2 = new Date(2025, 7, 11); // 2025, August (7 মানে আগস্ট), 11 তারিখ
console.log(date2);

// 4. টাইমস্ট্যাম্প (milliseconds since 1970-01-01)
let date3 = new Date(1733971200000);
console.log(date3);


// **Get Methods (তারিখ/সময় বের করার জন্য)::

let d = new Date();

console.log(d.getFullYear());   // বছর (2025)
console.log(d.getMonth());      // মাস (0-11)
console.log(d.getDate());       // দিন (1-31)
console.log(d.getDay());        // সপ্তাহের দিন (0=রবিবার, 6=শনিবার)
console.log(d.getHours());      // ঘন্টা (0-23)
console.log(d.getMinutes());    // মিনিট (0-59)
console.log(d.getSeconds());    // সেকেন্ড (0-59)
console.log(d.getMilliseconds());// মিলিসেকেন্ড
console.log(d.getTime());       // টাইমস্ট্যাম্প (ms since 1970)


// **Set Methods (তারিখ/সময় সেট করার জন্য)::

let d2 = new Date();
d2.setFullYear(2030);
d2.setMonth(0);    // জানুয়ারি
d2.setDate(15);
console.log(d2);

// **তারিখ ফরম্যাট করার জন্য::

let today = new Date();

console.log(today.toDateString());   // "Mon Aug 11 2025"
console.log(today.toTimeString());   // "18:45:30 GMT+0600..."
console.log(today.toISOString());    // "2025-08-11T12:45:30.000Z"
console.log(today.toLocaleDateString()); // লোকাল তারিখ
console.log(today.toLocaleTimeString()); // লোকাল সময়


// **Real Example: Timer বানানো::
// setInterval(() => {
//   let now = new Date();
//   console.log(now.toLocaleTimeString());
// }, 1000);
