import { subtractNumbershzo48k } from './math-sub-hzo48k';

describe('subtractNumbershzo48k', () => {
  describe('basic operations', () => {
    it('should subtract positive numbers correctly', () => {
      expect(subtractNumbershzo48k(10, 5)).toBe(5);
    });

    it('should subtract negative numbers correctly', () => {
      expect(subtractNumbershzo48k(-10, -5)).toBe(-5);
    });

    it('should handle subtracting zero from a number', () => {
      expect(subtractNumbershzo48k(5, 0)).toBe(5);
    });

    it('should handle subtracting a number from zero', () => {
      expect(subtractNumbershzo48k(0, 5)).toBe(-5);
    });

    it('should return zero when subtracting equal numbers', () => {
      expect(subtractNumbershzo48k(5, 5)).toBe(0);
    });
  });

  describe('floating point operations', () => {
    it('should subtract decimal numbers correctly', () => {
      expect(subtractNumbershzo48k(10.5, 3.2)).toBeCloseTo(7.3, 10);
    });

    it('should handle small decimal subtraction', () => {
      expect(subtractNumbershzo48k(0.3, 0.2)).toBeCloseTo(0.1, 10);
    });
  });

  describe('negative results', () => {
    it('should return negative when second operand is larger', () => {
      expect(subtractNumbershzo48k(5, 10)).toBe(-5);
    });

    it('should handle mixed signs resulting in negative', () => {
      expect(subtractNumbershzo48k(-5, 3)).toBe(-8);
    });

    it('should handle positive minus negative', () => {
      expect(subtractNumbershzo48k(5, -3)).toBe(8);
    });
  });

  describe('edge cases', () => {
    it('should handle large numbers', () => {
      expect(subtractNumbershzo48k(1e10, 1e9)).toBe(9e9);
    });

    it('should handle very small numbers', () => {
      expect(subtractNumbershzo48k(1e-10, 1e-11)).toBeCloseTo(9e-11, 20);
    });

    it('should handle zero minus zero', () => {
      expect(subtractNumbershzo48k(0, 0)).toBe(0);
    });
  });
});
