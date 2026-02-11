import { validateInputhosa00 } from './validator';

describe('validateInputhosa00', () => {
  it('should not throw for valid numbers', () => {
    expect(() => validateInputhosa00(1, 2)).not.toThrow();
  });

  it('should not throw for zero values', () => {
    expect(() => validateInputhosa00(0, 0)).not.toThrow();
  });

  it('should not throw for negative numbers', () => {
    expect(() => validateInputhosa00(-5, -10)).not.toThrow();
  });

  it('should not throw for decimal numbers', () => {
    expect(() => validateInputhosa00(3.14, 2.71)).not.toThrow();
  });

  it('should not throw for large numbers', () => {
    expect(() => validateInputhosa00(1e10, 1e20)).not.toThrow();
  });

  it('should throw when first argument is NaN', () => {
    expect(() => validateInputhosa00(NaN, 5)).toThrow(
      'Input values must be valid numbers (not NaN)'
    );
  });

  it('should throw when second argument is NaN', () => {
    expect(() => validateInputhosa00(5, NaN)).toThrow(
      'Input values must be valid numbers (not NaN)'
    );
  });

  it('should throw when both arguments are NaN', () => {
    expect(() => validateInputhosa00(NaN, NaN)).toThrow(
      'Input values must be valid numbers (not NaN)'
    );
  });

  it('should not throw for Infinity', () => {
    expect(() => validateInputhosa00(Infinity, -Infinity)).not.toThrow();
  });
});
