import { subtractNumbershof3kc } from './math-sub-shof3kc';

describe('subtractNumbershof3kc', () => {
  // Positive numbers
  it('should subtract two positive numbers', () => {
    expect(subtractNumbershof3kc(5, 3)).toBe(2);
  });

  it('should handle subtracting a larger number from a smaller positive number', () => {
    expect(subtractNumbershof3kc(3, 5)).toBe(-2);
  });

  // Negative numbers
  it('should subtract a negative number (double negative = addition)', () => {
    expect(subtractNumbershof3kc(5, -3)).toBe(8);
  });

  it('should subtract from a negative number', () => {
    expect(subtractNumbershof3kc(-5, 3)).toBe(-8);
  });

  it('should subtract two negative numbers', () => {
    expect(subtractNumbershof3kc(-5, -3)).toBe(-2);
  });

  // Zero
  it('should subtract zero from a number', () => {
    expect(subtractNumbershof3kc(5, 0)).toBe(5);
  });

  it('should subtract a number from zero', () => {
    expect(subtractNumbershof3kc(0, 5)).toBe(-5);
  });

  it('should subtract zero from zero', () => {
    expect(subtractNumbershof3kc(0, 0)).toBe(0);
  });

  // Float numbers
  it('should subtract two float numbers', () => {
    expect(subtractNumbershof3kc(5.5, 2.3)).toBeCloseTo(3.2);
  });

  it('should handle float precision', () => {
    expect(subtractNumbershof3kc(10.1, 0.2)).toBeCloseTo(9.9);
  });

  it('should subtract float from integer', () => {
    expect(subtractNumbershof3kc(5, 2.5)).toBeCloseTo(2.5);
  });

  // Large numbers
  it('should handle large integers', () => {
    expect(subtractNumbershof3kc(1000000, 500000)).toBe(500000);
  });

  it('should handle very large numbers', () => {
    expect(subtractNumbershof3kc(999999999, 111111111)).toBe(888888888);
  });

  // Edge cases
  it('should handle subtraction resulting in zero', () => {
    expect(subtractNumbershof3kc(42, 42)).toBe(0);
  });

  it('should handle negative result', () => {
    expect(subtractNumbershof3kc(1, 100)).toBe(-99);
  });
});
