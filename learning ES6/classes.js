class Car {
    constructor(name) {
      this.brand = name;
    }
    // Method present
    present() {
      return 'I have a ' + this.brand;
    }
  }

  // Class inheritance
  class Model extends Car {
    constructor(name, mod) {
      super(name);
      this.model = mod;
    }  
    show() {
        return this.present() + ', it is a ' + this.model
    }
  }
  const mycar = new Model("Ford", "Mustang");
  mycar.show();


  // The super() method refers to the parent class.

  // By calling the super() method in the constructor method, we call the parent's constructor method and gets access to the parent's properties and methods