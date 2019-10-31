let jasmine = require("jasmine");
let { multiply } = require("../calculator.js");

describe("Multiplying many numbers", function() {
  it("should return 6", function() {
    expect(multiply(1, 2, 3)).toBe(6);
  });
  it("should return 60", function() {
    expect(multiply(5, 2, 6)).toBe(60);
  });
  it("should return 288", function() {
    expect(multiply(12, 12, 1, 2)).toBe(288);
  });
});
