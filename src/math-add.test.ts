import { addSafei3jb57 } from './math-add';

describe('addSafei3jb57', () => {
  it('should return sum of two valid numbers', () => {
    expect(addSafei3jb57(2, 3)).toBe(5);
    expect(addSafei3jb57(0, 0)).toBe(0);
    expect(addSafei3jb57(-5, 10)).toBe(5);
    expect(addSafei3jb57(100, 200)).toBe(300);
  });

  it('should throw Error when first input is NaN', () => {
    expect(() => addSafei3jb57(NaN, 5)).toThrow(Error);
  });

  it('should throw Error when second input is NaN', () => {
    expect(() => addSafei3jb57(5, NaN)).toThrow(Error);
  });
});
