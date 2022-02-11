/*
var message = () => alert("Welcome to Simplicode");

function Start() {
  setTimeout(message, 2000);
}
*/

/*
function Start() {
  setTimeout(function () {
    alert("Welcome Back!");
  }, 2000);
}
*/

/*
var id = 0;
var message = () => alert("Welcome to Simplicode");

function Start() {
  id = setTimeout(message, 5000);
}

function Stop() {
  clearTimeout(id);
}
*/

var id = 0;
var message = () => alert("Welcome to Simplicode");

function Start() {
  id = setInterval(message, 5000);
}

function Stop() {
  clearTimeout(id);
}
