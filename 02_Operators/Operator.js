// First 3 operators

// Arithmetic operator
// var x = 6;
// var y = 4;
// document.write("Addition\n", x + y);
// document.write("\nSubtraction\n", x - y);
// document.write("\nMultiplication\n", x * y);

// document.write("Division\n", x / y);
// document.write("\nModulus\n", x % y);

/*
var z = 5;
document.write("Increment\n", ++z);
document.write("\nDecrement\n", --z);
*/

// Assignment operator
/*
var a = 13;
var b = a;

// document.write("Value of a: ", a);
document.write("Value of b: ", b);
*/

/*
var a1 = 51;
a1 += 9;
// Same as below
// a1 = a1 + 9;

document.write("Value of a1:\n", a1);

a1 -= 5;
document.write("\nValue of a1:\n", a1);

var a3 = 10;
a3 *= 5;
document.write("\nValue of a3:\n", a3);

var a4 = 15;
// a4 /= 4;
a4 /= 3;
document.write("\nValue of a4:\n", a4);

var a5 = 20;
a5 %= 7;
document.write("\nValue of a5:\n", a5);
*/

// String operator
/*
var str1 = "Hello";
var str2 = "world";
document.write(str1 + " " + str2);

var str3 = "\nwelcome";
str3 += " " + "to Simplicode";
document.write(str3);
*/

/*
var a = 12;
var b = 8;
var c = 5;
var d = 10;
// var result = a + b + c;
// var result = "Hello" + a + b + c;
var result = a + b + "Hello" + c + d;
document.write("<h1>Value of result is \n" + result + "\nHi there!</h1>");
*/

// The rest, 5 other operators

// Conditional operator (Ternary)
/*
// var x = 30;
var x = 60;
var y = x >= 50 ? "true" : "false";
document.write(y);
*/

/*
var x = 60;
// var y = document.write("Value of condition is \n", x >= 50 ? "true" : "false");
var y = document.write(
  "Value of condition" + " " + x + " " + ">= 50" + " " + "is \n",
  x >= 50 ? "greater" : "smaller"
);
*/

// Logical operators
// See at the If, else statement

// Comparison operator
/*
var x = 10;
document.write(x == 8);

document.write("<br>");

document.write(x === 8);

document.write("<br>");

document.write(x != 8);

document.write("<br>");

document.write(x !== 8);

document.write("<br>");

document.write(x > 8);

document.write("<br>");

document.write(x < 8);

document.write("<br>");

document.write(x >= 8);

document.write("<br>");

document.write(x <= 8);
*/

// Typeof operator
/*
var x = 17;
var y = "Hey there";
var flag = false;
var p;
var abc = null;

document.write(typeof x);
document.write("<br>");
document.write(typeof y);
document.write("<br>");
document.write(typeof flag);
document.write("<br>");
document.write(typeof p);
document.write("<br>");
document.write(typeof abc);
document.write("<br>");
*/

// Bitwise operator
var x = 5;
var y = 1;
document.write(x & y);
document.write("<br>");
document.write(x | y);
document.write("<br>");
document.write(~x);
document.write("<br>");
document.write(x ^ y);
document.write("<br>");

// 5 = 0101
// 1 = 0001
// & = 0 & 0 = 0, 0 & 1 = 0, 0 & 0 = 0, 1 & 1 = 1 is 0001 = 1
// | = 0 | 0 = 0, 0 | 1 = 1, 0 | 0 = 0, 1 | 1 = 1 is 0101 = 5

// ~ is -x-1 = -5-1 = -6 = -1010
// ~ = 0 ~ 0 = 1, 0 ~ 1 = 0, 0 ~ 0 = 1, 1 ~1 = 0 is -1010 = -6

// ^ = 0 ^ 0 = 0, 0 ^ 1 = 1, 0 ^ 0 = 0, 1 ^ 1 = 0 is 0100 = 4
