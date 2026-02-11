import { addNumbershzo48k } from './math-add-hzo48k';

describe('addNumbershzo48k', () => {
  describe('basic operations', () => {
    it('should add two positive numbers', () => {
      expect(addNumbershzo48k(2, 3)).toBe(5);
      expect(addNumbershzo48k(10, 20)).toBe(30);
    });

    it('should add with zero (identity property)', () => {
      expect(addNumbershzo48k(5, 0)).toBe(5);
      expect(addNumbershzo48k(0, 5)).toBe(5);
      expect(addNumbershzo48k(0, 0)).toBe(0);
    });

    it('should add negative numbers', () => {
      expect(addNumbershzo48k(-5, -3)).toBe(-8);
      expect(addNumbershzo48k(-10, -20)).toBe(-30);
    });

    it('should add mixed positive and negative numbers', () => {
      expect(addNumbershzo48k(5, -3)).toBe(2);
      expect(addNumbershzo48k(-5, 3)).toBe(-2);
      expect(addNumbershzo48k(-1, 1)).toBe(0);
    });
  });

  describe('floating point numbers', () => {
    it('should add decimal numbers', () => {
      expect(addNumbershzo48k(1.5, 2.5)).toBe(4);
      expect(addNumbershzo48k(0.1, 0.2)).toBeCloseTo(0.3);
    });

    it('should handle floating point precision', () => {
      expect(addNumbershzo48k(0.1, 0.2)).toBeCloseTo(0.3, 10);
      expect(addNumbershzo48k(1.1, 2.2)).toBeCloseTo(3.3, 10);
    });
  });

  describe('edge cases', () => {
    it('should handle very large numbers', () => {
      const large = Number.MAX_SAFE_INTEGER - 1;
      expect(addNumbershzo48k(large, 1)).toBe(Number.MAX_SAFE_INTEGER);
    });

    it('should handle very small numbers', () => {
      const small = Number.MIN_SAFE_INTEGER + 1;
      expect(addNumbershzo48k(small, -1)).toBe(Number.MIN_SAFE_INTEGER);
    });

    it('should result in zero when adding opposites', () => {
      expect(addNumbershzo48k(100, -100)).toBe(0);
      expect(addNumbershzo48k(-50, 50)).toBe(0);
    });
  });
});
