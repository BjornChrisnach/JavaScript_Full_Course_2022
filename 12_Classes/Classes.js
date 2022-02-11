// Base class
class Student {
  constructor(name, age, roll) {
    this.name = name;
    this.age = age;
    this.roll = roll;
  }

  Org() {
    return "I am " + this.name + " from Simplicode";
  }

  Dob() {
    return "The date of birth of " + this.name + " is " + (2022 - this.age);
  }

  static Add(a, b) {
    return a + b;
  }
}

// Derived class
class Student1 extends Student {
  constructor(name, age, roll, language, section) {
    super(name, age, roll);
    this.language = language;
    this.section = section;
  }
}

/*
var kaushal = new Student("Kaushal", 21, 45);

console.log(kaushal);
console.log(Student.Add(10, 45));
*/

var arun = new Student1("Arun", 35, 2, "JavaScript", "A");
console.log(arun);
console.log(Student1.Add(65, 8));
