import { subSafei2pxh9 } from '../src/subSafei2pxh9';

describe('subSafei2pxh9', () => {
  it('should subtract two positive numbers', () => {
    expect(subSafei2pxh9(10, 3)).toBe(7);
  });

  it('should subtract two negative numbers', () => {
    expect(subSafei2pxh9(-5, -3)).toBe(-2);
  });

  it('should handle subtraction resulting in negative number', () => {
    expect(subSafei2pxh9(3, 10)).toBe(-7);
  });

  it('should handle zero', () => {
    expect(subSafei2pxh9(5, 0)).toBe(5);
    expect(subSafei2pxh9(0, 5)).toBe(-5);
  });

  it('should handle large safe integers', () => {
    expect(subSafei2pxh9(Number.MAX_SAFE_INTEGER, 1)).toBe(Number.MAX_SAFE_INTEGER - 1);
  });

  it('should throw error for NaN', () => {
    expect(() => subSafei2pxh9(NaN, 5)).toThrow('First argument must be a finite number');
  });

  it('should throw error for Infinity', () => {
    expect(() => subSafei2pxh9(Infinity, 5)).toThrow('First argument must be a finite number');
  });

  it('should handle decimal numbers', () => {
    expect(subSafei2pxh9(3.5, 2)).toBe(1.5);
  });
});
