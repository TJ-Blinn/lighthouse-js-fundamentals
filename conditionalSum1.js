const conditionalSum = function (values, condition) {
  let currentItem = 0;
  let evenNumbers = 0;

  for (let i = 0; i < values.length; i++) {
    let currentItem = values[i];
    if (condition === "even" && values[i] % 2 === 0) {
      evenNumbers += currentItem;
    } else if (condition === "odd" && values[i] % 2 !== 0) {
      currentItem = 0;
    }
  }
  return evenNumbers;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));

/*if (condition === "even" && currentItem % 2 === 0) {
    console.log(currentItem);
    currentItem = evenNumber;
    console.log(evenNumber);
  } else {
    console.log("odd");
  }
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
//console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
//console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
//console.log(conditionalSum([], "odd"));

// if condition is equal to "even"
//    check IF currentItem is "even" ( use modulo 2)
//        add currentItem to sum var
//else if condition is equal to "odd"
//check IF currentItem is "odd" (use modulo 2 === 1)
// add currentItem to sum var*/
