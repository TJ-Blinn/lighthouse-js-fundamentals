/*
const sayHello = function () { // declared a function named sayHello
  console.log("Hello, world"); // outputs a string to the console 
}

sayHello(); // call or invoke it using the parentheses notation
*/

/*
const sayHello = function (name) { // function taking a value as its input (parameter), which we've referred to as name and which we concatenate to the string "Hello, " 
  console.log("Hello, " + name);
}
sayHello("Caliban");
sayHello("Miranda");
sayHello("Ferdinand"); // instead of having to repeat our code for every time we want to greet a new person, we can simply pass along their name to our sayHello function and the function takes care of the rest for us.
*/

const returnSayHello = function (name) {
  //returnSayHello is the variable.
  return "Hello, " + name;
};
const greeting = returnSayHello("John"); // greeting is now the variable. returnSayHello now adds 'John' which is passed in as the function argument and replaced name.
console.log(greeting); // functions that return a value require that we console.log our values outside of the function.
