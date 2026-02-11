import { subtractSafei1p3zg } from './math-sub';

describe('subtractSafei1p3zg', () => {
  it('should subtract positive numbers', () => {
    expect(subtractSafei1p3zg(10, 3)).toBe(7);
    expect(subtractSafei1p3zg(100, 25)).toBe(75);
  });

  it('should subtract negative numbers', () => {
    expect(subtractSafei1p3zg(-5, -3)).toBe(-2);
    expect(subtractSafei1p3zg(5, -3)).toBe(8);
    expect(subtractSafei1p3zg(-5, 3)).toBe(-8);
  });

  it('should subtract with zero', () => {
    expect(subtractSafei1p3zg(0, 0)).toBe(0);
    expect(subtractSafei1p3zg(5, 0)).toBe(5);
    expect(subtractSafei1p3zg(0, 5)).toBe(-5);
  });

  it('should throw when a is NaN', () => {
    expect(() => subtractSafei1p3zg(NaN, 5)).toThrow('Invalid input: NaN detected');
  });

  it('should throw when b is NaN', () => {
    expect(() => subtractSafei1p3zg(5, NaN)).toThrow('Invalid input: NaN detected');
  });
});
