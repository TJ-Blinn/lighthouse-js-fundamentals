function loopyLighthouse(range, multiples, words) {
  let arr0 = range[0];
  let arr1 = range[1];

  let m0 = multiples[0];
  let m1 = multiples[1];
  for (let i = arr0; i <= arr1; i++) {
    if (i % m0 === 0 && i % m1 === 0) {
      console.log(words[0] + words[1]);
    } else if (i % m0 === 0) {
      console.log(words[0]);
    } else if (i % m1 === 0) {
      console.log(words[1]);
    } else {
      console.log(i);
    }
  }
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);
