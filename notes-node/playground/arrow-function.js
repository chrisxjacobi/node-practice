// practiced differences between regular functions and ES6 arrow functions

var square = (x) => {
  var result =  x * x;
  return result;
};

console.log(square(3));

var user = {
  name: 'Chris',
  sayHi: () => {

    // will log global arguments variable
    console.log(arguments);
    console.log(`Hello! I'm ${this.name}`);
  },
  sayHiAlt () {

    // will log arguments and will allow use of 'this' keyword
    console.log(arguments);
    console.log(`Hello! I'm ${this.name}`);
  }
};

user.sayHi(1, 2, 3);





/*
// simplified arrow function
var square = (x) => x * x;
*/
