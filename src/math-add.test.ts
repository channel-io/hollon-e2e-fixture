import { addSafei1p3zg } from './math-add';

describe('addSafei1p3zg', () => {
  it('should add positive numbers', () => {
    expect(addSafei1p3zg(2, 3)).toBe(5);
    expect(addSafei1p3zg(10, 20)).toBe(30);
  });

  it('should add negative numbers', () => {
    expect(addSafei1p3zg(-5, -3)).toBe(-8);
    expect(addSafei1p3zg(-10, -20)).toBe(-30);
  });

  it('should add with zero', () => {
    expect(addSafei1p3zg(0, 5)).toBe(5);
    expect(addSafei1p3zg(5, 0)).toBe(5);
    expect(addSafei1p3zg(0, 0)).toBe(0);
  });

  it('should throw when a is NaN', () => {
    expect(() => addSafei1p3zg(NaN, 5)).toThrow('Invalid input: NaN detected');
  });

  it('should throw when b is NaN', () => {
    expect(() => addSafei1p3zg(5, NaN)).toThrow('Invalid input: NaN detected');
  });
});
