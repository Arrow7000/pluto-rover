const { N } = require("./constants");
const getNewState = require("./movement");

class Rover {
  constructor(x = 0, y = 0, dir = N) {
    this.x = x;
    this.y = y;
    this.dir = dir;
  }

  exec(commands) {
    for (const command of commands) {
      const { x, y, dir } = getNewState(this, command);
      this.x = x;
      this.y = y;
      this.dir = dir;
    }
  }
}

module.exports = Rover;
