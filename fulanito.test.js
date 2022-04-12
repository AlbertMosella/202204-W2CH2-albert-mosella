const strictEquals = function (a, b) {
  if (Number.isNaN(a) && Number.isNaN(b)) {
    return false;
  }
  if (Object.is(0, a) && Object.is(-0, b)) {
    return true;
  }
  if (Object.is(-0, a) && Object.is(0, b)) {
    return true;
  }
  return Object.is(a, b);
};

describe("Given the stricEquals function", () => {
  describe("When it receives (isNaN, isNaN)", () => {
    test("It should return false", () => {
      const a = NaN;
      const b = NaN;

      const expectedResult = strictEquals(a, b);

      expect(expectedResult).toBeFalsy;
    });
  });
});
