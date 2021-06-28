const instructorWithLongestName = function (instructors) {
  let longestName = instructors[0].name; // initiate the first object that will be passed in and this will hold the longest length of a name
  let indexOfLongestName = 0; // holds the index of the longest name in the array

  for (let i = 0; i < instructors.length; i++) {
    // loop through the array of objects

    if (instructors[i].name.length > longestName.length) {
      // create a conditional that tests if each name is longer than longestName

      longestName = instructors[i].name.length; // longestName contains the longest name
      indexOfLongestName = i;
    }
  }
  return instructors[indexOfLongestName];
};

console.log(
  instructorWithLongestName([
    { name: "Samuel", course: "iOS" },
    { name: "Jeremiah", course: "Web" },
    { name: "Ophilia", course: "Web" },
    { name: "Donald", course: "Web" },
  ])
);
console.log(
  instructorWithLongestName([
    { name: "Matthew", course: "Web" },
    { name: "David", course: "iOS" },
    { name: "Domascus", course: "Web" },
  ])
);
