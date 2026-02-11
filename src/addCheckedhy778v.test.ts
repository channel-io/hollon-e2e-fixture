import { addCheckedhy778v } from './addCheckedhy778v';

describe('addCheckedhy778v', () => {
  describe('valid additions', () => {
    it('should add two positive numbers', () => {
      expect(addCheckedhy778v(5, 3)).toBe(8);
    });

    it('should add two negative numbers', () => {
      expect(addCheckedhy778v(-5, -3)).toBe(-8);
    });

    it('should add mixed sign numbers', () => {
      expect(addCheckedhy778v(5, -3)).toBe(2);
      expect(addCheckedhy778v(-5, 3)).toBe(-2);
    });

    it('should add decimal values', () => {
      expect(addCheckedhy778v(1.5, 2.5)).toBe(4);
      expect(addCheckedhy778v(0.1, 0.2)).toBeCloseTo(0.3);
    });

    it('should handle zero', () => {
      expect(addCheckedhy778v(0, 5)).toBe(5);
      expect(addCheckedhy778v(5, 0)).toBe(5);
      expect(addCheckedhy778v(0, 0)).toBe(0);
    });

    it('should handle large numbers', () => {
      expect(addCheckedhy778v(1000000, 2000000)).toBe(3000000);
    });
  });

  describe('invalid inputs', () => {
    it('should throw error for non-numeric first parameter', () => {
      expect(() => addCheckedhy778v('5', 3)).toThrow();
      expect(() => addCheckedhy778v(null, 3)).toThrow();
      expect(() => addCheckedhy778v(undefined, 3)).toThrow();
    });

    it('should throw error for non-numeric second parameter', () => {
      expect(() => addCheckedhy778v(5, '3')).toThrow();
      expect(() => addCheckedhy778v(5, null)).toThrow();
      expect(() => addCheckedhy778v(5, undefined)).toThrow();
    });

    it('should throw error for NaN', () => {
      expect(() => addCheckedhy778v(NaN, 3)).toThrow();
      expect(() => addCheckedhy778v(5, NaN)).toThrow();
    });

    it('should throw error for Infinity', () => {
      expect(() => addCheckedhy778v(Infinity, 3)).toThrow();
      expect(() => addCheckedhy778v(5, Infinity)).toThrow();
      expect(() => addCheckedhy778v(-Infinity, 3)).toThrow();
      expect(() => addCheckedhy778v(5, -Infinity)).toThrow();
    });
  });
});
