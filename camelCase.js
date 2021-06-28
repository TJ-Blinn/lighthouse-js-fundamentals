const camelCase = function (input) {
  let string = "";
  for (let i = 0; i < input.length; i++) {
    if (input[i] !== " ") {
      string += input[i];
    } else if (input[i] === " ") {
      let a = input[i + 1].toUpperCase();
      string += a;
      i++;
    }
  }
  return string;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
o;
/*
Create a var to hold input to be returned containing new camelCase string
Loop over the length of the string input parameter
Each letter of the input string that meets the condition not a space will be passed into var string
Otherwise each space will trigger else if condition. The following character is changed to upperCase and added to string
Make the loop skip the next character using i++ since this letter was already converted. 
*/
