const { sum, nativeNull } = require("./index");

describe("Sum function:", () => {
  test("should return sum of two values", () => {
    expect(sum(1, 2)).toEqual(3);
  });

  test("should return value correctly comparing to other", () => {
    expect(sum(1, 2)).toBeGreaterThan(2);
  });
});

describe("Native null function:", () => {
  test("should return false value null", () => {
    expect(nativeNull()).toBe(null);
    expect(nativeNull()).toBeNull();
    expect(nativeNull()).toBeFalsy(); // or expect(nativeNull()).not.toBeTruthy()
    expect(nativeNull()).toBeDefined();
  });
});
