// Control statements
/*
var x = 10;
// var x = 8;
// var x = 11;
if (x < 10) {
  document.write("The value of x is less than 10");
} else if (x == 10) {
  document.write("The value of x is equal to 10");
} else {
  document.write("The value of x is greater than 10");
}
*/

/*
var x = 5;
if (x % 2 == 0) {
  document.write("Even number");
} else {
  document.write("Odd number");
}
*/

/*
// var y = 0;
// var y = 8;
var y = -2;
if (y > 0) {
  document.write("Positive number");
} else if (y < 0) {
  document.write("Negative number");
} else {
  document.write("The number is zero");
}
*/

/*
// var x = 0;
// var x = 8;
var x = -5;
if (x > 0) {
  if (x % 2 == 0) {
    document.write("Positive and even number");
  } else {
    document.write("Positive and odd number");
  }
} else if (x < 0) {
  if (x % 2 == 0) {
    document.write("Negative and even number");
  } else {
    document.write("Negative and odd number");
  }
} else {
  document.write("The number is zero");
}
*/

// var x = 0;
// var x = 8;
var x = 7;
// var x = -5;
if (x > 0 && x % 2 == 0) {
  document.write("Number is positive and even");
} else if (x > 0 && x % 2 != 0) {
  document.write("Number is positive and odd");
} else if (x < 0 && x % 2 == 0) {
  document.write("Number is negative and even");
} else if (x < 0 && x % 2 != 0) {
  document.write("Number is negative and odd");
} else {
  document.write("The number is zero");
}
