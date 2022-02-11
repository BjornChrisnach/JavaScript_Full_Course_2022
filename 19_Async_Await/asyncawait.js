function makeOrder(Coffee) {
  return new Promise((resolve, reject) => {
    console.log("Making request for a " + Coffee);
    if (Coffee == "Black coffee") {
      resolve("Here is your coffee, have a nice day");
    } else {
      reject("Sorry! We serve Black coffee only.");
    }
  });
}

function processOrder(order) {
  return new Promise((resolve, reject) => {
    console.log("Processing Order");
    resolve("Extra Information " + order);
  });
}

/*
makeOrder("Black coffee")
  .then((order) => {
    console.log("Order has been received");
    return processOrder(order);
  })
  .then((processedOrder) => {
    console.log(processedOrder);
  })
  .catch((error) => {
    console.log(error);
  });
*/

/*
// show the error
makeOrder("Latte")
  .then((order) => {
    console.log("Order has been received");
    return processOrder(order);
  })
  .then((processedOrder) => {
    console.log(processedOrder);
  })
  .catch((error) => {
    console.log(error);
  });
*/

/*
async function func1() {
  var order = await makeOrder("Black coffee");
  console.log("Order has been received");
  var processedOrder = await processOrder(order);
  console.log(processedOrder);
}
*/

// Showing the error side of it
async function func1() {
  try {
    var order = await makeOrder("Latte");
    console.log("Order has been received");
    var processedOrder = await processOrder(order);
    console.log(processedOrder);
  } catch (error) {
    console.log(error);
  }
}

func1();
