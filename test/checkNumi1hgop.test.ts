import { checkNumi1hgop } from '../src/checkNumi1hgop';

describe('checkNumi1hgop', () => {
  describe('valid finite numbers should not throw', () => {
    it('should not throw for positive integers', () => {
      expect(() => checkNumi1hgop(1, 2)).not.toThrow();
    });

    it('should not throw for negative integers', () => {
      expect(() => checkNumi1hgop(-1, -2)).not.toThrow();
    });

    it('should not throw for zero', () => {
      expect(() => checkNumi1hgop(0, 0)).not.toThrow();
    });

    it('should not throw for floating point numbers', () => {
      expect(() => checkNumi1hgop(1.5, 2.7)).not.toThrow();
    });

    it('should not throw for very large numbers', () => {
      expect(() => checkNumi1hgop(Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER)).not.toThrow();
    });
  });

  describe('non-number types should throw Error', () => {
    it('should throw for null', () => {
      expect(() => checkNumi1hgop(null, 1)).toThrow(Error);
      expect(() => checkNumi1hgop(1, null)).toThrow(Error);
    });

    it('should throw for undefined', () => {
      expect(() => checkNumi1hgop(undefined, 1)).toThrow(Error);
      expect(() => checkNumi1hgop(1, undefined)).toThrow(Error);
    });

    it('should throw for string', () => {
      expect(() => checkNumi1hgop('1', 1)).toThrow(Error);
      expect(() => checkNumi1hgop(1, '1')).toThrow(Error);
    });

    it('should throw for object', () => {
      expect(() => checkNumi1hgop({}, 1)).toThrow(Error);
      expect(() => checkNumi1hgop(1, {})).toThrow(Error);
    });

    it('should throw for array', () => {
      expect(() => checkNumi1hgop([], 1)).toThrow(Error);
      expect(() => checkNumi1hgop(1, [])).toThrow(Error);
    });

    it('should throw for boolean', () => {
      expect(() => checkNumi1hgop(true, 1)).toThrow(Error);
      expect(() => checkNumi1hgop(1, false)).toThrow(Error);
    });
  });

  describe('non-finite numbers should throw Error', () => {
    it('should throw for NaN', () => {
      expect(() => checkNumi1hgop(NaN, 1)).toThrow(Error);
      expect(() => checkNumi1hgop(1, NaN)).toThrow(Error);
    });

    it('should throw for Infinity', () => {
      expect(() => checkNumi1hgop(Infinity, 1)).toThrow(Error);
      expect(() => checkNumi1hgop(1, Infinity)).toThrow(Error);
    });

    it('should throw for -Infinity', () => {
      expect(() => checkNumi1hgop(-Infinity, 1)).toThrow(Error);
      expect(() => checkNumi1hgop(1, -Infinity)).toThrow(Error);
    });
  });
});
