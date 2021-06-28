function chooseStations(stations) {
  const goodStations = [];

  for (const station of stations) {
    let capacity = station[1];
    let type = station[2];

    if (capacity >= 20) {
      if (type === "school" || type === "community center") {
        goodStations.push(station[0]);
      }
    }
  }

  return goodStations;
}
