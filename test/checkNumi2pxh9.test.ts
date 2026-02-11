import { checkNumi2pxh9 } from '../src/checkNumi2pxh9';

describe('checkNumi2pxh9', () => {
  it('should not throw when both arguments are finite numbers', () => {
    expect(() => checkNumi2pxh9(1, 2)).not.toThrow();
    expect(() => checkNumi2pxh9(0, 0)).not.toThrow();
    expect(() => checkNumi2pxh9(-5, 10)).not.toThrow();
    expect(() => checkNumi2pxh9(3.14, 2.71)).not.toThrow();
  });

  it('should throw when first argument is not a number', () => {
    expect(() => checkNumi2pxh9('1', 2)).toThrow(Error);
    expect(() => checkNumi2pxh9(null, 2)).toThrow(Error);
    expect(() => checkNumi2pxh9(undefined, 2)).toThrow(Error);
    expect(() => checkNumi2pxh9({}, 2)).toThrow(Error);
    expect(() => checkNumi2pxh9([], 2)).toThrow(Error);
    expect(() => checkNumi2pxh9(true, 2)).toThrow(Error);
  });

  it('should throw when second argument is not a number', () => {
    expect(() => checkNumi2pxh9(1, '2')).toThrow(Error);
    expect(() => checkNumi2pxh9(1, null)).toThrow(Error);
    expect(() => checkNumi2pxh9(1, undefined)).toThrow(Error);
    expect(() => checkNumi2pxh9(1, {})).toThrow(Error);
    expect(() => checkNumi2pxh9(1, [])).toThrow(Error);
    expect(() => checkNumi2pxh9(1, false)).toThrow(Error);
  });

  it('should throw when first argument is Infinity', () => {
    expect(() => checkNumi2pxh9(Infinity, 2)).toThrow(Error);
    expect(() => checkNumi2pxh9(-Infinity, 2)).toThrow(Error);
  });

  it('should throw when second argument is Infinity', () => {
    expect(() => checkNumi2pxh9(1, Infinity)).toThrow(Error);
    expect(() => checkNumi2pxh9(1, -Infinity)).toThrow(Error);
  });

  it('should throw when first argument is NaN', () => {
    expect(() => checkNumi2pxh9(NaN, 2)).toThrow(Error);
  });

  it('should throw when second argument is NaN', () => {
    expect(() => checkNumi2pxh9(1, NaN)).toThrow(Error);
  });

  it('should throw when both arguments are invalid', () => {
    expect(() => checkNumi2pxh9('a', 'b')).toThrow(Error);
    expect(() => checkNumi2pxh9(NaN, Infinity)).toThrow(Error);
  });
});
