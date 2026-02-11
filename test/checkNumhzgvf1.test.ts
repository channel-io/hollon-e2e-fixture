import { checkNumhzgvf1 } from '../src/checkNumhzgvf1';

describe('checkNumhzgvf1', () => {
  describe('valid inputs', () => {
    it('should not throw for positive numbers', () => {
      expect(() => checkNumhzgvf1(1, 2)).not.toThrow();
      expect(() => checkNumhzgvf1(100, 200)).not.toThrow();
    });

    it('should not throw for negative numbers', () => {
      expect(() => checkNumhzgvf1(-1, -2)).not.toThrow();
      expect(() => checkNumhzgvf1(-100, -200)).not.toThrow();
    });

    it('should not throw for zero', () => {
      expect(() => checkNumhzgvf1(0, 0)).not.toThrow();
      expect(() => checkNumhzgvf1(0, 5)).not.toThrow();
      expect(() => checkNumhzgvf1(5, 0)).not.toThrow();
    });

    it('should not throw for mixed positive and negative', () => {
      expect(() => checkNumhzgvf1(-5, 10)).not.toThrow();
      expect(() => checkNumhzgvf1(10, -5)).not.toThrow();
    });
  });

  describe('invalid inputs - parameter a', () => {
    it('should throw for null as first parameter', () => {
      expect(() => checkNumhzgvf1(null, 5)).toThrow(Error);
      expect(() => checkNumhzgvf1(null, 5)).toThrow(/not a finite number/);
    });

    it('should throw for undefined as first parameter', () => {
      expect(() => checkNumhzgvf1(undefined, 5)).toThrow(Error);
      expect(() => checkNumhzgvf1(undefined, 5)).toThrow(/not a finite number/);
    });

    it('should throw for NaN as first parameter', () => {
      expect(() => checkNumhzgvf1(NaN, 5)).toThrow(Error);
      expect(() => checkNumhzgvf1(NaN, 5)).toThrow(/not a finite number/);
    });

    it('should throw for Infinity as first parameter', () => {
      expect(() => checkNumhzgvf1(Infinity, 5)).toThrow(Error);
      expect(() => checkNumhzgvf1(Infinity, 5)).toThrow(/not a finite number/);
    });

    it('should throw for -Infinity as first parameter', () => {
      expect(() => checkNumhzgvf1(-Infinity, 5)).toThrow(Error);
      expect(() => checkNumhzgvf1(-Infinity, 5)).toThrow(/not a finite number/);
    });

    it('should throw for string as first parameter', () => {
      expect(() => checkNumhzgvf1('123', 5)).toThrow(Error);
      expect(() => checkNumhzgvf1('123', 5)).toThrow(/not a finite number/);
    });

    it('should throw for object as first parameter', () => {
      expect(() => checkNumhzgvf1({}, 5)).toThrow(Error);
      expect(() => checkNumhzgvf1({}, 5)).toThrow(/not a finite number/);
    });
  });

  describe('invalid inputs - parameter b', () => {
    it('should throw for null as second parameter', () => {
      expect(() => checkNumhzgvf1(5, null)).toThrow(Error);
      expect(() => checkNumhzgvf1(5, null)).toThrow(/not a finite number/);
    });

    it('should throw for undefined as second parameter', () => {
      expect(() => checkNumhzgvf1(5, undefined)).toThrow(Error);
      expect(() => checkNumhzgvf1(5, undefined)).toThrow(/not a finite number/);
    });

    it('should throw for NaN as second parameter', () => {
      expect(() => checkNumhzgvf1(5, NaN)).toThrow(Error);
      expect(() => checkNumhzgvf1(5, NaN)).toThrow(/not a finite number/);
    });

    it('should throw for Infinity as second parameter', () => {
      expect(() => checkNumhzgvf1(5, Infinity)).toThrow(Error);
      expect(() => checkNumhzgvf1(5, Infinity)).toThrow(/not a finite number/);
    });

    it('should throw for -Infinity as second parameter', () => {
      expect(() => checkNumhzgvf1(5, -Infinity)).toThrow(Error);
      expect(() => checkNumhzgvf1(5, -Infinity)).toThrow(/not a finite number/);
    });

    it('should throw for string as second parameter', () => {
      expect(() => checkNumhzgvf1(5, '123')).toThrow(Error);
      expect(() => checkNumhzgvf1(5, '123')).toThrow(/not a finite number/);
    });

    it('should throw for object as second parameter', () => {
      expect(() => checkNumhzgvf1(5, {})).toThrow(Error);
      expect(() => checkNumhzgvf1(5, {})).toThrow(/not a finite number/);
    });
  });

  describe('invalid inputs - both parameters', () => {
    it('should throw when both parameters are invalid', () => {
      expect(() => checkNumhzgvf1(null, undefined)).toThrow(Error);
      expect(() => checkNumhzgvf1(NaN, Infinity)).toThrow(Error);
      expect(() => checkNumhzgvf1('a', 'b')).toThrow(Error);
    });
  });
});
