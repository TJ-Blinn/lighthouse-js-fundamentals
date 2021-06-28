const numberOfVowels = function (data) {
  const vowel = ['a', 'e', 'i', 'o', 'u'];
  let vowelArray = [];

  for (let i = 0; i < data.length; i++) {
    if (data[i] === 'a' || data[i] === 'e' || data[i] === 'i' || data[i] === 'o' || data[i] === 'u') {
      vowelArray.push(vowel);
    }
  }
  return vowelArray.length;
}

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));