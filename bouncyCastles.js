//sphereVolume()will calculate the volume of a sphere given a radius ( V = 4/3 PI r3)
//coneVolume() will calculate the volume of a cone given a radius and a height ( V=13Bh or V=13πr2h, whereB=πr2 )
//prismVolume() will calculate the volume of a prism given a height, a width, and a depth ( V=Bh )

// Use the value below whenever you need the value of Pi

const PI = 3.14159;

const sphereVolume = function (radius) {
  return (4 / 3) * PI * radius * radius * radius;
  //let volume;
  //let r = radius * radius * radius;
  //volume = (4 / 3) * PI * r;
  //return volume.toFixed(4);
};

console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);
// True

const coneVolume = function (radius, height) {
  return PI * radius * radius * (height / 3);
  //let volume;
  //let r = radius * radius;
  //volume = PI * r * (height / 3);
  //return volume.toFixed(2);
};

console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);
// True

const prismVolume = function (height, width, depth) {
  let volume;
  let area = width * depth;

  volume = area * height;
  return volume;
};

console.log(prismVolume(3, 4, 5) === 60);
// True

const totalVolume = function (solids) {
  let total = 0;
  for (const solid of solids) {
    // calculate volume of solid and add to total
    if (solid.type === "sphere") {
      //capturing type with dot.notation will loop through and
      // include the large/smallSpheres

      total += sphereVolume(solid.radius);
    } else if (solid.type === "cone") {
      total += coneVolume(solid.radius, solid.height);
    } else {
      total += prismVolume(solid.height, solid.width, solid.depth);
    }
  }
  return total;
};

const largeSphere = {
  type: "sphere",
  radius: 40,
};

const smallSphere = {
  type: "sphere",
  radius: 10,
};

const cone = {
  type: "cone",
  radius: 3,
  height: 5,
};

const duck = [largeSphere, smallSphere, cone];
// variable duck will be passed as the "solid" parameter, hence above dot notation.

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);
// True
