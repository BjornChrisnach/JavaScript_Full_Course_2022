/*
var car1 = "Honda";
var car2 = "Kia";
var car3 = "Ford";

document.write("<h1>" + car1 + "</h1>");
document.write("<h1>" + car2 + "</h1>");
document.write("<h1>" + car3 + "</h1>");
*/

// index,      0       1      2
var cars = ["Honda", "Kia", "Ford"];
cars.push("Nissan");
cars.pop();
cars.pop();
cars.push("Hyundai");
cars.push(20);

// for (var i = 0; i < cars.length; i++)
// for (var i = 0; i < 4; i++) {
for (var i = 0; i < cars.length; i++) {
  document.write("<h1>" + cars[i] + "</h1>");
}

/*
var fruits = new Array("Apple", "Banana", "Mango");
for (var i = 0; i < 3; i++) {
  document.write("<h1>" + fruits[i] + "</h1>");
}
*/
