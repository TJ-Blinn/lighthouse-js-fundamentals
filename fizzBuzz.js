/* var start = 0; // when to start
while (start < 10) { // when to stop
  console.log(start);
  start = start + 2; // how to get to the next item
}
*/

var x = 1;

while (x <= 20) {
  if (x % 3 === 0 && x % 5 === 0) {
    console.log("JulieJames");
  } else if (x % 5 === 0) {
    console.log("James");
  } else if (x % 3 === 0) {
    console.log("Julia");
  } else {
    console.log(x);
  }
  x = x + 1;
}
