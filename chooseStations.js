const stations = [
  ["Big Bear Donair", 10, "restaurant"],
  ["Bright Lights Elementary", 50, "school"],
  ["Moose Mountain Community Centre", 45, "community centre"],
];

const chooseStations = function (stations) {
  const goodStations = [];

  for (let station of stations) {
    const capacity = station[1];
    const type = station[2];

    if (capacity >= 20) {
      if (type === "school" || type === "community center") {
        goodStations.push(station[0]);
      }
    }
  }
  return goodStations;
};

console.log(chooseStations(stations));

/*
function chooseStations(stations) {
  const goodStations = [];
  for (let i = 0; i < stations.length; i++) {
    const capacity = stations[i][1];
    const location = stations[i][2];
    if (capacity >= 20) {
      if (location === "school" || location === "community centre") {
        goodStations.push(stations[i][0]);
      }
    }
  }
  return goodStations;
}
*/
