import { isValidhrx0le } from './isValidhrx0le';

describe('isValidhrx0le', () => {
  it('should not throw for two valid finite numbers', () => {
    expect(() => isValidhrx0le(1, 2)).not.toThrow();
    expect(() => isValidhrx0le(0, 0)).not.toThrow();
    expect(() => isValidhrx0le(-5, 10)).not.toThrow();
  });

  it('should not throw for floating point numbers', () => {
    expect(() => isValidhrx0le(1.5, 2.5)).not.toThrow();
    expect(() => isValidhrx0le(0.1, 0.2)).not.toThrow();
    expect(() => isValidhrx0le(-3.14, 2.71)).not.toThrow();
  });

  it('should not throw for large finite numbers', () => {
    expect(() => isValidhrx0le(1000000, 2000000)).not.toThrow();
    expect(() => isValidhrx0le(-1000000, 1000000)).not.toThrow();
  });

  it('should throw error if first parameter is NaN', () => {
    expect(() => isValidhrx0le(NaN, 5)).toThrow();
    expect(() => isValidhrx0le(NaN, 0)).toThrow();
  });

  it('should throw error if first parameter is Infinity', () => {
    expect(() => isValidhrx0le(Infinity, 5)).toThrow();
    expect(() => isValidhrx0le(-Infinity, 5)).toThrow();
  });

  it('should throw error if first parameter is not a number', () => {
    expect(() => isValidhrx0le('not a number', 5)).toThrow();
    expect(() => isValidhrx0le(null, 5)).toThrow();
    expect(() => isValidhrx0le(undefined, 5)).toThrow();
    expect(() => isValidhrx0le({}, 5)).toThrow();
    expect(() => isValidhrx0le([], 5)).toThrow();
  });

  it('should throw error if second parameter is NaN', () => {
    expect(() => isValidhrx0le(5, NaN)).toThrow();
    expect(() => isValidhrx0le(0, NaN)).toThrow();
  });

  it('should throw error if second parameter is Infinity', () => {
    expect(() => isValidhrx0le(5, Infinity)).toThrow();
    expect(() => isValidhrx0le(5, -Infinity)).toThrow();
  });

  it('should throw error if second parameter is not a number', () => {
    expect(() => isValidhrx0le(5, 'not a number')).toThrow();
    expect(() => isValidhrx0le(5, null)).toThrow();
    expect(() => isValidhrx0le(5, undefined)).toThrow();
    expect(() => isValidhrx0le(5, {})).toThrow();
    expect(() => isValidhrx0le(5, [])).toThrow();
  });

  it('should throw error if both parameters are invalid', () => {
    expect(() => isValidhrx0le(NaN, NaN)).toThrow();
    expect(() => isValidhrx0le(Infinity, -Infinity)).toThrow();
    expect(() => isValidhrx0le('not a number', undefined)).toThrow();
  });

  it('should provide helpful error messages for invalid first parameter', () => {
    expect(() => isValidhrx0le(NaN, 5)).toThrow(/First parameter/);
  });

  it('should provide helpful error messages for invalid second parameter', () => {
    expect(() => isValidhrx0le(5, NaN)).toThrow(/Second parameter/);
  });
});
