const packingList = ["bowls", "plates", "pots", "pans", "eating utensils", "glasses", "cups", "cooking utensils"];

console.log("Kitchen stuff to pack:");
for (let i = 0; i < packingList.length; i++) {
  console.log(packingList[i]);
}
// we're declaring a counter variable called i (short for "index") that starts at 0, and increments by 1 
//at every step of a loop until it matches the length of our array, that is packingList.