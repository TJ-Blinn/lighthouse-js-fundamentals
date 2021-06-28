const smartGarbage = function (trash, bins) {
  const keys = Object.keys(bins);
  for (let i of keys) {
    if (i === trash) {
      bins[i]++;
    }
  }
  return (bins);
};

/*
const smartGarbage = function (trash, bins) {

  if (trash === 'recycling') {
    bins.recycling += 1;
  } else if (trash === 'waste') {
    bins.waste += 1;
  } else if (trash === 'compost') {
    bins.compost += 1;
  }
  return bins;
};

console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));
*/
