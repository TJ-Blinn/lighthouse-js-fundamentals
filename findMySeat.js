var row = 0; // initial value of the row
var seat = 0; // initial value of the seat within a row

for (var row = 0; row < 26; row++) {
  for (var seat = 0; seat <= 99; seat++) {
    console.log(row + "-" + seat);
  }
}
