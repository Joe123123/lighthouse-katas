const blocksAway = function(directions) {
  // Put your solution here
  let res = { east: 0, north: 0 };
  if (directions.length === 0) {
    return res;
  }
  let onOddStep = true;
  let toEast, toNorth;
  if (directions[0] === "right") {
    toEast = true;
    for (let i = 0; i < directions.length; i += 2) {
      if (onOddStep) {
        if (toEast) {
          res.east += directions[i + 1];
          if (directions[i + 2]) {
            directions[i + 2] === "left" ? (toNorth = true) : (toNorth = false);
          } else {
            return res;
          }
        } else if (!toEast) {
          res.east -= directions[i + 1];
          if (directions[i + 2]) {
            directions[i + 2] === "left" ? (toNorth = false) : (toNorth = true);
          } else {
            return res;
          }
        }
      } else if (!onOddStep) {
        if (toNorth) {
          res.north += directions[i + 1];
          if (directions[i + 2]) {
            directions[i + 2] === "left" ? (toEast = false) : (toEast = true);
          } else {
            return res;
          }
        } else if (!toNorth) {
          res.north -= directions[i + 1];
          if (directions[i + 2]) {
            directions[i + 2] === "left" ? (toEast = true) : (toEast = false);
          } else {
            return res;
          }
        }
      }
      onOddStep = !onOddStep;
    }
  } else if (directions[0] === "left") {
    toNorth = true;
    for (let i = 0; i < directions.length; i += 2) {
      if (onOddStep) {
        if (toNorth) {
          res.north += directions[i + 1];
          if (directions[i + 2]) {
            directions[i + 2] === "left" ? (toEast = false) : (toEast = true);
          } else {
            return res;
          }
        } else if (!toNorth) {
          res.north -= directions[i + 1];
          if (directions[i + 2]) {
            directions[i + 2] === "left" ? (toEast = true) : (toEast = false);
          } else {
            return res;
          }
        }
      } else if (!onOddStep) {
        if (toEast) {
          res.east += directions[i + 1];
          if (directions[i + 2]) {
            directions[i + 2] === "left" ? (toNorth = true) : (toNorth = false);
          } else {
            return res;
          }
        } else if (!toEast) {
          res.east -= directions[i + 1];
          if (directions[i + 2]) {
            directions[i + 2] === "left" ? (toNorth = false) : (toNorth = true);
          } else {
            return res;
          }
        }
      }
      onOddStep = !onOddStep;
    }
  }
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
