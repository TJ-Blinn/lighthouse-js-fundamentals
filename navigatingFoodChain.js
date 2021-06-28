/*  conditional ? (if condition is true) : (if condition is false)
var eatsPlants = false;
var eatsAnimals = true; 

var category = "herbivore" ? eatsPlants : eatsAnimals;
var category = "carnivore" ? eatsAnimals : eatsPlants;
var category = "omnivore" ? eatsAnimals && eatsPlants;

*/ 

var category = eatsPlants ? // omnivore and herbivore = true, carnivore and undeined = false
(eatsAnimals ? "omnivore" : "herbivore") : //omnivore = true, herbivore = false
(eatsAnimals ? "carnivore" : "undefined"); // carnivore = true, undefined = false
