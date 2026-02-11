import { isValidhsfgy3 } from './isValidhsfgy3';

describe('isValidhsfgy3', () => {
  it('should not throw for two valid finite numbers', () => {
    expect(() => isValidhsfgy3(1, 2)).not.toThrow();
    expect(() => isValidhsfgy3(0, 0)).not.toThrow();
    expect(() => isValidhsfgy3(-5, 10)).not.toThrow();
  });

  it('should not throw for floating point numbers', () => {
    expect(() => isValidhsfgy3(1.5, 2.5)).not.toThrow();
    expect(() => isValidhsfgy3(0.1, 0.2)).not.toThrow();
    expect(() => isValidhsfgy3(-3.14, 2.71)).not.toThrow();
  });

  it('should not throw for large finite numbers', () => {
    expect(() => isValidhsfgy3(1000000, 2000000)).not.toThrow();
    expect(() => isValidhsfgy3(-1000000, 1000000)).not.toThrow();
  });

  it('should throw error if first parameter is NaN', () => {
    expect(() => isValidhsfgy3(NaN, 5)).toThrow();
    expect(() => isValidhsfgy3(NaN, 0)).toThrow();
  });

  it('should throw error if first parameter is Infinity', () => {
    expect(() => isValidhsfgy3(Infinity, 5)).toThrow();
    expect(() => isValidhsfgy3(-Infinity, 5)).toThrow();
  });

  it('should throw error if first parameter is not a number', () => {
    expect(() => isValidhsfgy3('not a number', 5)).toThrow();
    expect(() => isValidhsfgy3(null, 5)).toThrow();
    expect(() => isValidhsfgy3(undefined, 5)).toThrow();
    expect(() => isValidhsfgy3({}, 5)).toThrow();
    expect(() => isValidhsfgy3([], 5)).toThrow();
  });

  it('should throw error if second parameter is NaN', () => {
    expect(() => isValidhsfgy3(5, NaN)).toThrow();
    expect(() => isValidhsfgy3(0, NaN)).toThrow();
  });

  it('should throw error if second parameter is Infinity', () => {
    expect(() => isValidhsfgy3(5, Infinity)).toThrow();
    expect(() => isValidhsfgy3(5, -Infinity)).toThrow();
  });

  it('should throw error if second parameter is not a number', () => {
    expect(() => isValidhsfgy3(5, 'not a number')).toThrow();
    expect(() => isValidhsfgy3(5, null)).toThrow();
    expect(() => isValidhsfgy3(5, undefined)).toThrow();
    expect(() => isValidhsfgy3(5, {})).toThrow();
    expect(() => isValidhsfgy3(5, [])).toThrow();
  });

  it('should throw error if both parameters are invalid', () => {
    expect(() => isValidhsfgy3(NaN, NaN)).toThrow();
    expect(() => isValidhsfgy3(Infinity, -Infinity)).toThrow();
    expect(() => isValidhsfgy3('not a number', undefined)).toThrow();
  });

  it('should provide helpful error messages for invalid first parameter', () => {
    expect(() => isValidhsfgy3(NaN, 5)).toThrow(/First parameter/);
  });

  it('should provide helpful error messages for invalid second parameter', () => {
    expect(() => isValidhsfgy3(5, NaN)).toThrow(/Second parameter/);
  });
});
