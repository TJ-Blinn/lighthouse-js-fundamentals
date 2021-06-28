const checkAir = function (samples, threshold) {
  let count = 0;
  for (let i = 0; i < samples.length; i++) {
    //console.log(samples);
    if (samples[i] === "dirty") {
      count++;
    }
  }
  if (threshold <= count / 10) {
    // anything at or over the threshold is polluted.
    //console.log(threshold);
    //console.log(count);
    return "Polluted";
  } else if (threshold >= count / 10) {
    // anything at or under the threshold is clean.
    //console.log(threshold);
    //console.log(count);
    return "Clean";
  }
};

console.log(checkAir(["clean", "clean", "dirty", "clean", "dirty", "clean", "clean", "dirty", "clean", "dirty"], 0.3));

console.log(checkAir(["dirty", "dirty", "dirty", "dirty", "clean"], 0.25));

console.log(checkAir(["clean", "dirty", "clean", "dirty", "clean", "dirty", "clean"], 0.9));
