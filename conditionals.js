/* Part 1
const raining = false;
const cold = false;

if (raining) {
  console.log("Don't forget your umbrella!");
}

if (cold) {
  console.log("Make sure you pick out a scarf!");
}
// The string in the log is pre-loaded and will output by default, in addition to the variable
console.log("Now you're ready to go outside!");
*/
// Part 2
const temperature = 14;

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else { //15 or greater will produce this message
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");

const isCitizen = true;
const age = 26;

if (isCitizen && age > 18) {
  console.log("You are eligible to vote");
}

if (!raining) {
  console.log("Leave your umbrella at home!");
}



