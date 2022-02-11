/*
console.log("Welcome to Simplicode");

var abc = {
  Name: "Kaushal",
  Subject: "JavaScript",
  Address: "Banglore",
};
console.log(abc);
*/

function xyz(name, subject, address) {
  this.name = name;
  this.subject = subject;
  this.address = address;
}
xyz.prototype.getName = function () {
  return this.name;
};
xyz.prototype.getAddress = function () {
  return this.address;
};
// doesn't work with function xyz(name, subject, address)
// xyz.grades = "A";

xyz.prototype.grades = "A";

var x1 = new xyz("Kaushal", "java", "Earth");
var x2 = new xyz("Simplicode", "English", "Mars");
console.log(x1);
// console.log(x2);
