// In regular functions the this keyword represents the object that called the function, 
// which could be the window, the document, a button or whatever.
class Header {
    constructor() {
      this.color = "Red";
    }
  
  //Regular function:
    changeColor = function() {
      document.getElementById("demo").innerHTML += this;
    }
  }
  
  const myheader = new Header();
  
  //The window object calls the function:
  window.addEventListener("load", myheader.changeColor);
  
  //A button object calls the function:
  document.getElementById("btn").addEventListener("click", myheader.changeColor);