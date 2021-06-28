function chooseStations(stations) {
  let finalValue = [];

  for (const station of stations) {

    if ((station[2] === 'school' || station[2] === 'community centre') && station[1] >= 20) {
      finalValue.push(station[0]);
    }
  }
  return finalValue;
}
