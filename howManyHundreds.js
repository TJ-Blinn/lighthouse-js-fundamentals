function howManyHundreds(number) {
  var x = number;
  var y = number % 100;
  var z = x - y;
  return z / 100;
}

console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);

//Math.trunc(x) will NOT round the number up/down to
//the nearest integer, but simply remove the decimals.
