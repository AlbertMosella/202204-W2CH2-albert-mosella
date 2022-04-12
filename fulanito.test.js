const strictEquals = function (a, b) {
  if (Object.is(NaN, a) && Object.is(NaN, b)) {
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

      expect(expectedResult).toBe(false);
    });
  });
  describe("When it receives (0, -0)", () => {
    test("It should return true", () => {
      const a = 0;
      const b = -0;

      const expectedResult = strictEquals(a, b);

      expect(expectedResult).toBe(true);
    });
  });
  describe("When it receives (-0, 0)", () => {
    test("It should return true", () => {
      const a = -0;
      const b = 0;

      const expectedResult = strictEquals(a, b);

      expect(expectedResult).toBe(true);
    });
  });
  describe("When it receives (1, 1)", () => {
    test("It should return true", () => {
      const a = 1;
      const b = 1;

      const expectedResult = strictEquals(a, b);

      expect(expectedResult).toBe(true);
    });
  });
  describe("When it receives (1, '1')", () => {
    test("It should return false", () => {
      const a = 1;
      const b = "1";

      const expectedResult = strictEquals(a, b);

      expect(expectedResult).toBe(false);
    });
  });
  describe("When it receives (true, false)", () => {
    test("It should return false", () => {
      const a = true;
      const b = false;

      const expectedResult = strictEquals(a, b);

      expect(expectedResult).toBe(false);
    });
  });
  describe("When it receives (false, false)", () => {
    test("It should return true", () => {
      const a = false;
      const b = false;

      const expectedResult = strictEquals(a, b);

      expect(expectedResult).toBe(true);
    });
  });
  describe("When it receives ('Water', 'oil')", () => {
    test("It should return false", () => {
      const a = "Water";
      const b = "oil";

      const expectedResult = strictEquals(a, b);

      expect(expectedResult).toBe(false);
    });
  });
  describe("When it receives (2, 2)", () => {
    test("It should return true", () => {
      const a = 2;
      const b = 2;

      const expectedResult = strictEquals(a, b);

      expect(expectedResult).toBe(true);
    });
  });
});
