const calculateFibonacci = require("../src/finonacci");

describe("fibonacci numbers", () => {
  it("returns the nth fibonacci number", () => {
    expect(calculateFibonacci(3)).toBe(2);
  });
  it("works with a bigger number", () => {
    expect(calculateFibonacci(11)).toBe(89);
  });
  it("works with a bigger number", () => {
    expect(calculateFibonacci(19)).toBe(4181);
  });
});
