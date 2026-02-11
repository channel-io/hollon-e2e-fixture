import { subSafehxh0u2 } from './subSafehxh0u2';

describe('subSafehxh0u2', () => {
  it('should throw Error if first argument fails validation', () => {
    expect(() => subSafehxh0u2(NaN, 5)).toThrow();
    expect(() => subSafehxh0u2(Infinity, 5)).toThrow();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect(() => subSafehxh0u2('not a number' as any, 5)).toThrow();
  });

  it('should throw Error if second argument fails validation', () => {
    expect(() => subSafehxh0u2(5, NaN)).toThrow();
    expect(() => subSafehxh0u2(5, Infinity)).toThrow();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect(() => subSafehxh0u2(5, 'not a number' as any)).toThrow();
  });

  it('should return correct difference for positive integers: subSafehxh0u2(5, 3) === 2', () => {
    expect(subSafehxh0u2(5, 3)).toBe(2);
  });

  it('should work with negative numbers: subSafehxh0u2(-5, 3) === -8', () => {
    expect(subSafehxh0u2(-5, 3)).toBe(-8);
  });

  it('should work with floats: subSafehxh0u2(2.5, 1.5) === 1', () => {
    expect(subSafehxh0u2(2.5, 1.5)).toBe(1);
  });

  it('should work with zero: subSafehxh0u2(5, 0) === 5', () => {
    expect(subSafehxh0u2(5, 0)).toBe(5);
  });

  it('should work with negative floats', () => {
    expect(subSafehxh0u2(-1.5, 0.5)).toBe(-2);
  });

  it('should work with both negative numbers', () => {
    expect(subSafehxh0u2(-3, -7)).toBe(4);
  });

  it('should work with large numbers', () => {
    expect(subSafehxh0u2(1000000, 2000000)).toBe(-1000000);
  });

  it('should respect order: subSafehxh0u2(10, 3) !== subSafehxh0u2(3, 10)', () => {
    expect(subSafehxh0u2(10, 3)).toBe(7);
    expect(subSafehxh0u2(3, 10)).toBe(-7);
  });

  it('should handle edge case where result is zero: subSafehxh0u2(5, 5) === 0', () => {
    expect(subSafehxh0u2(5, 5)).toBe(0);
  });
});
