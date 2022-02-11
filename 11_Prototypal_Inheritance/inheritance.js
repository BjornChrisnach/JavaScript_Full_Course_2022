/*
const Employee = {
  Post: function () {
    return "A software developer";
  },
  changeName: function (name) {
    this.name = name;
  },
};
*/

/*
var E1 = Object.create(Employee);
E1.name = "Kaushal";
E1.role = "Writer";
*/

/*
var E1 = Object.create(Employee, {
  name: { value: "Kaushal2", writable: true },
  role: { value: "Programmer" },
});

E1.changeName("Ram");
console.log(E1);
*/

function Employee(name, id, salary) {
  this.name = name;
  this.id = id;
  this.salary = salary;
}

Employee.prototype.post = function () {
  return this.name + " " + "is a content creator";
};

var kaushal = new Employee("Kaushal", 3432, 10000);
console.log(kaushal);

function Programmer(name, id, salary, language) {
  Employee.call(this, name, id, salary);
  this.language = language;
}
Programmer.prototype = Object.create(Employee.prototype);
Programmer.prototype.constructor = Programmer;

var arun = new Programmer("Arun", 4321, 12000, "JavaScript");
console.log(arun);
