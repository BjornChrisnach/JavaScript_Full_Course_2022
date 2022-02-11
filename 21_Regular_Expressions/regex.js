// var regex = /Hello/;
// var regex = /to/;

// null
// var regex = /To/;

// modifier i
// var regex = /To/i;

// var regex = /heLLO/i;

// var regex = /Hello/g;

// Hi is false with the test()
// var regex = /Hi/g;

// ell is true with the test()
// var regex = /ell/g;

// match()
// var regex = /Hello/;

// match() 2 or 3 instances gives an array, with modifier g
// replace(), modifier g replaces all instances of Hello
// var regex = /Hello/g;

// replace without modifier g, replaces first Hello
var regex = /Hello/;
var str1 =
  "Hello and welcome to our Youtube channel. Say Hello if you are new here. Hello.";

// exec()

/*
var output = regex.exec(str1);
console.log(output);
// will not work to get the second instance of Hello in the string
// use modifier g, regex = /Hello/g
output = regex.exec(str1);
console.log(output);
*/

// test();

// var output = regex.test(str1);
// console.log(output);

// match()

// var output = str1.match(regex);
// console.log(output);

// replace()

var output = str1.replace(regex, "Hi");
console.log(output);
