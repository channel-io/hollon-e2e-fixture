import { addNumbershjar9a } from './math-add';

describe('addNumbershjar9a', () => {
  describe('basic operations', () => {
    it('should add two positive numbers', () => {
      expect(addNumbershjar9a(2, 3)).toBe(5);
    });

    it('should add larger positive numbers', () => {
      expect(addNumbershjar9a(100, 200)).toBe(300);
    });
  });

  describe('zero cases', () => {
    it('should add zero to a positive number', () => {
      expect(addNumbershjar9a(5, 0)).toBe(5);
    });

    it('should add a positive number to zero', () => {
      expect(addNumbershjar9a(0, 5)).toBe(5);
    });

    it('should add zero to zero', () => {
      expect(addNumbershjar9a(0, 0)).toBe(0);
    });
  });

  describe('negative numbers', () => {
    it('should add two negative numbers', () => {
      expect(addNumbershjar9a(-2, -3)).toBe(-5);
    });

    it('should add positive and negative numbers', () => {
      expect(addNumbershjar9a(10, -5)).toBe(5);
    });

    it('should add negative and positive numbers', () => {
      expect(addNumbershjar9a(-10, 5)).toBe(-5);
    });

    it('should return zero when adding opposite numbers', () => {
      expect(addNumbershjar9a(7, -7)).toBe(0);
    });
  });

  describe('decimal numbers', () => {
    it('should add two decimal numbers', () => {
      expect(addNumbershjar9a(1.5, 2.5)).toBe(4);
    });

    it('should add decimal with precision', () => {
      expect(addNumbershjar9a(0.1, 0.2)).toBeCloseTo(0.3);
    });

    it('should add positive and negative decimals', () => {
      expect(addNumbershjar9a(3.7, -1.2)).toBeCloseTo(2.5);
    });

    it('should handle very small decimals', () => {
      expect(addNumbershjar9a(0.001, 0.002)).toBeCloseTo(0.003);
    });
  });

  describe('large numbers', () => {
    it('should add large positive numbers', () => {
      expect(addNumbershjar9a(1000000, 2000000)).toBe(3000000);
    });

    it('should add very large numbers', () => {
      expect(addNumbershjar9a(1e10, 2e10)).toBe(3e10);
    });

    it('should add large negative numbers', () => {
      expect(addNumbershjar9a(-1e9, -2e9)).toBe(-3e9);
    });
  });

  describe('edge cases', () => {
    it('should handle infinity', () => {
      expect(addNumbershjar9a(Infinity, 5)).toBe(Infinity);
    });

    it('should handle negative infinity', () => {
      expect(addNumbershjar9a(-Infinity, 5)).toBe(-Infinity);
    });

    it('should handle very small positive numbers', () => {
      expect(addNumbershjar9a(Number.MIN_VALUE, 1)).toBe(1 + Number.MIN_VALUE);
    });

    it('should handle mixed operations', () => {
      expect(addNumbershjar9a(-3.5, 2.5)).toBe(-1);
    });
  });
});
