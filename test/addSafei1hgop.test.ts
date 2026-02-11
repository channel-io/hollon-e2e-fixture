import { addSafei1hgop } from '../src/addSafei1hgop';

describe('addSafei1hgop', () => {
  describe('valid addition', () => {
    it('should add two positive numbers correctly', () => {
      expect(addSafei1hgop(2, 3)).toBe(5);
    });

    it('should add two negative numbers correctly', () => {
      expect(addSafei1hgop(-1, -2)).toBe(-3);
    });

    it('should add positive and negative numbers correctly', () => {
      expect(addSafei1hgop(5, -3)).toBe(2);
      expect(addSafei1hgop(-5, 3)).toBe(-2);
    });

    it('should handle zero correctly', () => {
      expect(addSafei1hgop(0, 0)).toBe(0);
      expect(addSafei1hgop(5, 0)).toBe(5);
      expect(addSafei1hgop(0, 5)).toBe(5);
    });

    it('should handle floating point numbers correctly', () => {
      expect(addSafei1hgop(1.5, 2.5)).toBe(4);
      expect(addSafei1hgop(0.1, 0.2)).toBeCloseTo(0.3);
    });
  });

  describe('invalid inputs should throw via checkNumi1hgop delegation', () => {
    it('should throw for null inputs', () => {
      expect(() => addSafei1hgop(null as any, 1)).toThrow('Invalid input: a must be a finite number');
      expect(() => addSafei1hgop(1, null as any)).toThrow('Invalid input: b must be a finite number');
    });

    it('should throw for undefined inputs', () => {
      expect(() => addSafei1hgop(undefined as any, 1)).toThrow('Invalid input: a must be a finite number');
      expect(() => addSafei1hgop(1, undefined as any)).toThrow('Invalid input: b must be a finite number');
    });

    it('should throw for string inputs', () => {
      expect(() => addSafei1hgop('2' as any, 3)).toThrow('Invalid input: a must be a finite number');
      expect(() => addSafei1hgop(2, '3' as any)).toThrow('Invalid input: b must be a finite number');
    });

    it('should throw for NaN', () => {
      expect(() => addSafei1hgop(NaN, 1)).toThrow('Invalid input: a must be a finite number');
      expect(() => addSafei1hgop(1, NaN)).toThrow('Invalid input: b must be a finite number');
    });

    it('should throw for Infinity', () => {
      expect(() => addSafei1hgop(Infinity, 1)).toThrow('Invalid input: a must be a finite number');
      expect(() => addSafei1hgop(1, Infinity)).toThrow('Invalid input: b must be a finite number');
    });

    it('should throw for -Infinity', () => {
      expect(() => addSafei1hgop(-Infinity, 1)).toThrow('Invalid input: a must be a finite number');
      expect(() => addSafei1hgop(1, -Infinity)).toThrow('Invalid input: b must be a finite number');
    });
  });
});
