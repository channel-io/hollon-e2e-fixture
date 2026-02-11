import { subtractNumbersi3afp9 } from './math-sub';

describe('subtractNumbersi3afp9', () => {
  describe('basic subtraction', () => {
    it('should subtract two positive numbers', () => {
      expect(subtractNumbersi3afp9(5, 3)).toBe(2);
    });

    it('should subtract two negative numbers', () => {
      expect(subtractNumbersi3afp9(-5, -3)).toBe(-2);
    });

    it('should subtract negative from positive', () => {
      expect(subtractNumbersi3afp9(5, -3)).toBe(8);
    });

    it('should subtract positive from negative', () => {
      expect(subtractNumbersi3afp9(-5, 3)).toBe(-8);
    });

    it('should return negative when subtracting larger from smaller', () => {
      expect(subtractNumbersi3afp9(3, 5)).toBe(-2);
    });
  });

  describe('zero cases', () => {
    it('should handle zero minus zero', () => {
      expect(subtractNumbersi3afp9(0, 0)).toBe(0);
    });

    it('should handle number minus zero', () => {
      expect(subtractNumbersi3afp9(5, 0)).toBe(5);
    });

    it('should handle zero minus number', () => {
      expect(subtractNumbersi3afp9(0, 5)).toBe(-5);
    });
  });

  describe('decimal numbers', () => {
    it('should subtract decimal numbers', () => {
      expect(subtractNumbersi3afp9(1.5, 0.3)).toBeCloseTo(1.2, 10);
    });

    it('should handle decimal subtraction resulting in decimal', () => {
      expect(subtractNumbersi3afp9(2.7, 1.1)).toBeCloseTo(1.6, 10);
    });

    it('should handle subtraction with floating-point precision', () => {
      expect(subtractNumbersi3afp9(0.3, 0.1)).toBeCloseTo(0.2, 10);
    });

    it('should handle negative decimal result', () => {
      expect(subtractNumbersi3afp9(0.1, 0.2)).toBeCloseTo(-0.1, 10);
    });
  });

  describe('edge cases', () => {
    it('should handle large numbers', () => {
      expect(subtractNumbersi3afp9(1000000, 999999)).toBe(1);
    });

    it('should handle very small differences', () => {
      expect(subtractNumbersi3afp9(1.0000001, 1.0000000)).toBeCloseTo(0.0000001, 10);
    });
  });
});
