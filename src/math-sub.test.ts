import { subtractSafei3jb57 } from './math-sub';

describe('subtractSafei3jb57', () => {
  it('should return difference of two valid numbers', () => {
    expect(subtractSafei3jb57(5, 3)).toBe(2);
    expect(subtractSafei3jb57(10, 7)).toBe(3);
    expect(subtractSafei3jb57(0, 0)).toBe(0);
    expect(subtractSafei3jb57(-5, 3)).toBe(-8);
  });

  it('should throw Error when first input is NaN', () => {
    expect(() => subtractSafei3jb57(NaN, 5)).toThrow(Error);
  });

  it('should throw Error when second input is NaN', () => {
    expect(() => subtractSafei3jb57(5, NaN)).toThrow(Error);
  });
});
