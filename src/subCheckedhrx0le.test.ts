import { subCheckedhrx0le } from './subCheckedhrx0le';

describe('subCheckedhrx0le', () => {
  // Valid subtraction cases
  it('should subtract two positive numbers', () => {
    expect(subCheckedhrx0le(5, 3)).toBe(2);
    expect(subCheckedhrx0le(10, 2)).toBe(8);
  });

  it('should subtract two negative numbers', () => {
    expect(subCheckedhrx0le(-2, -3)).toBe(1);
    expect(subCheckedhrx0le(-10, -5)).toBe(-5);
  });

  it('should subtract numbers with mixed signs', () => {
    expect(subCheckedhrx0le(-5, 10)).toBe(-15);
    expect(subCheckedhrx0le(10, -3)).toBe(13);
    expect(subCheckedhrx0le(-15, -5)).toBe(-10);
  });

  it('should subtract zero correctly', () => {
    expect(subCheckedhrx0le(0, 0)).toBe(0);
    expect(subCheckedhrx0le(5, 0)).toBe(5);
    expect(subCheckedhrx0le(0, -5)).toBe(5);
    expect(subCheckedhrx0le(-10, 0)).toBe(-10);
  });

  it('should subtract floating point numbers', () => {
    expect(subCheckedhrx0le(5.5, 2.5)).toBe(3);
    expect(subCheckedhrx0le(3.2, 1.8)).toBeCloseTo(1.4, 10);
  });

  it('should handle floating point precision edge cases', () => {
    expect(subCheckedhrx0le(0.3, 0.1)).toBeCloseTo(0.2, 10);
  });

  it('should subtract large numbers', () => {
    expect(subCheckedhrx0le(2000000, 1000000)).toBe(1000000);
    expect(subCheckedhrx0le(1000000, -1000000)).toBe(2000000);
  });

  it('should respect order sensitivity (a - b ≠ b - a)', () => {
    expect(subCheckedhrx0le(5, 3)).toBe(2);
    expect(subCheckedhrx0le(3, 5)).toBe(-2);
    expect(subCheckedhrx0le(5, 3)).not.toBe(subCheckedhrx0le(3, 5));
  });

  // Error cases - validation failures
  it('should throw error if first parameter is NaN', () => {
    expect(() => subCheckedhrx0le(NaN, 5)).toThrow();
    expect(() => subCheckedhrx0le(NaN, 0)).toThrow();
  });

  it('should throw error if first parameter is Infinity', () => {
    expect(() => subCheckedhrx0le(Infinity, 5)).toThrow();
    expect(() => subCheckedhrx0le(-Infinity, 5)).toThrow();
  });

  it('should throw error if first parameter is not a number', () => {
    expect(() => subCheckedhrx0le('not a number' as unknown as number, 5)).toThrow();
    expect(() => subCheckedhrx0le(null as unknown as number, 5)).toThrow();
    expect(() => subCheckedhrx0le(undefined as unknown as number, 5)).toThrow();
    expect(() => subCheckedhrx0le({} as unknown as number, 5)).toThrow();
    expect(() => subCheckedhrx0le([] as unknown as number, 5)).toThrow();
  });

  it('should throw error if second parameter is NaN', () => {
    expect(() => subCheckedhrx0le(5, NaN)).toThrow();
    expect(() => subCheckedhrx0le(0, NaN)).toThrow();
  });

  it('should throw error if second parameter is Infinity', () => {
    expect(() => subCheckedhrx0le(5, Infinity)).toThrow();
    expect(() => subCheckedhrx0le(5, -Infinity)).toThrow();
  });

  it('should throw error if second parameter is not a number', () => {
    expect(() => subCheckedhrx0le(5, 'not a number' as unknown as number)).toThrow();
    expect(() => subCheckedhrx0le(5, null as unknown as number)).toThrow();
    expect(() => subCheckedhrx0le(5, undefined as unknown as number)).toThrow();
    expect(() => subCheckedhrx0le(5, {} as unknown as number)).toThrow();
    expect(() => subCheckedhrx0le(5, [] as unknown as number)).toThrow();
  });

  it('should throw error if both parameters are invalid', () => {
    expect(() => subCheckedhrx0le(NaN, NaN)).toThrow();
    expect(() => subCheckedhrx0le(Infinity, -Infinity)).toThrow();
  });

  it('should provide helpful error messages mentioning which parameter failed', () => {
    expect(() => subCheckedhrx0le(NaN, 5)).toThrow(/First parameter/);
    expect(() => subCheckedhrx0le(5, NaN)).toThrow(/Second parameter/);
  });
});
