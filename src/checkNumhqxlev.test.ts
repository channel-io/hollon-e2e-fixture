import { checkNumhqxlev } from './checkNumhqxlev';

describe('checkNumhqxlev', () => {
  it('should not throw for two valid finite numbers', () => {
    expect(() => checkNumhqxlev(1, 2)).not.toThrow();
    expect(() => checkNumhqxlev(0, 0)).not.toThrow();
    expect(() => checkNumhqxlev(-5, 10)).not.toThrow();
  });

  it('should not throw for floating point numbers', () => {
    expect(() => checkNumhqxlev(1.5, 2.5)).not.toThrow();
    expect(() => checkNumhqxlev(0.1, 0.2)).not.toThrow();
    expect(() => checkNumhqxlev(-3.14, 2.71)).not.toThrow();
  });

  it('should not throw for large finite numbers', () => {
    expect(() => checkNumhqxlev(1000000, 2000000)).not.toThrow();
    expect(() => checkNumhqxlev(-1000000, 1000000)).not.toThrow();
  });

  it('should throw error if first parameter is NaN', () => {
    expect(() => checkNumhqxlev(NaN, 5)).toThrow();
    expect(() => checkNumhqxlev(NaN, 0)).toThrow();
  });

  it('should throw error if first parameter is Infinity', () => {
    expect(() => checkNumhqxlev(Infinity, 5)).toThrow();
    expect(() => checkNumhqxlev(-Infinity, 5)).toThrow();
  });

  it('should throw error if first parameter is not a number', () => {
    expect(() => checkNumhqxlev('not a number', 5)).toThrow();
    expect(() => checkNumhqxlev(null, 5)).toThrow();
    expect(() => checkNumhqxlev(undefined, 5)).toThrow();
    expect(() => checkNumhqxlev({}, 5)).toThrow();
    expect(() => checkNumhqxlev([], 5)).toThrow();
  });

  it('should throw error if second parameter is NaN', () => {
    expect(() => checkNumhqxlev(5, NaN)).toThrow();
    expect(() => checkNumhqxlev(0, NaN)).toThrow();
  });

  it('should throw error if second parameter is Infinity', () => {
    expect(() => checkNumhqxlev(5, Infinity)).toThrow();
    expect(() => checkNumhqxlev(5, -Infinity)).toThrow();
  });

  it('should throw error if second parameter is not a number', () => {
    expect(() => checkNumhqxlev(5, 'not a number')).toThrow();
    expect(() => checkNumhqxlev(5, null)).toThrow();
    expect(() => checkNumhqxlev(5, undefined)).toThrow();
    expect(() => checkNumhqxlev(5, {})).toThrow();
    expect(() => checkNumhqxlev(5, [])).toThrow();
  });

  it('should throw error if both parameters are invalid', () => {
    expect(() => checkNumhqxlev(NaN, NaN)).toThrow();
    expect(() => checkNumhqxlev(Infinity, -Infinity)).toThrow();
    expect(() => checkNumhqxlev('not a number', undefined)).toThrow();
  });

  it('should provide helpful error messages for invalid first parameter', () => {
    expect(() => checkNumhqxlev(NaN, 5)).toThrow(/First parameter/);
  });

  it('should provide helpful error messages for invalid second parameter', () => {
    expect(() => checkNumhqxlev(5, NaN)).toThrow(/Second parameter/);
  });
});
