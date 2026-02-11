import { subtractNumbersi19ku0 } from './math-sub';

describe('subtractNumbersi19ku0', () => {
  it('should subtract positive numbers correctly', () => {
    expect(subtractNumbersi19ku0(10, 3)).toBe(7);
  });

  it('should handle negative numbers', () => {
    expect(subtractNumbersi19ku0(-5, -3)).toBe(-2);
  });

  it('should handle zero as second operand', () => {
    expect(subtractNumbersi19ku0(5, 0)).toBe(5);
  });

  it('should handle zero as first operand', () => {
    expect(subtractNumbersi19ku0(0, 5)).toBe(-5);
  });

  it('should handle decimal numbers', () => {
    expect(subtractNumbersi19ku0(10.5, 3.2)).toBeCloseTo(7.3, 1);
  });

  it('should return negative result when b > a', () => {
    expect(subtractNumbersi19ku0(3, 10)).toBe(-7);
  });

  it('should return zero when subtracting equal numbers', () => {
    expect(subtractNumbersi19ku0(5, 5)).toBe(0);
  });
});
