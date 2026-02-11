import { subCheckedhy778v } from './subCheckedhy778v';

describe('subCheckedhy778v', () => {
  describe('valid subtractions', () => {
    it('should subtract two positive numbers', () => {
      expect(subCheckedhy778v(5, 3)).toBe(2);
    });

    it('should subtract resulting in negative', () => {
      expect(subCheckedhy778v(3, 5)).toBe(-2);
    });

    it('should subtract two negative numbers', () => {
      expect(subCheckedhy778v(-5, -3)).toBe(-2);
      expect(subCheckedhy778v(-3, -5)).toBe(2);
    });

    it('should subtract mixed sign numbers', () => {
      expect(subCheckedhy778v(5, -3)).toBe(8);
      expect(subCheckedhy778v(-5, 3)).toBe(-8);
    });

    it('should subtract decimal values', () => {
      expect(subCheckedhy778v(10.5, 2.3)).toBeCloseTo(8.2);
      expect(subCheckedhy778v(0.3, 0.1)).toBeCloseTo(0.2);
    });

    it('should handle zero', () => {
      expect(subCheckedhy778v(0, 5)).toBe(-5);
      expect(subCheckedhy778v(5, 0)).toBe(5);
      expect(subCheckedhy778v(0, 0)).toBe(0);
    });

    it('should handle large numbers', () => {
      expect(subCheckedhy778v(3000000, 1000000)).toBe(2000000);
    });
  });

  describe('invalid inputs', () => {
    it('should throw error for non-numeric first parameter', () => {
      expect(() => subCheckedhy778v('5', 3)).toThrow();
      expect(() => subCheckedhy778v(null, 3)).toThrow();
      expect(() => subCheckedhy778v(undefined, 3)).toThrow();
    });

    it('should throw error for non-numeric second parameter', () => {
      expect(() => subCheckedhy778v(5, '3')).toThrow();
      expect(() => subCheckedhy778v(5, null)).toThrow();
      expect(() => subCheckedhy778v(5, undefined)).toThrow();
    });

    it('should throw error for NaN', () => {
      expect(() => subCheckedhy778v(NaN, 3)).toThrow();
      expect(() => subCheckedhy778v(5, NaN)).toThrow();
    });

    it('should throw error for Infinity', () => {
      expect(() => subCheckedhy778v(Infinity, 3)).toThrow();
      expect(() => subCheckedhy778v(5, Infinity)).toThrow();
      expect(() => subCheckedhy778v(-Infinity, 3)).toThrow();
      expect(() => subCheckedhy778v(5, -Infinity)).toThrow();
    });
  });
});
