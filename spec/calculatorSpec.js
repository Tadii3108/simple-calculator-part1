let jasmine = require("jasmine");
let { add } = require("../calculator.js");

describe("Adding many numbers", function() {
  it("should return 10", function() {
    expect(add(1, 2, 3, 4)).toBe(10);
  });
  it("should return 15", function() {
    expect(add(1, 2, 3, 4, 5)).toBe(15);
  });
  it("should return 21", function() {
    expect(add(1, 2, 3, 4, 5, 6)).toBe(21);
  });
  it("should return 55", function() {
    expect(add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)).toBe(55);
  });
});
