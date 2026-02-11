import { checkNumhrx0lg } from './checkNumhrx0lg';

describe('checkNumhrx0lg', () => {
  it('should not throw for two valid finite numbers', () => {
    expect(() => checkNumhrx0lg(1, 2)).not.toThrow();
    expect(() => checkNumhrx0lg(0, 0)).not.toThrow();
    expect(() => checkNumhrx0lg(-5, 10)).not.toThrow();
  });

  it('should not throw for floating point numbers', () => {
    expect(() => checkNumhrx0lg(1.5, 2.5)).not.toThrow();
    expect(() => checkNumhrx0lg(0.1, 0.2)).not.toThrow();
    expect(() => checkNumhrx0lg(-3.14, 2.71)).not.toThrow();
  });

  it('should not throw for large finite numbers', () => {
    expect(() => checkNumhrx0lg(1000000, 2000000)).not.toThrow();
    expect(() => checkNumhrx0lg(-1000000, 1000000)).not.toThrow();
  });

  it('should throw error if first parameter is NaN', () => {
    expect(() => checkNumhrx0lg(NaN, 5)).toThrow();
    expect(() => checkNumhrx0lg(NaN, 0)).toThrow();
  });

  it('should throw error if first parameter is Infinity', () => {
    expect(() => checkNumhrx0lg(Infinity, 5)).toThrow();
    expect(() => checkNumhrx0lg(-Infinity, 5)).toThrow();
  });

  it('should throw error if first parameter is not a number', () => {
    expect(() => checkNumhrx0lg('not a number', 5)).toThrow();
    expect(() => checkNumhrx0lg(null, 5)).toThrow();
    expect(() => checkNumhrx0lg(undefined, 5)).toThrow();
    expect(() => checkNumhrx0lg({}, 5)).toThrow();
    expect(() => checkNumhrx0lg([], 5)).toThrow();
  });

  it('should throw error if second parameter is NaN', () => {
    expect(() => checkNumhrx0lg(5, NaN)).toThrow();
    expect(() => checkNumhrx0lg(0, NaN)).toThrow();
  });

  it('should throw error if second parameter is Infinity', () => {
    expect(() => checkNumhrx0lg(5, Infinity)).toThrow();
    expect(() => checkNumhrx0lg(5, -Infinity)).toThrow();
  });

  it('should throw error if second parameter is not a number', () => {
    expect(() => checkNumhrx0lg(5, 'not a number')).toThrow();
    expect(() => checkNumhrx0lg(5, null)).toThrow();
    expect(() => checkNumhrx0lg(5, undefined)).toThrow();
    expect(() => checkNumhrx0lg(5, {})).toThrow();
    expect(() => checkNumhrx0lg(5, [])).toThrow();
  });

  it('should throw error if both parameters are invalid', () => {
    expect(() => checkNumhrx0lg(NaN, NaN)).toThrow();
    expect(() => checkNumhrx0lg(Infinity, -Infinity)).toThrow();
    expect(() => checkNumhrx0lg('not a number', undefined)).toThrow();
  });

  it('should provide helpful error messages for invalid first parameter', () => {
    expect(() => checkNumhrx0lg(NaN, 5)).toThrow(/First parameter/);
  });

  it('should provide helpful error messages for invalid second parameter', () => {
    expect(() => checkNumhrx0lg(5, NaN)).toThrow(/Second parameter/);
  });
});
