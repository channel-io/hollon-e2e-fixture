import { subCheckedhxh0u0 } from './subCheckedhxh0u0';

describe('subCheckedhxh0u0', () => {
  // Valid subtraction cases
  it('should subtract two positive numbers', () => {
    expect(subCheckedhxh0u0(5, 3)).toBe(2);
    expect(subCheckedhxh0u0(10, 2)).toBe(8);
  });

  it('should subtract two negative numbers', () => {
    expect(subCheckedhxh0u0(-2, -3)).toBe(1);
    expect(subCheckedhxh0u0(-10, -5)).toBe(-5);
  });

  it('should subtract numbers with mixed signs', () => {
    expect(subCheckedhxh0u0(-5, 10)).toBe(-15);
    expect(subCheckedhxh0u0(10, -3)).toBe(13);
    expect(subCheckedhxh0u0(-15, -5)).toBe(-10);
  });

  it('should subtract zero correctly', () => {
    expect(subCheckedhxh0u0(0, 0)).toBe(0);
    expect(subCheckedhxh0u0(5, 0)).toBe(5);
    expect(subCheckedhxh0u0(0, -5)).toBe(5);
    expect(subCheckedhxh0u0(-10, 0)).toBe(-10);
  });

  it('should subtract floating point numbers', () => {
    expect(subCheckedhxh0u0(5.5, 2.5)).toBe(3);
    expect(subCheckedhxh0u0(3.2, 1.8)).toBeCloseTo(1.4, 10);
  });

  it('should handle floating point precision edge cases', () => {
    expect(subCheckedhxh0u0(0.3, 0.1)).toBeCloseTo(0.2, 10);
  });

  it('should subtract large numbers', () => {
    expect(subCheckedhxh0u0(2000000, 1000000)).toBe(1000000);
    expect(subCheckedhxh0u0(1000000, -1000000)).toBe(2000000);
  });

  it('should respect order sensitivity (a - b ≠ b - a)', () => {
    expect(subCheckedhxh0u0(5, 3)).toBe(2);
    expect(subCheckedhxh0u0(3, 5)).toBe(-2);
    expect(subCheckedhxh0u0(5, 3)).not.toBe(subCheckedhxh0u0(3, 5));
  });

  // Error cases - validation failures
  it('should throw error if first parameter is NaN', () => {
    expect(() => subCheckedhxh0u0(NaN, 5)).toThrow();
    expect(() => subCheckedhxh0u0(NaN, 0)).toThrow();
  });

  it('should throw error if first parameter is Infinity', () => {
    expect(() => subCheckedhxh0u0(Infinity, 5)).toThrow();
    expect(() => subCheckedhxh0u0(-Infinity, 5)).toThrow();
  });

  it('should throw error if first parameter is not a number', () => {
    expect(() => subCheckedhxh0u0('not a number' as unknown as number, 5)).toThrow();
    expect(() => subCheckedhxh0u0(null as unknown as number, 5)).toThrow();
    expect(() => subCheckedhxh0u0(undefined as unknown as number, 5)).toThrow();
    expect(() => subCheckedhxh0u0({} as unknown as number, 5)).toThrow();
    expect(() => subCheckedhxh0u0([] as unknown as number, 5)).toThrow();
  });

  it('should throw error if second parameter is NaN', () => {
    expect(() => subCheckedhxh0u0(5, NaN)).toThrow();
    expect(() => subCheckedhxh0u0(0, NaN)).toThrow();
  });

  it('should throw error if second parameter is Infinity', () => {
    expect(() => subCheckedhxh0u0(5, Infinity)).toThrow();
    expect(() => subCheckedhxh0u0(5, -Infinity)).toThrow();
  });

  it('should throw error if second parameter is not a number', () => {
    expect(() => subCheckedhxh0u0(5, 'not a number' as unknown as number)).toThrow();
    expect(() => subCheckedhxh0u0(5, null as unknown as number)).toThrow();
    expect(() => subCheckedhxh0u0(5, undefined as unknown as number)).toThrow();
    expect(() => subCheckedhxh0u0(5, {} as unknown as number)).toThrow();
    expect(() => subCheckedhxh0u0(5, [] as unknown as number)).toThrow();
  });

  it('should throw error if both parameters are invalid', () => {
    expect(() => subCheckedhxh0u0(NaN, NaN)).toThrow();
    expect(() => subCheckedhxh0u0(Infinity, -Infinity)).toThrow();
  });

  it('should provide helpful error messages mentioning which parameter failed', () => {
    expect(() => subCheckedhxh0u0(NaN, 5)).toThrow(/Parameter a/);
    expect(() => subCheckedhxh0u0(5, NaN)).toThrow(/Parameter b/);
  });
});
