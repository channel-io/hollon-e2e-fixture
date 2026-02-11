import { isValidhxh0u0 } from './isValidhxh0u0';

describe('isValidhxh0u0', () => {
  it('should not throw for two valid finite integers', () => {
    expect(() => isValidhxh0u0(1, 2)).not.toThrow();
    expect(() => isValidhxh0u0(0, 0)).not.toThrow();
    expect(() => isValidhxh0u0(-5, 10)).not.toThrow();
  });

  it('should not throw for floating point numbers', () => {
    expect(() => isValidhxh0u0(1.5, 2.5)).not.toThrow();
    expect(() => isValidhxh0u0(0.1, 0.2)).not.toThrow();
    expect(() => isValidhxh0u0(-3.14, 2.71)).not.toThrow();
  });

  it('should not throw for mixed integer and float numbers', () => {
    expect(() => isValidhxh0u0(1, 2.5)).not.toThrow();
    expect(() => isValidhxh0u0(1.5, 2)).not.toThrow();
  });

  it('should not throw for negative numbers', () => {
    expect(() => isValidhxh0u0(-1, -2)).not.toThrow();
    expect(() => isValidhxh0u0(-5.5, -10.2)).not.toThrow();
  });

  it('should not throw for zero', () => {
    expect(() => isValidhxh0u0(0, 0)).not.toThrow();
    expect(() => isValidhxh0u0(0, 5)).not.toThrow();
    expect(() => isValidhxh0u0(-5, 0)).not.toThrow();
  });

  it('should not throw for large finite numbers', () => {
    expect(() => isValidhxh0u0(1000000, 2000000)).not.toThrow();
    expect(() => isValidhxh0u0(-1000000, 1000000)).not.toThrow();
    expect(() => isValidhxh0u0(Number.MAX_VALUE / 2, Number.MAX_VALUE / 2)).not.toThrow();
  });

  it('should throw error if first parameter is NaN', () => {
    expect(() => isValidhxh0u0(NaN, 5)).toThrow();
    expect(() => isValidhxh0u0(NaN, 0)).toThrow();
  });

  it('should throw error if first parameter is Infinity', () => {
    expect(() => isValidhxh0u0(Infinity, 5)).toThrow();
    expect(() => isValidhxh0u0(-Infinity, 5)).toThrow();
  });

  it('should throw error if first parameter is not a number', () => {
    expect(() => isValidhxh0u0('not a number', 5)).toThrow();
    expect(() => isValidhxh0u0(null, 5)).toThrow();
    expect(() => isValidhxh0u0(undefined, 5)).toThrow();
    expect(() => isValidhxh0u0({}, 5)).toThrow();
    expect(() => isValidhxh0u0([], 5)).toThrow();
    expect(() => isValidhxh0u0(true, 5)).toThrow();
  });

  it('should throw error if second parameter is NaN', () => {
    expect(() => isValidhxh0u0(5, NaN)).toThrow();
    expect(() => isValidhxh0u0(0, NaN)).toThrow();
  });

  it('should throw error if second parameter is Infinity', () => {
    expect(() => isValidhxh0u0(5, Infinity)).toThrow();
    expect(() => isValidhxh0u0(5, -Infinity)).toThrow();
  });

  it('should throw error if second parameter is not a number', () => {
    expect(() => isValidhxh0u0(5, 'not a number')).toThrow();
    expect(() => isValidhxh0u0(5, null)).toThrow();
    expect(() => isValidhxh0u0(5, undefined)).toThrow();
    expect(() => isValidhxh0u0(5, {})).toThrow();
    expect(() => isValidhxh0u0(5, [])).toThrow();
    expect(() => isValidhxh0u0(5, false)).toThrow();
  });

  it('should throw error if both parameters are invalid', () => {
    expect(() => isValidhxh0u0(NaN, NaN)).toThrow();
    expect(() => isValidhxh0u0(Infinity, -Infinity)).toThrow();
    expect(() => isValidhxh0u0('not a number', undefined)).toThrow();
  });

  it('should identify which parameter failed validation', () => {
    expect(() => isValidhxh0u0(NaN, 5)).toThrow(/Parameter a/);
    expect(() => isValidhxh0u0(5, NaN)).toThrow(/Parameter b/);
  });

  it('should provide error for Infinity in first parameter', () => {
    expect(() => isValidhxh0u0(Infinity, 5)).toThrow(/Parameter a/);
  });

  it('should provide error for Infinity in second parameter', () => {
    expect(() => isValidhxh0u0(5, Infinity)).toThrow(/Parameter b/);
  });
});
