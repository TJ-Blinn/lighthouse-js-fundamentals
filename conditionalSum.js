const conditionalSum = function (values, condition) {
  let output = 0;
  for (var i = 0; i < values.length; i++) {
    if (condition === "even" && values[i] % 2 === 0) {
      output += values[i];
    } else if (condition === "odd" && values[i] % 2 !== 0) {
      output += values[i];
    }
  }
  return output;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
