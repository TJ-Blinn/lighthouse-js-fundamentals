/*
function lastIndexOf(some_array, value) {
  var foundMatch = false;
  var result = 0;
  for (var i = some_array.length - 1; i >= 0; i--) {
    if (some_array[i] === value) {
      result = i;
      foundMatch = true;
      break;
    }
  }
  if (foundMatch) {
    return result;
  } else {
    return -1;
  }
}
*/

function lastIndexOf(arr, num) {
  let rightMost = -1;
  for (var x = 0; x < arr.length; x++) {
    // (x < arr.length is the same as x <= arr.length -1)
    console.log(x, arr[x]); // arr[x] is looping through the index itself which gives value
    if (arr[x] === num) {
      console.log("equal");
      rightMost = x;
    }
  }
  return rightMost;
}

console.log(lastIndexOf([0, 1, 4, 1, 2], 1), "=?", 3);
/*console.log(lastIndexOf([0, 1, 4, 1, 2], 2), "=?", 4);
console.log(lastIndexOf([0, 1, 4, 1, 2], 3), "=?", -1);
console.log(lastIndexOf([5, 5, 5], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);
*/

/*
function lastIndexOf(series, value){
var foundMatch = false;
var result = 0;
for (var i = 0; i < series.length; i++) {
if(series[i] === value){
result = i;
foundMatch = true;
}
}
if (foundMatch){
return result;
} else {
return -1;
}
}
*/
