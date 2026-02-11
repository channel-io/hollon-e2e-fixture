import { addSafei2pxh9 } from '../src/addSafei2pxh9';

describe('addSafei2pxh9', () => {
  it('should add two positive numbers', () => {
    expect(addSafei2pxh9(1, 2)).toBe(3);
    expect(addSafei2pxh9(10, 20)).toBe(30);
    expect(addSafei2pxh9(5, 7)).toBe(12);
  });

  it('should add negative numbers', () => {
    expect(addSafei2pxh9(-1, -2)).toBe(-3);
    expect(addSafei2pxh9(-10, 5)).toBe(-5);
    expect(addSafei2pxh9(5, -3)).toBe(2);
  });

  it('should add with zero', () => {
    expect(addSafei2pxh9(0, 0)).toBe(0);
    expect(addSafei2pxh9(5, 0)).toBe(5);
    expect(addSafei2pxh9(0, 7)).toBe(7);
  });

  it('should add decimal numbers', () => {
    expect(addSafei2pxh9(3.14, 2.71)).toBeCloseTo(5.85, 2);
    expect(addSafei2pxh9(0.1, 0.2)).toBeCloseTo(0.3, 1);
  });

  it('should throw when first argument is not a finite number', () => {
    expect(() => addSafei2pxh9(NaN, 2)).toThrow('First argument must be a finite number');
    expect(() => addSafei2pxh9(Infinity, 2)).toThrow('First argument must be a finite number');
    expect(() => addSafei2pxh9(-Infinity, 2)).toThrow('First argument must be a finite number');
  });

  it('should throw when second argument is not a finite number', () => {
    expect(() => addSafei2pxh9(1, NaN)).toThrow('Second argument must be a finite number');
    expect(() => addSafei2pxh9(1, Infinity)).toThrow('Second argument must be a finite number');
    expect(() => addSafei2pxh9(1, -Infinity)).toThrow('Second argument must be a finite number');
  });

  it('should throw when both arguments are invalid', () => {
    expect(() => addSafei2pxh9(NaN, Infinity)).toThrow('First argument must be a finite number');
  });
});
