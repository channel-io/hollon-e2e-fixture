import { addSafehyonkk } from './math-add';

describe('addSafehyonkk', () => {
  describe('valid arithmetic operations', () => {
    it('should add two positive numbers', () => {
      expect(addSafehyonkk(2, 3)).toBe(5);
    });

    it('should add two negative numbers', () => {
      expect(addSafehyonkk(-5, -10)).toBe(-15);
    });

    it('should add zero values', () => {
      expect(addSafehyonkk(0, 0)).toBe(0);
    });

    it('should add positive and zero', () => {
      expect(addSafehyonkk(5, 0)).toBe(5);
    });

    it('should add negative and zero', () => {
      expect(addSafehyonkk(-5, 0)).toBe(-5);
    });

    it('should add mixed positive and negative numbers', () => {
      expect(addSafehyonkk(-5, 10)).toBe(5);
    });

    it('should add positive to negative number', () => {
      expect(addSafehyonkk(3, -8)).toBe(-5);
    });
  });

  describe('floating-point calculations', () => {
    it('should add two floating point numbers', () => {
      expect(addSafehyonkk(1.5, 2.5)).toBe(4);
    });

    it('should add negative floating point numbers', () => {
      expect(addSafehyonkk(-1.5, -2.5)).toBe(-4);
    });

    it('should add mixed floating point numbers', () => {
      expect(addSafehyonkk(1.5, -0.5)).toBe(1);
    });

    it('should handle very small floating point numbers', () => {
      expect(addSafehyonkk(0.0001, 0.0002)).toBeCloseTo(0.0003);
    });

    it('should handle floating point precision edge cases', () => {
      expect(addSafehyonkk(0.1, 0.2)).toBeCloseTo(0.3);
    });
  });

  describe('large and small numbers', () => {
    it('should add large positive numbers', () => {
      expect(addSafehyonkk(1000000, 2000000)).toBe(3000000);
    });

    it('should add large negative numbers', () => {
      expect(addSafehyonkk(-1000000, -2000000)).toBe(-3000000);
    });

    it('should add large and small numbers', () => {
      expect(addSafehyonkk(1000000, 0.0001)).toBe(1000000.0001);
    });

    it('should add very small positive numbers', () => {
      expect(addSafehyonkk(0.000001, 0.000002)).toBeCloseTo(0.000003);
    });
  });

  describe('invalid input validation', () => {
    it('should throw for NaN as first parameter', () => {
      expect(() => addSafehyonkk(NaN, 5)).toThrow();
    });

    it('should throw for NaN as second parameter', () => {
      expect(() => addSafehyonkk(5, NaN)).toThrow();
    });

    it('should throw for Infinity as first parameter', () => {
      expect(() => addSafehyonkk(Infinity, 5)).toThrow();
    });

    it('should throw for Infinity as second parameter', () => {
      expect(() => addSafehyonkk(5, Infinity)).toThrow();
    });

    it('should throw for -Infinity as first parameter', () => {
      expect(() => addSafehyonkk(-Infinity, 5)).toThrow();
    });

    it('should throw for -Infinity as second parameter', () => {
      expect(() => addSafehyonkk(5, -Infinity)).toThrow();
    });

    it('should throw when both parameters are NaN', () => {
      expect(() => addSafehyonkk(NaN, NaN)).toThrow();
    });

    it('should throw when both parameters are Infinity', () => {
      expect(() => addSafehyonkk(Infinity, Infinity)).toThrow();
    });
  });

  describe('error message verification', () => {
    it('should throw descriptive error for invalid first parameter', () => {
      expect(() => addSafehyonkk(NaN, 5)).toThrow(/[Ff]irst/i);
    });

    it('should throw descriptive error for invalid second parameter', () => {
      expect(() => addSafehyonkk(5, NaN)).toThrow(/[Ss]econd/i);
    });

    it('should include NaN indicator in error message for NaN', () => {
      expect(() => addSafehyonkk(NaN, 5)).toThrow(/NaN/i);
    });

    it('should indicate Infinity in error message for Infinity', () => {
      expect(() => addSafehyonkk(Infinity, 5)).toThrow(/Infinity/i);
    });

    it('should indicate -Infinity in error message for -Infinity', () => {
      expect(() => addSafehyonkk(5, -Infinity)).toThrow(/Infinity/i);
    });
  });
});
