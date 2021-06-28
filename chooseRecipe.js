/*
 * We need to complete a function called chooseRecipe(), which will receive three parameters:
 * - An array of ingredients in stock at Bakery A - An array of ingredients in stock at Bakery B
 * - An array of recipe objects. Each recipe has a name property(string) and an ingredient property(array)
 */

const chooseRecipe = function (bakeryA, bakeryB, recipes) {
  let match = 0;

  for (let r of recipes) {
    let concatArray = bakeryA.concat(bakeryB);
    let filteredArray = concatArray.filter((item, pos) => concatArray.indexOf(item) === pos);
    let bakeryArray = filteredArray;

    //console.log(r.ingredients)
    for (let i = 0; i < bakeryArray.length; i++) {
      //console.log(bakeryArray[i]);
      if (bakeryArray[i] === r.ingredients[0] || bakeryArray[i] === r.ingredients[1]) {
        match += 1;
      }
      console.log(match);
    }
  }
};

let bakeryA = ["saffron", "eggs", "tomato paste", "coconut", "custard"];
let bakeryB = ["milk", "butter", "cream cheese"];
let recipes = [
  {
    name: "Coconut Sponge Cake",
    ingredients: ["coconut", "cake base"],
  },
  {
    name: "Persian Cheesecake",
    ingredients: ["saffron", "cream cheese"],
  },
  {
    name: "Custard Surprise",
    ingredients: ["custard", "ground beef"],
  },
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ["potatoes", "bay leaf", "raisins"];
bakeryB = ["red bean", "dijon mustard", "apples"];
recipes = [
  {
    name: "Potato Ganache",
    ingredients: ["potatoes", "chocolate"],
  },
  {
    name: "Sweet Fish",
    ingredients: ["anchovies", "honey"],
  },
  {
    name: "Nima's Famous Dijon Raisins",
    ingredients: ["dijon mustard", "raisins"],
  },
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

// Expected Output: Nima's Famous Dijon Raisins

// function ingredientCheck(oneBakery, recipes) {}
