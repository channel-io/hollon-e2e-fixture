import { subSafehzgvf1 } from '../src/subSafehzgvf1';

describe('subSafehzgvf1', () => {
  describe('valid subtractions', () => {
    it('should subtract two positive numbers', () => {
      expect(subSafehzgvf1(10, 3)).toBe(7);
      expect(subSafehzgvf1(100, 50)).toBe(50);
    });

    it('should subtract two negative numbers', () => {
      expect(subSafehzgvf1(-5, -3)).toBe(-2);
      expect(subSafehzgvf1(-10, -20)).toBe(10);
    });

    it('should subtract negative from positive', () => {
      expect(subSafehzgvf1(10, -5)).toBe(15);
      expect(subSafehzgvf1(0, -10)).toBe(10);
    });

    it('should subtract positive from negative', () => {
      expect(subSafehzgvf1(-10, 5)).toBe(-15);
      expect(subSafehzgvf1(-3, 7)).toBe(-10);
    });
  });

  describe('edge cases', () => {
    it('should handle zero as minuend', () => {
      expect(subSafehzgvf1(0, 5)).toBe(-5);
      expect(subSafehzgvf1(0, -5)).toBe(5);
    });

    it('should handle zero as subtrahend', () => {
      expect(subSafehzgvf1(10, 0)).toBe(10);
      expect(subSafehzgvf1(-10, 0)).toBe(-10);
    });

    it('should handle both operands as zero', () => {
      expect(subSafehzgvf1(0, 0)).toBe(0);
    });

    it('should handle large numbers', () => {
      expect(subSafehzgvf1(1000000, 999999)).toBe(1);
      expect(subSafehzgvf1(Number.MAX_SAFE_INTEGER, 1)).toBe(Number.MAX_SAFE_INTEGER - 1);
    });

    it('should handle result crossing zero from positive to negative', () => {
      expect(subSafehzgvf1(5, 10)).toBe(-5);
      expect(subSafehzgvf1(1, 100)).toBe(-99);
    });

    it('should handle result crossing zero from negative to positive', () => {
      expect(subSafehzgvf1(-5, -10)).toBe(5);
      expect(subSafehzgvf1(-1, -100)).toBe(99);
    });
  });

  describe('error delegation to validator', () => {
    it('should throw error for NaN as first argument', () => {
      expect(() => subSafehzgvf1(NaN, 5)).toThrow('Parameter a is not a finite number');
    });

    it('should throw error for NaN as second argument', () => {
      expect(() => subSafehzgvf1(5, NaN)).toThrow('Parameter b is not a finite number');
    });

    it('should throw error for Infinity as first argument', () => {
      expect(() => subSafehzgvf1(Infinity, 5)).toThrow('Parameter a is not a finite number');
    });

    it('should throw error for Infinity as second argument', () => {
      expect(() => subSafehzgvf1(5, Infinity)).toThrow('Parameter b is not a finite number');
    });

    it('should throw error for -Infinity as first argument', () => {
      expect(() => subSafehzgvf1(-Infinity, 5)).toThrow('Parameter a is not a finite number');
    });

    it('should throw error for -Infinity as second argument', () => {
      expect(() => subSafehzgvf1(5, -Infinity)).toThrow('Parameter b is not a finite number');
    });
  });
});
