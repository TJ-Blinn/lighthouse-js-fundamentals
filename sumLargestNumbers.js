let num1 = 0;
let num2 = 0;
let newArr = [];

const sumLargestNumbers = function (data) {
  for (let i = 0; i < data.length; i++) {
    if (data[i] > num1) {
      num1 = data[i];
      //console.log("After first loop " + num1);
      newArr[0] = num1;
      //console.log("After first loop new array is  " + newArr[0]);
    }
  }

  for (let j = 0; j < data.length; j++) {
    if (data[j] < newArr[0] && data[j] > num2) {
      num2 = data[j];

      //console.log("The second loop number 2 is " + num2)

      newArr[1] = num2;
      //console.log("The second loop new array[1] is " + newArr[1])
    }
    //console.log(newArr)
  }
  return "The sum of the two largest numbers is " + (newArr[0] + newArr[1]);
};

console.log(sumLargestNumbers([1, 2, 3]));
