/*
3 requirements

    carPassing returns an array
    carPassing returns an array with one new element
    carPassing has the most recent datestamp for the newest item
    */

//array of car Objects
// create a new object with a property called speed another property called time and add it to the cars array

function carPassing(cars, speed) {
  cars.push({ time: Date.now(), speed: speed });
  return cars;
}

const cars = [
  {
    time: 1568329654807,
    speed: 40,
  },
  {
    time: 1568329821632,
    speed: 42,
  },
  {
    time: 1568331115463,
    speed: 35,
  },
];

const speed = 38;

carPassing(cars, speed);
