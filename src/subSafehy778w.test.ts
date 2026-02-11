import { subSafehy778w } from './subSafehy778w';

describe('subSafehy778w', () => {
  describe('valid subtractions', () => {
    it('should return correct result for two positive numbers', () => {
      expect(subSafehy778w(10, 5)).toBe(5);
    });

    it('should return correct result for positive minus larger positive', () => {
      expect(subSafehy778w(5, 10)).toBe(-5);
    });

    it('should return correct result for two negative numbers', () => {
      expect(subSafehy778w(-5, -10)).toBe(5);
    });

    it('should return correct result for negative minus positive', () => {
      expect(subSafehy778w(-5, 10)).toBe(-15);
    });

    it('should return correct result for positive minus negative', () => {
      expect(subSafehy778w(10, -5)).toBe(15);
    });

    it('should return zero when subtracting equal numbers', () => {
      expect(subSafehy778w(5, 5)).toBe(0);
    });

    it('should handle subtraction with zero as minuend', () => {
      expect(subSafehy778w(0, 5)).toBe(-5);
    });

    it('should handle subtraction with zero as subtrahend', () => {
      expect(subSafehy778w(5, 0)).toBe(5);
    });

    it('should handle subtraction with both zeros', () => {
      expect(subSafehy778w(0, 0)).toBe(0);
    });

    it('should handle floating point numbers', () => {
      expect(subSafehy778w(10.5, 3.2)).toBeCloseTo(7.3, 5);
    });

    it('should handle negative floating point numbers', () => {
      expect(subSafehy778w(-5.5, -2.3)).toBeCloseTo(-3.2, 5);
    });

    it('should handle large finite numbers', () => {
      expect(subSafehy778w(1000000, 500000)).toBe(500000);
    });

    it('should handle very small finite numbers', () => {
      expect(subSafehy778w(0.0001, 0.00005)).toBeCloseTo(0.00005, 8);
    });
  });

  describe('invalid input validation', () => {
    it('should throw error when first parameter is NaN', () => {
      expect(() => subSafehy778w(NaN, 5)).toThrow();
    });

    it('should throw error when first parameter is Infinity', () => {
      expect(() => subSafehy778w(Infinity, 5)).toThrow();
    });

    it('should throw error when first parameter is -Infinity', () => {
      expect(() => subSafehy778w(-Infinity, 5)).toThrow();
    });

    it('should throw error when first parameter is not a number', () => {
      expect(() => subSafehy778w('not a number', 5)).toThrow();
    });

    it('should throw error when first parameter is null', () => {
      expect(() => subSafehy778w(null as unknown, 5)).toThrow();
    });

    it('should throw error when first parameter is undefined', () => {
      expect(() => subSafehy778w(undefined as unknown, 5)).toThrow();
    });

    it('should throw error when second parameter is NaN', () => {
      expect(() => subSafehy778w(5, NaN)).toThrow();
    });

    it('should throw error when second parameter is Infinity', () => {
      expect(() => subSafehy778w(5, Infinity)).toThrow();
    });

    it('should throw error when second parameter is -Infinity', () => {
      expect(() => subSafehy778w(5, -Infinity)).toThrow();
    });

    it('should throw error when second parameter is not a number', () => {
      expect(() => subSafehy778w(5, 'not a number')).toThrow();
    });

    it('should throw error when second parameter is null', () => {
      expect(() => subSafehy778w(5, null as unknown)).toThrow();
    });

    it('should throw error when second parameter is undefined', () => {
      expect(() => subSafehy778w(5, undefined as unknown)).toThrow();
    });

    it('should throw error when both parameters are invalid', () => {
      expect(() => subSafehy778w(NaN, Infinity)).toThrow();
    });

    it('should throw error with descriptive message for invalid first parameter', () => {
      expect(() => subSafehy778w(NaN, 5)).toThrow(/[Ff]irst/);
    });

    it('should throw error with descriptive message for invalid second parameter', () => {
      expect(() => subSafehy778w(5, NaN)).toThrow(/[Ss]econd/);
    });
  });
});
