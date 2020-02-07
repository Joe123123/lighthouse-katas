const blocksAway = function(directions) {
  // Put your solution here
  if (directions[0] === "right") {
    directions = ["left", 0, ...directions];
  }
  let angle = 0;
  let res = { east: 0, north: 0 };
  for (let i = 0; i < directions.length; i += 2) {
    if (directions[i] === "left") {
      angle += 90;
    } else if (directions[i] === "right") {
      angle -= 90;
    }
    switch (angle % 360) {
      case 0:
        res.east += directions[i + 1];
        break;

      case 90:
      case -270:
        res.north += directions[i + 1];
        break;

      case 180:
      case -180:
        res.east -= directions[i + 1];
        break;

      case 270:
      case -90:
        res.north -= directions[i + 1];
        break;
    }
  }
  return res;
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(
  blocksAway([
    "left",
    1,
    "right",
    1,
    "left",
    1,
    "right",
    1,
    "left",
    1,
    "right",
    1
  ])
);
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));
