const repeatNumbers = function (data) {
  let stringOfRepeatedNumbers = "";

  for (let arr of data) {
    let tempString = "";
    for (x = 0; x < arr[1]; x++) {
      tempString += arr[0];
      // here, arr would print out both elements in the array based on the number in index 1
      //here, tempString would print out the number of index 0 based on the number of times in index 1
    }
    if (stringOfRepeatedNumbers === "") {
      stringOfRepeatedNumbers += tempString;
      //here, stringOfRepeatedNumbers is a strict comparison to 1 string, or the var tempString,
    } else {
      stringOfRepeatedNumbers += ", " + tempString;
      // if stringOfRepeatedNumbers is greater than 1 string, print a comma before each tempString,
    }
  }
  return stringOfRepeatedNumbers;
};

console.log(repeatNumbers([[1, 10]]));
console.log(
  repeatNumbers([
    [1, 2],
    [2, 3],
  ])
);
console.log(
  repeatNumbers([
    [10, 4],
    [34, 6],
    [92, 2],
  ])
);

/*
define each array to contain 2 values, a and b
multiply a with b and save value in a var arrSingle
if array contains multiple arrays, treat like a grid and use nested loops (var R, var C)
add "," after the arrSingle, depending on .length
*/
