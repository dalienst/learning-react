// The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.
const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];

// Used in destructure
const numbers = [1, 2, 3, 4, 5, 6];
const [one, two, ...rest] = numbers;

// with objects
const myVehicle = {
    brand: 'Ford',
    model: 'Mustang',
    color: 'red'
  }
  
  const updateMyVehicle = {
    type: 'car',
    year: 2021, 
    color: 'yellow'
  }
  
  const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}


