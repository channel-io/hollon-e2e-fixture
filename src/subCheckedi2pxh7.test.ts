import { subCheckedi2pxh7 } from './subCheckedi2pxh7';

describe('subCheckedi2pxh7', () => {
  describe('valid subtractions - should return correct difference', () => {
    it('should subtract positive - positive', () => {
      expect(subCheckedi2pxh7(5, 3)).toBe(2);
    });

    it('should subtract negative - negative', () => {
      expect(subCheckedi2pxh7(-10, -5)).toBe(-5);
    });

    it('should subtract positive - negative', () => {
      expect(subCheckedi2pxh7(5, -3)).toBe(8);
    });

    it('should subtract negative - positive', () => {
      expect(subCheckedi2pxh7(-5, 3)).toBe(-8);
    });

    it('should handle zero cases', () => {
      expect(subCheckedi2pxh7(0, 5)).toBe(-5);
      expect(subCheckedi2pxh7(5, 0)).toBe(5);
      expect(subCheckedi2pxh7(0, 0)).toBe(0);
    });

    it('should handle decimal numbers', () => {
      expect(subCheckedi2pxh7(5.5, 2.3)).toBeCloseTo(3.2);
    });
  });

  describe('validation errors - first argument - should throw', () => {
    it('should throw when first argument is NaN', () => {
      expect(() => subCheckedi2pxh7(NaN, 5)).toThrow('first argument must be a finite number');
    });

    it('should throw when first argument is Infinity', () => {
      expect(() => subCheckedi2pxh7(Infinity, 5)).toThrow('first argument must be a finite number');
    });

    it('should throw when first argument is -Infinity', () => {
      expect(() => subCheckedi2pxh7(-Infinity, 5)).toThrow('first argument must be a finite number');
    });
  });

  describe('validation errors - second argument - should throw', () => {
    it('should throw when second argument is NaN', () => {
      expect(() => subCheckedi2pxh7(5, NaN)).toThrow('second argument must be a finite number');
    });

    it('should throw when second argument is Infinity', () => {
      expect(() => subCheckedi2pxh7(5, Infinity)).toThrow('second argument must be a finite number');
    });

    it('should throw when second argument is -Infinity', () => {
      expect(() => subCheckedi2pxh7(5, -Infinity)).toThrow('second argument must be a finite number');
    });
  });

  describe('both arguments invalid - should throw', () => {
    it('should throw when both arguments are NaN', () => {
      expect(() => subCheckedi2pxh7(NaN, NaN)).toThrow('first argument must be a finite number');
    });

    it('should throw when both arguments are Infinity', () => {
      expect(() => subCheckedi2pxh7(Infinity, -Infinity)).toThrow('first argument must be a finite number');
    });
  });
});
