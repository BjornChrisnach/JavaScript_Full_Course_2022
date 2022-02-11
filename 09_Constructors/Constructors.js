/*
// var obj_name = new Object();
var rect2 = new Object(); // var rect1 = {};
rect2.length = 5;
rect2.width = 10;
rect2.getArea = function () {
  return this.length * this.width;
};
rect2.getPerimeter = function () {
  return 2 * this.length + 2 * this.width;
};
document.write("<h2>" + "The length of rectangle is " + rect2.length + "</h2>");
document.write("<h2>" + "The width of rectangle is " + rect2.width + "</h2>");
document.write(
  "<h2>" + "The area of rectangle is " + rect2.getArea() + "</h2>"
);
document.write(
  "<h2>" + "The perimeter of rectangle is " + rect2.getPerimeter() + "</h2>"
);
*/

function rect3(length, width) {
  this.length = length;
  this.width = width;
  this.getArea = function () {
    return length * width;
  };
  this.getPerimeter = function () {
    return 2 * length + 2 * width;
  };
}

var r1 = new rect3(5, 10);
document.write("<h1>" + r1.length + "</h1>");
document.write("<h1>" + r1.width + "</h1>");
document.write("<h1>" + "The area of rectangle is " + r1.getArea() + "</h1>");
document.write(
  "<h1>" + "The perimeter of rectangle is " + r1.getPerimeter() + "</h1>"
);

var r2 = new rect3(4, 8);
document.write("<h1>" + r2.length + "</h1>");
document.write("<h1>" + r2.width + "</h1>");
document.write("<h1>" + "The area of rectangle is " + r2.getArea() + "</h1>");
document.write(
  "<h1>" + "The perimeter of rectangle is " + r2.getPerimeter() + "</h1>"
);
