// Allows writing of shorter functions
// Before
hello = function() {
    return "Hello World!";
}

// After arrow functions
hello = () => {
    return "Hello World!";
}

// If function returns one value:
hello = () => "Hello World";

// arrow function with parameters
hello = (val) => "Hello " + val;

//  if you have only one parameter, you can skip the parentheses as well:
hello = val => "Hello " + val;

// With arrow functions, the this keyword always represents the object that defined the arrow function.
// With an arrow function, this represents the Header object no matter who called the function:
class Header {
    constructor() {
      this.color = "Red";
    }
  
  //Arrow function:
    changeColor = () => {
      document.getElementById("demo").innerHTML += this;
    }
  }
  
  const myheader = new Header();
  
  
  //The window object calls the function:
  window.addEventListener("load", myheader.changeColor);
  
  //A button object calls the function:
  document.getElementById("btn").addEventListener("click", myheader.changeColor);
