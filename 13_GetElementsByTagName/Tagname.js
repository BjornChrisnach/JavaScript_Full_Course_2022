function Fun2() {
  var x = document.getElementsByTagName("div");
  //   x[0].style.fontFamily = "Courier New";

  // Doesn't work for all Div's
  // Error Uncaught TypeError: x.style is undefined
  /*
  x.style.fontFamily = "Courier New";
  */

  for (var i = 0; i < x.length; i++) {
    // x[i].style.fontWeight = "Bolder";
    x[i].style.backgroundColor = "Red";
  }

  /*
  x[1].style.color = "Blue";
  x[2].style.fontStyle = "italic";
  x[3].style.backgroundColor = "Red";
  */
}
