// document.write("Hello world, Welcome to SimpliLearn");

// document.write(9 + 3);
// document.write(7 * 8);
// document.write(9 * 5 - 3);

// console.log("Hello world");

// let a = 5;
// let b = 8;
// let c = a * 3 + b + 4 + (a - 25);

// console.log("The value of c is", c);

// document.write("Hello world");
// document.write("Welcome to Simplicode");
// document.write("This is our first program");

/*
var a = 15;
var b = 6;
var c = a + b;

document.write("The value of c is: ", c);
document.write("\nThe value of a is: ", a);
document.write("\nThe value of b is: ", b);
*/

// Only _ or $ to start of var or let names
// var _$;

// Error, identifier starts immediately after numeric literal
// var 9be;

// Error, Uncaught SyntaxError: missing variable name
// var class;

// Two different names in JavaScript
// var girl;
// var Girl;

// var bikeName;
// undefined
// document.write(bikeName);

// var bikeName;
// bikeName = "Yamaha";
// document.write(bikeName);

/*
{
  let bikeName;
  bikeName = "Hero";
  document.write(bikeName);
}

// Error, Uncaught ReferenceError: bikeName is not defined
document.write(bikeName);
*/

/*
{
  var bikeName;
  bikeName = "Hero";
  document.write(bikeName);
}

// No error, var is accesible outside the block scope
document.write(bikeName);
*/

/*
  var bikeName;
  bikeName = "Hero";
  document.write(bikeName);

// No error, bikeName is used 2 times, no problem with var
var bikeName = "TVS";
document.write(bikeName);
*/

/*
let bikeName;
bikeName = "Kawasaki";
document.write(bikeName);

// Error, bikeName is used 2 times, not possible with let
// Error, Uncaught SyntaxError: redeclaration of let bikeName: Previously declared at line xx
let bikeName = "Suzuki";
document.write(bikeName);
*/

// const x = 5,
//   y = 7;
// const z = x + y;
// document.write(z);

/*
// Error, Uncaught TypeError: invalid assignment to const 'x'
x = x + 10;
document.write(x);
*/

// Error, Uncaught SyntaxError: redeclaration of const x
// const x = 10;

/*
var car; ["RR", "Ford", "Honda"];
document.write(typeof (car));
*/

/*
// Loosely typed, 3 types are int, string, boolean like below
var x = 16;
var y = "Hello world";
var flag = true;

// Other languages, like C#, C++, Java
// int x = 16;

// fourth is undefined
var p; // without value

// Four types
document.write(typeof x);
document.write(typeof y);
document.write(typeof flag);
document.write(typeof p);

// With null, type is object
var num = null;
document.write(typeof num);
*/

// 4 is operand, + is operator
// 4 + 5;
