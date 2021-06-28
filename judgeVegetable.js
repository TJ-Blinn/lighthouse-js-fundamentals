//Our function will receive two parameters: a list of veggies(as an array of objects),
//and a characteristic to judge the veggies by (in the case of a tomato, either redness or plumpness).

const vegetables = [
  {
    submitter: "Old Man Franklin",
    redness: 10,
    plumpness: 5,
  },
  {
    submitter: "Sally Tomato-Grower",
    redness: 2,
    plumpness: 8,
  },
  {
    submitter: "Hamid Hamidson",
    redness: 4,
    plumpness: 3,
  },
];

const metric = "redness";

const judgeVegetable = function (vegetables, metric) {
  let value = 0;
  let submitter = "";

  //if (metric === "redness") {

  for (let i = 0; i < vegetables.length; i++) {
    if (value < vegetables[i][metric]) {
      value = vegetables[i][metric];
      submitter = vegetables[i].submitter;
    }
  }

  return submitter;
};

console.log(judgeVegetable(vegetables, metric));

/*
function judgeVegetable(vegetables, metric) {

  if (metric === 'redness') {

    const [Biggest] = vegetables.sort((a, b) => b.[metric] - a.[metric])

    return Biggest.submitter;

  } else if (metric === 'plumpness') {

    const [Plumpness] = vegetables.sort((a, b) => b.plumpness - a.plumpness)

    return Plumpness.submitter;

  } else {

    return undefined;

  }

}

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'
console.log(judgeVegetable(vegetables, metric));
*/
