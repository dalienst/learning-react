// To illustrate destructuring, we'll make a sandwich. 
// Do you take everything out of the refrigerator to make your sandwich? 
// No, you only take out the items you would like to use on your sandwich.

// Destructuring is exactly the same. 
// We may have an array or object that we are working with, but we only need some of the items contained in these.

// Destructuring makes it easy to extract only what is needed.


// Before:
const vehicles = ['mustang', 'f-150', 'expedition'];

// old way
const car = vehicles[0];
const truck = vehicles[1];
const suv = vehicles[2];

// After with destructuring:
const gari = ['mustang', 'f-150', 'expedition'];

const [cars, trucks, suvs] = vehicles;


// Destructuring comes in handy when a function returns an array:
function calculate(a, b) {
    const add = a + b;
    const subtract = a - b;
    const multiply = a * b;
    const divide = a / b;

    return [add, subtract, multiply, divide];
}

const [add, subtract, multiply, divide] = calculate(4, 7);

// Destructuring inside a function
// old way:
const vehicleOne = {
    brand: 'Ford',
    model: 'Mustang',
    type: 'car',
    year: 2021, 
    color: 'red'
}
  
myVehicle(vehicleOne);
  
  // old way
function myVehicle(vehicle) {
    const message = 'My ' + vehicle.type + ' is a ' + vehicle.color + ' ' + vehicle.brand + ' ' + vehicle.model + '.';
}

// new way

yourVehicle(vehicleOne);

function yourVehicle({type, color, brand, model}) {
    const message = 'My ' + type + ' is a ' + color + ' ' + brand + ' ' + model + '.';
}

// Deeply nested objects
const vehicleTwo = {
    brand: 'Ford',
    model: 'Mustang',
    type: 'car',
    year: 2021, 
    color: 'red',
    registration: {
      city: 'Houston',
      state: 'Texas',
      country: 'USA'
    }
  }
  
  myVehicle(vehicleTwo)
  
  function myVehicle({ model, registration: { state } }) {
    const mes = 'My ' + model + ' is registered in ' + state + '.';
  }
