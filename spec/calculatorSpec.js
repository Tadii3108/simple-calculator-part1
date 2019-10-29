let jasmine = require("jasmine");
let { add } = require("../calculator.js");

describe("Adding two numbers", function() {
  it("should return 2", function() {
    expect(add(0, 0)).toBe(0);
  });
  it("should return 5", function() {
    expect(add(-1, -1)).toBe(-2);
  });
  it("should return -2", function() {
    expect(add(4, 5)).toBe(9);
  });
});
