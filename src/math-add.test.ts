import { addNumbersi19ku0 } from './math-add';

describe('addNumbersi19ku0', () => {
  it('should add two positive numbers', () => {
    expect(addNumbersi19ku0(2, 3)).toBe(5);
    expect(addNumbersi19ku0(10, 20)).toBe(30);
  });

  it('should add positive and negative numbers', () => {
    expect(addNumbersi19ku0(5, -3)).toBe(2);
    expect(addNumbersi19ku0(-3, 5)).toBe(2);
  });

  it('should add two negative numbers', () => {
    expect(addNumbersi19ku0(-2, -3)).toBe(-5);
    expect(addNumbersi19ku0(-10, -15)).toBe(-25);
  });

  it('should add with zero', () => {
    expect(addNumbersi19ku0(5, 0)).toBe(5);
    expect(addNumbersi19ku0(0, 5)).toBe(5);
    expect(addNumbersi19ku0(0, 0)).toBe(0);
  });

  it('should add decimal numbers', () => {
    expect(addNumbersi19ku0(1.5, 2.3)).toBe(3.8);
    expect(addNumbersi19ku0(0.1, 0.2)).toBeCloseTo(0.3);
  });

  it('should add large numbers', () => {
    expect(addNumbersi19ku0(1000000, 2000000)).toBe(3000000);
    expect(addNumbersi19ku0(999999999, 1)).toBe(1000000000);
  });

  it('should handle very small decimals', () => {
    expect(addNumbersi19ku0(0.0001, 0.0002)).toBeCloseTo(0.0003);
    expect(addNumbersi19ku0(-0.0001, 0.0001)).toBe(0);
  });
});
