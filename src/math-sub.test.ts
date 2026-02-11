import { subtractSafehzy4eb } from './math-sub';

describe('subtractSafehzy4eb', () => {
  describe('valid subtraction cases', () => {
    it('should subtract positive numbers', () => {
      expect(subtractSafehzy4eb(10, 3)).toBe(7);
      expect(subtractSafehzy4eb(100, 50)).toBe(50);
      expect(subtractSafehzy4eb(5, 2)).toBe(3);
    });

    it('should subtract negative numbers', () => {
      expect(subtractSafehzy4eb(-10, -3)).toBe(-7);
      expect(subtractSafehzy4eb(-100, -50)).toBe(-50);
      expect(subtractSafehzy4eb(-5, -2)).toBe(-3);
    });

    it('should subtract with zero', () => {
      expect(subtractSafehzy4eb(0, 0)).toBe(0);
      expect(subtractSafehzy4eb(10, 0)).toBe(10);
      expect(subtractSafehzy4eb(0, 10)).toBe(-10);
    });

    it('should subtract mixed positive and negative numbers', () => {
      expect(subtractSafehzy4eb(10, -3)).toBe(13);
      expect(subtractSafehzy4eb(-10, 3)).toBe(-13);
      expect(subtractSafehzy4eb(-5, 2)).toBe(-7);
      expect(subtractSafehzy4eb(5, -2)).toBe(7);
    });

    it('should subtract floating point numbers', () => {
      expect(subtractSafehzy4eb(10.5, 3.2)).toBeCloseTo(7.3, 10);
      expect(subtractSafehzy4eb(0.1, 0.2)).toBeCloseTo(-0.1, 10);
      expect(subtractSafehzy4eb(100.99, 50.5)).toBeCloseTo(50.49, 10);
    });
  });

  describe('invalid input cases', () => {
    it('should throw when first argument is NaN', () => {
      expect(() => subtractSafehzy4eb(NaN, 2)).toThrow(Error);
      expect(() => subtractSafehzy4eb(NaN, 2)).toThrow('Input must not be NaN');
    });

    it('should throw when second argument is NaN', () => {
      expect(() => subtractSafehzy4eb(1, NaN)).toThrow(Error);
      expect(() => subtractSafehzy4eb(1, NaN)).toThrow('Input must not be NaN');
    });

    it('should throw when both arguments are NaN', () => {
      expect(() => subtractSafehzy4eb(NaN, NaN)).toThrow(Error);
      expect(() => subtractSafehzy4eb(NaN, NaN)).toThrow('Input must not be NaN');
    });
  });

  describe('edge cases', () => {
    it('should handle Infinity', () => {
      expect(subtractSafehzy4eb(Infinity, 1)).toBe(Infinity);
      expect(subtractSafehzy4eb(1, Infinity)).toBe(-Infinity);
      expect(subtractSafehzy4eb(Infinity, Infinity)).toBe(NaN);
      expect(subtractSafehzy4eb(-Infinity, -Infinity)).toBe(NaN);
      expect(subtractSafehzy4eb(Infinity, -Infinity)).toBe(Infinity);
      expect(subtractSafehzy4eb(-Infinity, Infinity)).toBe(-Infinity);
    });

    it('should handle very large numbers', () => {
      expect(subtractSafehzy4eb(Number.MAX_SAFE_INTEGER, 1)).toBe(Number.MAX_SAFE_INTEGER - 1);
      expect(subtractSafehzy4eb(Number.MIN_SAFE_INTEGER, -1)).toBe(Number.MIN_SAFE_INTEGER + 1);
    });

    it('should handle very small numbers', () => {
      expect(subtractSafehzy4eb(0.0000001, 0.0000001)).toBeCloseTo(0, 10);
      expect(subtractSafehzy4eb(Number.EPSILON, 0)).toBe(Number.EPSILON);
    });
  });
});
