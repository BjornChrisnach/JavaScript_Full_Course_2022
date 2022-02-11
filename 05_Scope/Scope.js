/*
var a = 5;
document.write("<h1>" + a + "</h1>");

document.write("<h1>" + a + "</h1>");
*/

/*
function myFunction() {
  var x = 10;
  document.write("<h1>" + x + "</h1>");
}

myFunction();
*/

/*
function myFunction() {
  var x = 10;
}

myFunction();
// no access to x outside the function
document.write("<h1>" + x + "</h1>");
*/

/*
// Global variable y
var y = 15;

function myFunction() {
  var x = 10;
  document.write("<h1>" + x + "</h1>");
  document.write("<h1>" + y + "</h1>");
}

myFunction();
*/

function myFunction() {
  // without use of var or let, it is always a global variable
  var1 = 20;
  var x = 10;
  document.write("<h1>" + x + "</h1>");
  // document.write("<h1>" + y + "</h1>");
}

myFunction();
document.write(var1);
