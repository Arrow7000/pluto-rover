const { N, S, W, E, F, B, L, R } = require("./constants");

// to manipulate directions numerically
const dirToNum = {
  N: 0,
  E: 1,
  S: 2,
  W: 3
};
const numToDir = [N, E, S, W];

function getNewState(state, command) {
  const { x, y, dir } = state;

  switch (command) {
    case L:
    case R:
      const newDir = rotate(dir, command);
      return { x, y, dir: newDir };

    case F:
    case B:
      const newCoords = move(x, y, dir, command);
      return { x: newCoords.x, y: newCoords.y, dir };

    default:
      throw new Error("Command should be one of F, B, L, R");
  }
}

function rotate(currDir, command) {
  if (command !== L && command !== R) {
    throw new Error("Invalid rotation direction: should be either L or R");
  }

  const currDirNum = dirToNum[currDir];
  const newDirNum = currDirNum + (command === L ? -1 : 1);
  const newDirNumBounded = newDirNum < 0 ? 3 : newDirNum % 4;
  return numToDir[newDirNumBounded];
}

function move(x, y, dir, command) {
  if (command !== F && command !== B) {
    throw new Error("Invalid movement direction: should be either F or B");
  }

  const val = command === F ? 1 : -1;

  switch (dir) {
    case N:
      return {
        x,
        y: y + val
      };
    case S:
      return {
        x,
        y: y - val
      };

    case E:
      return {
        x: x + val,
        y
      };
    case W:
      return {
        x: x - val,
        y
      };
  }
}

module.exports = getNewState;
