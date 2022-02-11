/*
var car_manufacturer = "Audi";
var car_model = "Q7";
var price = 50000;

function allWheelDrive() {
  document.write("This car comes with Quattro all-wheel drive");
}

allWheelDrive();
*/

/*
// Literal Object
var car = {
  car_manufacturer: "Audi",
  car_model: "Q7",
  price: 50000,

  allWheelDrive: function () {
    // return "This car comes with four wheel drive";
    document.write("This car comes with four wheel drive");
  },
};

// document.write("<h1>" + car.car_manufacturer + "</h1>");
// document.write("<h1>" + car.allWheelDrive() + "</h1>");
car.allWheelDrive();
*/

/*
// Constructor function
function cars(car_manufacturer, car_model, price) {
  this.car_manufacturer = car_manufacturer;
  this.car_model = car_model;
  this.price = price;

  this.allWheelDrive = function () {
    document.write("<h2>" + "This car comes with four wheel drive" + "</h2>");
  };
}

var c1 = new cars("Audi", "Q7", 50000);
c1.allWheelDrive();

var c2 = new cars("BMW", "X7", 40000);
// document.write(c2.car_model);
// document.write(c2.car_manufacturer);
document.write(c2.price);
*/

var car = {
  car_manufacturer: "Audi",
  car_model: "Q7",
  price: 50000,

  allWheelDrive: function () {
    // return "This car comes with four wheel drive";
    document.write("This car comes with four wheel drive");
  },
};

/*
var str1 = new String();
// var str1 = "Hello";
document.write("<h1>" + typeof str1 + "</h1>");
*/

car.allWheelDrive();
// 150 lines
// car.car_color = "Black";
// document.write("<h1>" + car.car_color + "</h1>");

/*
car.newFun = function () {
  return "Function successfully added";
};

document.write("<h1>" + car.newFun() + "</h1>");
*/

// delete car.car_model;
// document.write("<h1>" + car.car_model + "</h1>");

car.price = "70000";
document.write("<h1>" + car.price + "</h1>");
document.write("<h1>" + typeof car.price + "</h1>");
