// let regex = /Welcome/;

// Metacharacter .
// let regex = /We.come/;

// Metacharacter *
// let regex = /W*e/;

// Metacharacter ^, is true if the string starts with Welcome
// let regex = /^Welcome/;

// Metacharacter $
// let regex = /Welcome$/;

// Metacharacter $, is true and index 40
// let regex = /back$/;

// Metacharacter ?, is for optional characters before the ?, so Welome or Welom
let regex = /Welc?ome?/;

// test() = true, and if we delete the first Welcome, it is still true
// let str1 = "Welcome to our Youtube channel. Welcome back";
// let str1 = "to our Youtube channel. Welcome back";

// let str1 = "Welcome to our Youtube channel. Welcome back";

// Metacharacter *, still true and index 0
// let str1 = "Welhsadgasdgasdcome to our Youtube channel. Welcome back";

// let str1 = "Welcome to our Youtube channel. Welcome back";

// Metacharacter ^, is false the string starts with to, so false and null
// let str1 = "to our Youtube channel. Welcome back";

// Metacharacter $, is false and null the string ends with the word back not Welcome
// let str1 = "Welcome to our Youtube channel. Welcome back";

// Metacharacter ?, is for optional characters before the ?,
// so Welome or Welom for /Welc?ome?/
// let str1 = "Welome to our Youtube channel. Welcome back";

// Metacharacter ?, Welbome and second Welcome removed, will give false and null,
// we can not just put any character in place, so c or nothing, Welome or Welcome
let str1 = "Welbome to our Youtube channel. back";
let output = regex.test(str1);
console.log(output);

let op = regex.exec(str1);
console.log(op);
