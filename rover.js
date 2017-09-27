const { N } = require("./constants");

class Rover {
  constructor(x = 0, y = 0, dir = N) {
    this.x = x;
    this.y = y;
    this.dir = dir;
  }
}

module.exports = Rover;
