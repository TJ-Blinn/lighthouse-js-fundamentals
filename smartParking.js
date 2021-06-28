
//const vehicle = "regular"; // Replace this variable to test for other vehicles, ex: small, motorcycle
// return available spots with index # from nested array [x,y]

const whereCanIPark = function (spots, vehicle) {

  for (let y = 0; y < spots.length; y++) { // Loop through the arrays in the Y axis (up and down)
    //console.log("Vertical spots : ", spots[y])
    for (let x = 0; x < spots[y].length; x++) { // Nested loop to iterate through the X axis (left to right) - the particular list of spots
      //console.log("Horizontal spot: ", spots[y][x])

      const spot = spots[y][x]

      if (vehicle === 'regular') { // If condition to decide that "regular" vehicles can use spots labeled as R
        if (spot === 'R') {
          return [x, y]
        }
        else if (vehicle === 'small') { // If condition to decide that "small" vehicles can use spots labeled as S
          if (spot === 'S' || spot === 'R') {
            return [x, y]
          }
          else if (vehicle === 'motorcycle') { // If condition to decide that "motorcycle" vehicles can use spots labeled as M
            if (spot === 'S' || spot === 'R' || spot === 'M') {
              return [x, y]
            }
          }
        }

      }
    }
  }
  return false; // iterated through X and Y axis and did not return an available spot for the vehicle variable entered
}

//const result = whereCanIPark(spots, vehicle);

//console.log(result);

console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
));

console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
));

console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
))