const Rover = require("./rover");
const { N, S, W, E } = require("./constants");

test("rover exists and has x, y and dir attributes", () => {
  const rover = new Rover();
  expect(rover.x).toBe(0);
  expect(rover.y).toBe(0);
  expect(rover.dir).toBe(N);
});
