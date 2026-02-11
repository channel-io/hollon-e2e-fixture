import { validateInputi1p3zg } from './validator';

describe('validateInputi1p3zg', () => {
  it('should throw when a is NaN', () => {
    expect(() => validateInputi1p3zg(NaN, 5)).toThrow(Error);
  });

  it('should throw when b is NaN', () => {
    expect(() => validateInputi1p3zg(5, NaN)).toThrow(Error);
  });

  it('should throw when both are NaN', () => {
    expect(() => validateInputi1p3zg(NaN, NaN)).toThrow(Error);
  });

  it('should not throw for valid numbers', () => {
    expect(() => validateInputi1p3zg(5, 10)).not.toThrow();
    expect(() => validateInputi1p3zg(0, 0)).not.toThrow();
    expect(() => validateInputi1p3zg(-5, 5)).not.toThrow();
    expect(() => validateInputi1p3zg(3.14, 2.71)).not.toThrow();
  });
});
