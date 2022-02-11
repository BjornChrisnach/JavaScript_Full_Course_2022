/*
// Syntax error, forgot the closing } for the function
// Uncaught syntaxError, unexpected end of input
function f1() {
  console.log("This is function 1");

  f1();
*/

/*
// Runtime error
function f1() {
  console.log("This is function 1");
}

function f2() {
  console.log("This is function 2");
}

f1();
// Uncaught referencError: f4 is not defined
f4(); // instead of f2();
*/

function makeOrder() {
  console.log("Here is your Black coffee, enjoy your day");
}

/*
try {
  makeOrder();
  processOrder();
} catch (error) {
  console.log("Sorry, an error occurred in your program");
}
*/

/*
// Uncaught ReferenceError: processOrder is not defined
processOrder();
try {
  makeOrder();
} catch (error) {
  console.log("Sorry, an error occurred in your program");
}
*/

/*
try {
  makeOrder();
  processOrder();
} catch (error) {
  console.log("Sorry, an error occurred in your program");
  //   console.log(error);
  //   console.log(error.name);
  //   console.log(error.message);
} finally {
  console.log("This block will execute. No matter what!");
}
*/

var a = 9;
if (a < 10) {
  throw new Error("This is a customisable error.");
} else {
  console.log("Working fine");
}
