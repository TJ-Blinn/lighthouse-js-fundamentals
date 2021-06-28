// In this exercise, we will be given an array of 2 or more numbers.
// We will then have to find the two largest numbers in that array, and sum them together.

// INPUT
// array of numbers

// OUTPUT
// return the sum of the two largest numbers

const sumLargestNumbers = function (data) {
  // Put your solution here
  let secondLargest = 0;
  let firstLargest = 0;

  for (let i = 0; i < data.length; i++) {
    let currentItem = data[i];

    // if the current item is bigger than the first largest
    //    let's replace the first largest
    //    we will ALSO need to copy the previous first largest into second largest (secondLargest = firstLargest)
    if (currentItem > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = currentItem;
    } else if (currentItem > secondLargest) {
      secondLargest = currentItem;
    }
    // else if the current item is bigger than the second largest
    //    we will replace the second largest
  }
  return firstLargest + secondLargest;
};

// const findLargestNumber = function (data) {
//   let currentLargest = 0;
//   for (let i = 0; i < data.length; i++) {
//     let currentItem = data[i];
//     if (currentItem > currentLargest) {
//       currentLargest = currentItem;
//     }
//   }

//   return currentLargest;
// };

console.log(sumLargestNumbers([9, 11, 1, 8, 6, 9, 12]));
console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));

// This function will console log every item in the array data
const logAllItems = function (data) {
  for (let i = 0; i < data.length; i++) {
    console.log(data[i]);
  }
};

// firstLargest = 12
// secondLargest = 9
// logAllItems([9, 12, 1, 8, 6, 9, 11, 73]);

// data = [9, 12, 1, 8, 6]
// data[i] = 8
