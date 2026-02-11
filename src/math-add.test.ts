import { addSafehosa00 } from './math-add';

describe('addSafehosa00', () => {
  it('should add two positive numbers', () => {
    expect(addSafehosa00(2, 3)).toBe(5);
  });

  it('should add two negative numbers', () => {
    expect(addSafehosa00(-2, -3)).toBe(-5);
  });

  it('should add positive and negative numbers', () => {
    expect(addSafehosa00(10, -7)).toBe(3);
  });

  it('should handle zero values', () => {
    expect(addSafehosa00(0, 0)).toBe(0);
  });

  it('should add zero and a number', () => {
    expect(addSafehosa00(0, 5)).toBe(5);
  });

  it('should add decimal numbers', () => {
    expect(addSafehosa00(3.14, 2.71)).toBeCloseTo(5.85);
  });

  it('should add large numbers', () => {
    expect(addSafehosa00(1e10, 2e10)).toBe(3e10);
  });

  it('should add very small decimal numbers', () => {
    expect(addSafehosa00(0.1, 0.2)).toBeCloseTo(0.3);
  });

  it('should throw when first argument is NaN', () => {
    expect(() => addSafehosa00(NaN, 5)).toThrow(
      'Input values must be valid numbers (not NaN)'
    );
  });

  it('should throw when second argument is NaN', () => {
    expect(() => addSafehosa00(5, NaN)).toThrow(
      'Input values must be valid numbers (not NaN)'
    );
  });

  it('should throw when both arguments are NaN', () => {
    expect(() => addSafehosa00(NaN, NaN)).toThrow(
      'Input values must be valid numbers (not NaN)'
    );
  });

  it('should handle Infinity values', () => {
    expect(addSafehosa00(Infinity, 5)).toBe(Infinity);
  });

  it('should handle negative Infinity', () => {
    expect(addSafehosa00(-Infinity, 5)).toBe(-Infinity);
  });

  it('should handle Infinity + Infinity', () => {
    expect(addSafehosa00(Infinity, Infinity)).toBe(Infinity);
  });
});
