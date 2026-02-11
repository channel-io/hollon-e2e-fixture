import { subtractSafehosa00 } from './math-sub';

describe('subtractSafehosa00', () => {
  it('should subtract two positive numbers', () => {
    expect(subtractSafehosa00(10, 3)).toBe(7);
  });

  it('should subtract two negative numbers', () => {
    expect(subtractSafehosa00(-2, -3)).toBe(1);
  });

  it('should subtract negative from positive', () => {
    expect(subtractSafehosa00(10, -5)).toBe(15);
  });

  it('should subtract positive from negative', () => {
    expect(subtractSafehosa00(-10, 5)).toBe(-15);
  });

  it('should handle zero values', () => {
    expect(subtractSafehosa00(0, 0)).toBe(0);
  });

  it('should subtract from zero', () => {
    expect(subtractSafehosa00(0, 5)).toBe(-5);
  });

  it('should subtract zero from a number', () => {
    expect(subtractSafehosa00(5, 0)).toBe(5);
  });

  it('should subtract decimal numbers', () => {
    expect(subtractSafehosa00(5.85, 2.71)).toBeCloseTo(3.14);
  });

  it('should subtract large numbers', () => {
    expect(subtractSafehosa00(3e10, 1e10)).toBe(2e10);
  });

  it('should subtract very small decimal numbers', () => {
    expect(subtractSafehosa00(0.3, 0.1)).toBeCloseTo(0.2);
  });

  it('should throw when first argument is NaN', () => {
    expect(() => subtractSafehosa00(NaN, 5)).toThrow(
      'Input values must be valid numbers (not NaN)'
    );
  });

  it('should throw when second argument is NaN', () => {
    expect(() => subtractSafehosa00(5, NaN)).toThrow(
      'Input values must be valid numbers (not NaN)'
    );
  });

  it('should throw when both arguments are NaN', () => {
    expect(() => subtractSafehosa00(NaN, NaN)).toThrow(
      'Input values must be valid numbers (not NaN)'
    );
  });

  it('should handle Infinity values', () => {
    expect(subtractSafehosa00(Infinity, 5)).toBe(Infinity);
  });

  it('should handle negative Infinity', () => {
    expect(subtractSafehosa00(-Infinity, 5)).toBe(-Infinity);
  });

  it('should handle Infinity - Infinity as NaN', () => {
    expect(Number.isNaN(subtractSafehosa00(Infinity, Infinity))).toBe(true);
  });
});
