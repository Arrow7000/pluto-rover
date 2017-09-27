const { N } = require("./constants");

class Rover {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.dir = N;
  }
}

module.exports = Rover;
