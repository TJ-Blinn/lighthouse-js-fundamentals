function range(start, stop, step) {
  let x = [];

  if (start === undefined || stop === undefined || step === undefined) {
    return [];
  } else if (start > stop) {
    return [];
  } else if (step < 0) {
    return [];
  }

  for (let y = start; y <= stop; y += step) {
    //y = y + step
    //console.log(y);
    x.push(y);
  }
  return x;
}
console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
