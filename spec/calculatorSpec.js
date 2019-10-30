let jasmine = require("jasmine");
let { multiply } = require("../calculator.js");

describe("Multiplying two numbers", function() {
  it("should return 2", function() {
    expect(multiply(1, 2)).toBe(2);
  });
  it("should return 10", function() {
    expect(multiply(5, 2)).toBe(10);
  });
  it("should return 144", function() {
    expect(multiply(12, 12)).toBe(144);
  });
});
