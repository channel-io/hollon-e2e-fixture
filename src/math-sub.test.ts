import { subtractSafehyonkk } from './math-sub';

describe('subtractSafehyonkk', () => {
  describe('valid arithmetic operations', () => {
    it('should subtract two positive numbers', () => {
      expect(subtractSafehyonkk(5, 3)).toBe(2);
    });

    it('should subtract two negative numbers', () => {
      expect(subtractSafehyonkk(-5, -10)).toBe(5);
    });

    it('should subtract from zero', () => {
      expect(subtractSafehyonkk(0, 5)).toBe(-5);
    });

    it('should subtract zero from positive number', () => {
      expect(subtractSafehyonkk(5, 0)).toBe(5);
    });

    it('should subtract zero from negative number', () => {
      expect(subtractSafehyonkk(-5, 0)).toBe(-5);
    });

    it('should subtract negative from positive', () => {
      expect(subtractSafehyonkk(5, -3)).toBe(8);
    });

    it('should subtract positive from negative', () => {
      expect(subtractSafehyonkk(-5, 3)).toBe(-8);
    });

    it('should subtract equal numbers', () => {
      expect(subtractSafehyonkk(5, 5)).toBe(0);
    });
  });

  describe('floating-point calculations', () => {
    it('should subtract two floating point numbers', () => {
      expect(subtractSafehyonkk(5.5, 2.5)).toBe(3);
    });

    it('should subtract negative floating point numbers', () => {
      expect(subtractSafehyonkk(-1.5, -2.5)).toBe(1);
    });

    it('should subtract mixed floating point numbers', () => {
      expect(subtractSafehyonkk(1.5, -0.5)).toBe(2);
    });

    it('should handle very small floating point numbers', () => {
      expect(subtractSafehyonkk(0.0003, 0.0001)).toBeCloseTo(0.0002);
    });

    it('should handle floating point precision edge cases', () => {
      expect(subtractSafehyonkk(0.3, 0.1)).toBeCloseTo(0.2);
    });
  });

  describe('large and small numbers', () => {
    it('should subtract large positive numbers', () => {
      expect(subtractSafehyonkk(3000000, 1000000)).toBe(2000000);
    });

    it('should subtract large negative numbers', () => {
      expect(subtractSafehyonkk(-1000000, -3000000)).toBe(2000000);
    });

    it('should subtract small from large numbers', () => {
      expect(subtractSafehyonkk(1000000, 0.0001)).toBe(999999.9999);
    });

    it('should subtract very small positive numbers', () => {
      expect(subtractSafehyonkk(0.000003, 0.000001)).toBeCloseTo(0.000002);
    });
  });

  describe('invalid input validation', () => {
    it('should throw for NaN as first parameter', () => {
      expect(() => subtractSafehyonkk(NaN, 5)).toThrow();
    });

    it('should throw for NaN as second parameter', () => {
      expect(() => subtractSafehyonkk(5, NaN)).toThrow();
    });

    it('should throw for Infinity as first parameter', () => {
      expect(() => subtractSafehyonkk(Infinity, 5)).toThrow();
    });

    it('should throw for Infinity as second parameter', () => {
      expect(() => subtractSafehyonkk(5, Infinity)).toThrow();
    });

    it('should throw for -Infinity as first parameter', () => {
      expect(() => subtractSafehyonkk(-Infinity, 5)).toThrow();
    });

    it('should throw for -Infinity as second parameter', () => {
      expect(() => subtractSafehyonkk(5, -Infinity)).toThrow();
    });

    it('should throw when both parameters are NaN', () => {
      expect(() => subtractSafehyonkk(NaN, NaN)).toThrow();
    });

    it('should throw when both parameters are Infinity', () => {
      expect(() => subtractSafehyonkk(Infinity, Infinity)).toThrow();
    });
  });

  describe('error message verification', () => {
    it('should throw descriptive error for invalid first parameter', () => {
      expect(() => subtractSafehyonkk(NaN, 5)).toThrow(/[Ff]irst/i);
    });

    it('should throw descriptive error for invalid second parameter', () => {
      expect(() => subtractSafehyonkk(5, NaN)).toThrow(/[Ss]econd/i);
    });

    it('should include NaN indicator in error message for NaN', () => {
      expect(() => subtractSafehyonkk(NaN, 5)).toThrow(/NaN/i);
    });

    it('should indicate Infinity in error message for Infinity', () => {
      expect(() => subtractSafehyonkk(Infinity, 5)).toThrow(/Infinity/i);
    });

    it('should indicate -Infinity in error message for -Infinity', () => {
      expect(() => subtractSafehyonkk(5, -Infinity)).toThrow(/Infinity/i);
    });
  });
});
