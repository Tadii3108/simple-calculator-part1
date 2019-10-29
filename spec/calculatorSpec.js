let jasmine = require("jasmine");
let { test_function } = require("../calculator.js");

describe("Adding two numbers", function() {
  it("should return 2", function() {
    expect(test_function(0, 0)).toBe(0);
  });
  it("should return 5", function() {
    expect(test_function(-1, -1)).toBe(-2);
  });
  it("should return -2", function() {
    expect(test_function(4, 5)).toBe(9);
  });
});
