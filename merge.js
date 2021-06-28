// The function should, when given two sorted arrays containing numbers, returns a sorted
// array of the numbers from both lists.

function concat(arr1, arr2) {
  var concat1 = arr1.concat(arr2);
  return concat1;
}
// concat will concatenate both parameters into 1

function merge(arr1, arr2) {
  var concat1 = arr1.concat(arr2);
  return concat1.sort();
}
// merge will call on concat, and then sort the parameters from low to hi

console.log(merge([4, 5, 6], [1, 2, 3, 4]), "=?", [1, 2, 3, 4, 4, 5, 6]);
console.log(merge([4], [2, 5, 8]), "=?", [2, 4, 5, 8]);
console.log(merge([1, 2, 6], []), "=?", [1, 2, 6]);

/*
function merge(a, b) {
  for (var i = 0; i < b.length; i++) { 
    a.push(b[i]);
  }
  for (i = 0; i < a.length; i++) {
    for (var j = i + 1; j < a.length; j++) {
      if (a[i] > a[j]) {
        var temp = a[i];
        a[i] = a[j];
        a[j] = temp;
      }
    }
  }
  return a;
}
*/
