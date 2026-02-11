import { addSafehzy4eb } from './math-add';

describe('addSafehzy4eb', () => {
  describe('valid addition cases', () => {
    it('should add two positive numbers', () => {
      expect(addSafehzy4eb(2, 3)).toBe(5);
    });

    it('should add two negative numbers', () => {
      expect(addSafehzy4eb(-2, -3)).toBe(-5);
    });

    it('should add zero to a number', () => {
      expect(addSafehzy4eb(5, 0)).toBe(5);
      expect(addSafehzy4eb(0, 5)).toBe(5);
    });

    it('should add zero to zero', () => {
      expect(addSafehzy4eb(0, 0)).toBe(0);
    });

    it('should add mixed positive and negative numbers', () => {
      expect(addSafehzy4eb(5, -3)).toBe(2);
      expect(addSafehzy4eb(-5, 3)).toBe(-2);
    });

    it('should add floating point numbers', () => {
      expect(addSafehzy4eb(1.5, 2.3)).toBeCloseTo(3.8);
      expect(addSafehzy4eb(-1.5, 2.3)).toBeCloseTo(0.8);
    });
  });

  describe('invalid input cases', () => {
    it('should throw Error when first argument is NaN', () => {
      expect(() => addSafehzy4eb(NaN, 5)).toThrow('Input must not be NaN');
    });

    it('should throw Error when second argument is NaN', () => {
      expect(() => addSafehzy4eb(5, NaN)).toThrow('Input must not be NaN');
    });

    it('should throw Error when both arguments are NaN', () => {
      expect(() => addSafehzy4eb(NaN, NaN)).toThrow('Input must not be NaN');
    });
  });

  describe('edge cases', () => {
    it('should handle Infinity', () => {
      expect(addSafehzy4eb(Infinity, 5)).toBe(Infinity);
      expect(addSafehzy4eb(5, Infinity)).toBe(Infinity);
      expect(addSafehzy4eb(Infinity, Infinity)).toBe(Infinity);
    });

    it('should handle negative Infinity', () => {
      expect(addSafehzy4eb(-Infinity, 5)).toBe(-Infinity);
      expect(addSafehzy4eb(5, -Infinity)).toBe(-Infinity);
      expect(addSafehzy4eb(-Infinity, -Infinity)).toBe(-Infinity);
    });

    it('should handle Infinity and negative Infinity', () => {
      expect(addSafehzy4eb(Infinity, -Infinity)).toBe(NaN);
    });

    it('should handle very large numbers', () => {
      const result = addSafehzy4eb(Number.MAX_VALUE, Number.MAX_VALUE);
      expect(result).toBe(Infinity);
    });

    it('should handle very small numbers', () => {
      expect(addSafehzy4eb(Number.MIN_VALUE, Number.MIN_VALUE)).toBeGreaterThan(0);
    });
  });
});
