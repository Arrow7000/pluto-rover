const Rover = require("./rover");
const { width, height, N, S, W, E, F, B, L, R } = require("./constants");

test("rover exists and has correct x, y and dir attributes", () => {
  const rover1 = new Rover();
  expect(rover1.x).toBe(0);
  expect(rover1.y).toBe(0);
  expect(rover1.dir).toBe(N);

  const rover2 = new Rover(3, 17, W);
  expect(rover2.x).toBe(3);
  expect(rover2.y).toBe(17);
  expect(rover2.dir).toBe(W);
});

test("single commands work", () => {
  const rover1 = new Rover();

  rover1.exec(L);
  expect(rover1.dir).toBe(W);
  rover1.exec(L);
  expect(rover1.dir).toBe(S);
  rover1.exec(L);
  expect(rover1.dir).toBe(E);
  rover1.exec(L);
  expect(rover1.dir).toBe(N);
  rover1.exec(R);
  expect(rover1.dir).toBe(E);

  const rover2 = new Rover();

  rover2.exec(R);
  expect(rover2.dir).toBe(E);
  rover2.exec(F);
  expect(rover2.dir).toBe(E);
  expect(rover2.x).toBe(1);
  expect(rover2.y).toBe(0);
  rover2.exec(R);
  expect(rover2.dir).toBe(S);
  rover2.exec(B);
  expect(rover2.dir).toBe(S);
  expect(rover2.x).toBe(1);
  expect(rover2.y).toBe(1);
  rover2.exec(B);
  expect(rover2.dir).toBe(S);
  expect(rover2.x).toBe(1);
  expect(rover2.y).toBe(2);
  rover2.exec(B);
  expect(rover2.dir).toBe(S);
  expect(rover2.x).toBe(1);
  expect(rover2.y).toBe(3);
});

test("multiple commands work in series", () => {
  const rover1 = new Rover();

  rover1.exec("RFFLFFFL");
  expect(rover1.dir).toBe(W);
  expect(rover1.x).toBe(2);
  expect(rover1.y).toBe(3);

  const rover2 = new Rover();

  rover2.exec("RRBBLFFFF");
  expect(rover2.dir).toBe(E);
  expect(rover2.x).toBe(4);
  expect(rover2.y).toBe(2);
});

test("wrapped planet", () => {
  // strictly speaking this behaviour is toroidal, not spherical 😜
  const rover1 = new Rover();

  rover1.exec("B");
  expect(rover1.dir).toBe(N);
  expect(rover1.x).toBe(0);
  expect(rover1.y).toBe(width - 1);

  const rover2 = new Rover();

  rover2.exec("BBLFFF");
  expect(rover2.dir).toBe(W);
  expect(rover2.x).toBe(width - 3);
  expect(rover2.y).toBe(height - 2);
});
