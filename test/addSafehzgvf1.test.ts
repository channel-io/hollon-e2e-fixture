import { addSafehzgvf1 } from '../src/addSafehzgvf1';

describe('addSafehzgvf1', () => {
  describe('valid additions', () => {
    it('should add two positive numbers', () => {
      expect(addSafehzgvf1(1, 2)).toBe(3);
      expect(addSafehzgvf1(100, 200)).toBe(300);
      expect(addSafehzgvf1(5, 10)).toBe(15);
    });

    it('should add two negative numbers', () => {
      expect(addSafehzgvf1(-1, -2)).toBe(-3);
      expect(addSafehzgvf1(-100, -200)).toBe(-300);
      expect(addSafehzgvf1(-5, -10)).toBe(-15);
    });

    it('should add positive and negative numbers', () => {
      expect(addSafehzgvf1(-5, 10)).toBe(5);
      expect(addSafehzgvf1(10, -5)).toBe(5);
      expect(addSafehzgvf1(-100, 50)).toBe(-50);
      expect(addSafehzgvf1(50, -100)).toBe(-50);
    });
  });

  describe('edge cases', () => {
    it('should handle zero', () => {
      expect(addSafehzgvf1(0, 0)).toBe(0);
      expect(addSafehzgvf1(0, 5)).toBe(5);
      expect(addSafehzgvf1(5, 0)).toBe(5);
      expect(addSafehzgvf1(-5, 0)).toBe(-5);
      expect(addSafehzgvf1(0, -5)).toBe(-5);
    });

    it('should handle large numbers', () => {
      expect(addSafehzgvf1(1000000, 2000000)).toBe(3000000);
      expect(addSafehzgvf1(-1000000, -2000000)).toBe(-3000000);
      expect(addSafehzgvf1(Number.MAX_SAFE_INTEGER - 1, 1)).toBe(Number.MAX_SAFE_INTEGER);
      expect(addSafehzgvf1(Number.MIN_SAFE_INTEGER + 1, -1)).toBe(Number.MIN_SAFE_INTEGER);
    });

    it('should handle decimal numbers', () => {
      expect(addSafehzgvf1(0.1, 0.2)).toBeCloseTo(0.3);
      expect(addSafehzgvf1(-0.5, 0.3)).toBeCloseTo(-0.2);
      expect(addSafehzgvf1(1.5, 2.5)).toBe(4);
    });
  });

  describe('error delegation to validator', () => {
    it('should throw for null as first parameter', () => {
      expect(() => addSafehzgvf1(null as any, 5)).toThrow(Error);
      expect(() => addSafehzgvf1(null as any, 5)).toThrow(/not a finite number/);
    });

    it('should throw for undefined as first parameter', () => {
      expect(() => addSafehzgvf1(undefined as any, 5)).toThrow(Error);
      expect(() => addSafehzgvf1(undefined as any, 5)).toThrow(/not a finite number/);
    });

    it('should throw for NaN as first parameter', () => {
      expect(() => addSafehzgvf1(NaN, 5)).toThrow(Error);
      expect(() => addSafehzgvf1(NaN, 5)).toThrow(/not a finite number/);
    });

    it('should throw for Infinity as first parameter', () => {
      expect(() => addSafehzgvf1(Infinity, 5)).toThrow(Error);
      expect(() => addSafehzgvf1(Infinity, 5)).toThrow(/not a finite number/);
    });

    it('should throw for -Infinity as first parameter', () => {
      expect(() => addSafehzgvf1(-Infinity, 5)).toThrow(Error);
      expect(() => addSafehzgvf1(-Infinity, 5)).toThrow(/not a finite number/);
    });

    it('should throw for string as first parameter', () => {
      expect(() => addSafehzgvf1('123' as any, 5)).toThrow(Error);
      expect(() => addSafehzgvf1('123' as any, 5)).toThrow(/not a finite number/);
    });

    it('should throw for object as first parameter', () => {
      expect(() => addSafehzgvf1({} as any, 5)).toThrow(Error);
      expect(() => addSafehzgvf1({} as any, 5)).toThrow(/not a finite number/);
    });

    it('should throw for null as second parameter', () => {
      expect(() => addSafehzgvf1(5, null as any)).toThrow(Error);
      expect(() => addSafehzgvf1(5, null as any)).toThrow(/not a finite number/);
    });

    it('should throw for undefined as second parameter', () => {
      expect(() => addSafehzgvf1(5, undefined as any)).toThrow(Error);
      expect(() => addSafehzgvf1(5, undefined as any)).toThrow(/not a finite number/);
    });

    it('should throw for NaN as second parameter', () => {
      expect(() => addSafehzgvf1(5, NaN)).toThrow(Error);
      expect(() => addSafehzgvf1(5, NaN)).toThrow(/not a finite number/);
    });

    it('should throw for Infinity as second parameter', () => {
      expect(() => addSafehzgvf1(5, Infinity)).toThrow(Error);
      expect(() => addSafehzgvf1(5, Infinity)).toThrow(/not a finite number/);
    });

    it('should throw for -Infinity as second parameter', () => {
      expect(() => addSafehzgvf1(5, -Infinity)).toThrow(Error);
      expect(() => addSafehzgvf1(5, -Infinity)).toThrow(/not a finite number/);
    });

    it('should throw for string as second parameter', () => {
      expect(() => addSafehzgvf1(5, '123' as any)).toThrow(Error);
      expect(() => addSafehzgvf1(5, '123' as any)).toThrow(/not a finite number/);
    });

    it('should throw for object as second parameter', () => {
      expect(() => addSafehzgvf1(5, {} as any)).toThrow(Error);
      expect(() => addSafehzgvf1(5, {} as any)).toThrow(/not a finite number/);
    });

    it('should throw when both parameters are invalid', () => {
      expect(() => addSafehzgvf1(null as any, undefined as any)).toThrow(Error);
      expect(() => addSafehzgvf1(NaN, Infinity)).toThrow(Error);
      expect(() => addSafehzgvf1('a' as any, 'b' as any)).toThrow(Error);
    });
  });
});
