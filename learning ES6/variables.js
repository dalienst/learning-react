// var | let | const

// var has a function scope, not a block scope
var x = 5.6;
// If you use var outside of a function, it belongs to the global scope.

// If you use var inside of a function, it belongs to that function.

// If you use var inside of a block, i.e. a for loop, the variable is still available outside of that block


// let is the block scoped version of var and is limited to the block where it is defined
let x = 5.6;
// If you use let inside of a block, i.e. a for loop, the variable is only available inside of that loop.


// const is a variable that once created, its value can never change
// has a block scope
const x = 5.6;

// The keyword const is a bit misleading.

// It does not define a constant value. It defines a constant reference to a value.

// Because of this you can NOT:

// Reassign a constant value
// Reassign a constant array
// Reassign a constant object
// But you CAN:

// Change the elements of constant array
// Change the properties of constant object
