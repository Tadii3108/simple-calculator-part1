let jasmine = require("jasmine");
let { add } = require("../calculator.js")
let { multiply } = require("../calculator.js");

describe("Adding two numbers", function() {
  it("should return -2", function() {
    expect(add(-1, -1)).toEqual(-2);
  });
  it("should return 9", function() {
    expect(add(4, 5)).toEqual(9);
  });
});
describe("Adding many numbers", function() {
  it("should return 10", function() {
    expect(add(1, 2, 3, 4)).toEqual(10);
  });
  it("should return 15", function() {
    expect(add(1, 2, 3, 4, 5)).toEqual(15);
  });
});

describe("Multiplying two numbers", function() {
  it("should return 2", function() {
    expect(multiply(1, 2)).toBe(2);
  });
  it("should return 6", function() {
    expect(multiply(2, 3)).toBe(6);
  });
});
describe("Multiplying many numbers", function() {
  it("should return 6", function() {
    expect(multiply(1, 2, 3)).toBe(6);
  });
  it("should return 288", function() {
    expect(multiply(12, 12, 1, 2)).toBe(288);
  });
});
