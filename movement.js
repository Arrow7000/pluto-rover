const { N, S, W, E, F, B, L, R } = require("./constants");

function getNewCoords(state, command) {
  const { x, y, dir } = state;

  switch (command) {
    case L:
    case R:
      const newDir = rotate(dir, command);
      return { x, y, dir: newDir };

    case F:
    case B:
      const newCoords = getCoords(x, y, dir);
      return { x: newCoords.x, y: newCoords.y, dir };

    default:
      throw new Error("Command should be one of F, B, L, R");
  }
}

function rotate(currDir, command) {
  if (command !== L && command !== R) {
    throw new Error("Invalid rotation direction: should be either L or R");
  }

  const dirToNum = {
    N: 0,
    E: 1,
    S: 2,
    E: 3
  };
  const numToDir = [N, E, S, W];

  const dirNum = dirToNum[currDir];
  const newDirNum = (dirNum + command === L ? -1 : 1) % 4;

  return numToDir[newDirNum];
}

function getCoords(x, y, dir) {
    
}
