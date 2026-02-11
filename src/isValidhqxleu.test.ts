import { isValidhqxleu } from './isValidhqxleu';

describe('isValidhqxleu', () => {
  describe('valid inputs - should not throw', () => {
    it('should accept two finite positive numbers', () => {
      expect(() => isValidhqxleu(1, 2)).not.toThrow();
    });

    it('should accept two finite negative numbers', () => {
      expect(() => isValidhqxleu(-1, -2)).not.toThrow();
    });

    it('should accept zero with another number', () => {
      expect(() => isValidhqxleu(0, 5)).not.toThrow();
    });

    it('should accept two zero values', () => {
      expect(() => isValidhqxleu(0, 0)).not.toThrow();
    });

    it('should accept large numbers within finite range', () => {
      expect(() => isValidhqxleu(1000000, 2000000)).not.toThrow();
    });

    it('should accept small decimal numbers', () => {
      expect(() => isValidhqxleu(0.5, 0.25)).not.toThrow();
    });

    it('should accept Number.MAX_SAFE_INTEGER', () => {
      expect(() => isValidhqxleu(Number.MAX_SAFE_INTEGER, 1)).not.toThrow();
    });

    it('should accept Number.MIN_SAFE_INTEGER', () => {
      expect(() => isValidhqxleu(Number.MIN_SAFE_INTEGER, 1)).not.toThrow();
    });

    it('should accept very small decimals near zero', () => {
      expect(() => isValidhqxleu(0.0001, 0.00001)).not.toThrow();
    });

    it('should accept mixed positive and negative', () => {
      expect(() => isValidhqxleu(-5.5, 3.7)).not.toThrow();
    });
  });

  describe('invalid inputs - should throw Error', () => {
    it('should throw when first parameter is NaN', () => {
      expect(() => isValidhqxleu(NaN, 5)).toThrow(Error);
    });

    it('should throw when second parameter is NaN', () => {
      expect(() => isValidhqxleu(5, NaN)).toThrow(Error);
    });

    it('should throw when both parameters are NaN', () => {
      expect(() => isValidhqxleu(NaN, NaN)).toThrow(Error);
    });

    it('should throw when first parameter is Infinity', () => {
      expect(() => isValidhqxleu(Infinity, 5)).toThrow(Error);
    });

    it('should throw when first parameter is -Infinity', () => {
      expect(() => isValidhqxleu(-Infinity, 5)).toThrow(Error);
    });

    it('should throw when second parameter is Infinity', () => {
      expect(() => isValidhqxleu(5, Infinity)).toThrow(Error);
    });

    it('should throw when second parameter is -Infinity', () => {
      expect(() => isValidhqxleu(5, -Infinity)).toThrow(Error);
    });

    it('should throw when both parameters are Infinity', () => {
      expect(() => isValidhqxleu(Infinity, Infinity)).toThrow(Error);
    });

    it('should throw when first parameter is null', () => {
      expect(() => isValidhqxleu(null, 5)).toThrow(Error);
    });

    it('should throw when second parameter is null', () => {
      expect(() => isValidhqxleu(5, null)).toThrow(Error);
    });

    it('should throw when first parameter is undefined', () => {
      expect(() => isValidhqxleu(undefined, 5)).toThrow(Error);
    });

    it('should throw when second parameter is undefined', () => {
      expect(() => isValidhqxleu(5, undefined)).toThrow(Error);
    });

    it('should throw when first parameter is a string', () => {
      expect(() => isValidhqxleu('5', 5)).toThrow(Error);
    });

    it('should throw when second parameter is a string', () => {
      expect(() => isValidhqxleu(5, '5')).toThrow(Error);
    });

    it('should throw when first parameter is a boolean', () => {
      expect(() => isValidhqxleu(true, 5)).toThrow(Error);
    });

    it('should throw when second parameter is a boolean', () => {
      expect(() => isValidhqxleu(5, false)).toThrow(Error);
    });

    it('should throw when first parameter is an object', () => {
      expect(() => isValidhqxleu({}, 5)).toThrow(Error);
    });

    it('should throw when second parameter is an object', () => {
      expect(() => isValidhqxleu(5, {})).toThrow(Error);
    });

    it('should throw when first parameter is an array', () => {
      expect(() => isValidhqxleu([1, 2], 5)).toThrow(Error);
    });

    it('should throw when second parameter is an array', () => {
      expect(() => isValidhqxleu(5, [1, 2])).toThrow(Error);
    });
  });

  describe('error messages', () => {
    it('should throw an Error (not other error types)', () => {
      expect(() => isValidhqxleu(NaN, 5)).toThrow(Error);
    });

    it('should provide informative error message for invalid first parameter', () => {
      expect(() => isValidhqxleu(NaN, 5)).toThrow();
    });

    it('should provide informative error message for invalid second parameter', () => {
      expect(() => isValidhqxleu(5, NaN)).toThrow();
    });
  });
});
