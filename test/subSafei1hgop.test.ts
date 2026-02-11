import { subSafei1hgop } from '../src/subSafei1hgop';

describe('subSafei1hgop', () => {
  it('should subtract two valid numbers correctly', () => {
    expect(subSafei1hgop(5, 3)).toBe(2);
    expect(subSafei1hgop(10, 7)).toBe(3);
    expect(subSafei1hgop(0, 0)).toBe(0);
  });

  it('should handle negative results correctly', () => {
    expect(subSafei1hgop(3, 5)).toBe(-2);
    expect(subSafei1hgop(1, 10)).toBe(-9);
    expect(subSafei1hgop(-5, -3)).toBe(-2);
  });

  it('should throw error for invalid inputs via checkNumi1hgop delegation', () => {
    expect(() => subSafei1hgop(NaN, 5)).toThrow('Invalid input: a must be a finite number');
    expect(() => subSafei1hgop(5, NaN)).toThrow('Invalid input: b must be a finite number');
    expect(() => subSafei1hgop(Infinity, 5)).toThrow('Invalid input: a must be a finite number');
    expect(() => subSafei1hgop(5, -Infinity)).toThrow('Invalid input: b must be a finite number');
  });
});
