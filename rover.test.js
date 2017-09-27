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
  rover2.exec(L);
  expect(rover2.dir).toBe(N);
  rover2.exec(B);
  expect(rover2.dir).toBe(N);
  expect(rover2.x).toBe(1);
  expect(rover2.y).toBe(1);
});

test("multiple commands work in series", () => {
  const rover1 = new Rover();

  rover1.exec("RFFRFFFL");
  expect(rover1.dir).toBe(E);
  expect(rover1.x).toBe(2);
  expect(rover1.y).toBe(3);

  const rover2 = new Rover();

  rover2.exec("RRFFLBBBB");
  expect(rover2.dir).toBe(N);
  expect(rover2.x).toBe(2);
  expect(rover2.y).toBe(4);
});
