//This is a Function Expression (storing a function in a variable) 
const whichSchool  = function (age) { //This function is anon because variable is already named
  if (age < 13) {
    return "Elementary School";
  } else if ((age >= 13 && age <= 18)) {
    return "Secondary School";
  } else  {
    return "Lighthouse Labs";
  }
}

