/* 
const isEven = function (num) {
  return num % 2 === 0;
}

const tenIsEven = isEven(10);
const elevenIsEven = isEven(11);

console.log(tenIsEven);
console.log(elevenIsEven);
*/ 

const isEven = function (num) {
  return num % 2 === 0;
}
console.log(isEven(10)); // console.log is itself a function–only it's pre-defined by JavaScript and we can use it without having to declare it ourselves.
console.log(isEven(11)); // we can pass the result returned by isEven directly to console.log, which takes that value and outputs it to Terminal.

