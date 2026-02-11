import { isValidhy778v } from './isValidhy778v';

describe('isValidhy778v', () => {
  describe('valid inputs', () => {
    it('should not throw for two positive finite numbers', () => {
      expect(() => isValidhy778v(1, 2)).not.toThrow();
    });

    it('should not throw for two negative finite numbers', () => {
      expect(() => isValidhy778v(-5, -10)).not.toThrow();
    });

    it('should not throw for zero values', () => {
      expect(() => isValidhy778v(0, 0)).not.toThrow();
    });

    it('should not throw for mixed positive and negative numbers', () => {
      expect(() => isValidhy778v(-5, 10)).not.toThrow();
    });

    it('should not throw for floating point numbers', () => {
      expect(() => isValidhy778v(1.5, 2.5)).not.toThrow();
    });

    it('should not throw for large finite numbers', () => {
      expect(() => isValidhy778v(1000000, 2000000)).not.toThrow();
    });

    it('should not throw for very small finite numbers', () => {
      expect(() => isValidhy778v(0.0001, 0.0002)).not.toThrow();
    });
  });

  describe('invalid first parameter', () => {
    it('should throw for NaN as first parameter', () => {
      expect(() => isValidhy778v(NaN, 5)).toThrow();
    });

    it('should throw for Infinity as first parameter', () => {
      expect(() => isValidhy778v(Infinity, 5)).toThrow();
    });

    it('should throw for -Infinity as first parameter', () => {
      expect(() => isValidhy778v(-Infinity, 5)).toThrow();
    });

    it('should throw for string as first parameter', () => {
      expect(() => isValidhy778v('not a number', 5)).toThrow();
    });

    it('should throw for null as first parameter', () => {
      expect(() => isValidhy778v(null, 5)).toThrow();
    });

    it('should throw for undefined as first parameter', () => {
      expect(() => isValidhy778v(undefined, 5)).toThrow();
    });

    it('should throw for object as first parameter', () => {
      expect(() => isValidhy778v({ value: 5 }, 5)).toThrow();
    });

    it('should throw for array as first parameter', () => {
      expect(() => isValidhy778v([1, 2], 5)).toThrow();
    });
  });

  describe('invalid second parameter', () => {
    it('should throw for NaN as second parameter', () => {
      expect(() => isValidhy778v(5, NaN)).toThrow();
    });

    it('should throw for Infinity as second parameter', () => {
      expect(() => isValidhy778v(5, Infinity)).toThrow();
    });

    it('should throw for -Infinity as second parameter', () => {
      expect(() => isValidhy778v(5, -Infinity)).toThrow();
    });

    it('should throw for string as second parameter', () => {
      expect(() => isValidhy778v(5, 'not a number')).toThrow();
    });

    it('should throw for null as second parameter', () => {
      expect(() => isValidhy778v(5, null)).toThrow();
    });

    it('should throw for undefined as second parameter', () => {
      expect(() => isValidhy778v(5, undefined)).toThrow();
    });

    it('should throw for object as second parameter', () => {
      expect(() => isValidhy778v(5, { value: 5 })).toThrow();
    });

    it('should throw for array as second parameter', () => {
      expect(() => isValidhy778v(5, [1, 2])).toThrow();
    });
  });

  describe('both parameters invalid', () => {
    it('should throw when both parameters are NaN', () => {
      expect(() => isValidhy778v(NaN, NaN)).toThrow();
    });

    it('should throw when both parameters are Infinity', () => {
      expect(() => isValidhy778v(Infinity, Infinity)).toThrow();
    });

    it('should throw when first is NaN and second is Infinity', () => {
      expect(() => isValidhy778v(NaN, Infinity)).toThrow();
    });
  });

  describe('error messages', () => {
    it('should throw descriptive error for invalid first parameter', () => {
      expect(() => isValidhy778v(NaN, 5)).toThrow(/[Ff]irst/i);
    });

    it('should throw descriptive error for invalid second parameter', () => {
      expect(() => isValidhy778v(5, NaN)).toThrow(/[Ss]econd/i);
    });

    it('should include NaN indicator in error message for NaN', () => {
      expect(() => isValidhy778v(NaN, 5)).toThrow(/NaN/i);
    });

    it('should include actual value in error message', () => {
      expect(() => isValidhy778v('invalid', 5)).toThrow();
    });
  });
});
