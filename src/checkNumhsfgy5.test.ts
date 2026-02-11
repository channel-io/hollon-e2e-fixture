import { checkNumhsfgy5 } from './checkNumhsfgy5';

describe('checkNumhsfgy5', () => {
  describe('valid finite numbers', () => {
    it('should not throw for positive integers', () => {
      expect(() => checkNumhsfgy5(1, 2)).not.toThrow();
      expect(() => checkNumhsfgy5(100, 999)).not.toThrow();
    });

    it('should not throw for negative integers', () => {
      expect(() => checkNumhsfgy5(-1, -5)).not.toThrow();
      expect(() => checkNumhsfgy5(-100, -999)).not.toThrow();
    });

    it('should not throw for zero', () => {
      expect(() => checkNumhsfgy5(0, 0)).not.toThrow();
      expect(() => checkNumhsfgy5(-0, 0)).not.toThrow();
    });

    it('should not throw for positive floats', () => {
      expect(() => checkNumhsfgy5(1.5, 2.7)).not.toThrow();
      expect(() => checkNumhsfgy5(0.001, 999.999)).not.toThrow();
    });

    it('should not throw for negative floats', () => {
      expect(() => checkNumhsfgy5(-1.5, -2.7)).not.toThrow();
      expect(() => checkNumhsfgy5(-0.001, -999.999)).not.toThrow();
    });

    it('should not throw for large numbers', () => {
      expect(() => checkNumhsfgy5(1e10, 1e-10)).not.toThrow();
      expect(() => checkNumhsfgy5(Number.MAX_VALUE, Number.MIN_VALUE)).not.toThrow();
    });

    it('should not throw for mixed valid numbers', () => {
      expect(() => checkNumhsfgy5(42, -3.14)).not.toThrow();
      expect(() => checkNumhsfgy5(0, 1000)).not.toThrow();
    });
  });

  describe('invalid types - NaN', () => {
    it('should throw for NaN as first parameter', () => {
      expect(() => checkNumhsfgy5(NaN, 5)).toThrow();
    });

    it('should throw for NaN as second parameter', () => {
      expect(() => checkNumhsfgy5(5, NaN)).toThrow();
    });

    it('should throw for NaN as both parameters', () => {
      expect(() => checkNumhsfgy5(NaN, NaN)).toThrow();
    });
  });

  describe('invalid types - Infinity', () => {
    it('should throw for positive Infinity as first parameter', () => {
      expect(() => checkNumhsfgy5(Infinity, 5)).toThrow();
    });

    it('should throw for positive Infinity as second parameter', () => {
      expect(() => checkNumhsfgy5(5, Infinity)).toThrow();
    });

    it('should throw for negative Infinity as first parameter', () => {
      expect(() => checkNumhsfgy5(-Infinity, 5)).toThrow();
    });

    it('should throw for negative Infinity as second parameter', () => {
      expect(() => checkNumhsfgy5(5, -Infinity)).toThrow();
    });

    it('should throw for both parameters being Infinity', () => {
      expect(() => checkNumhsfgy5(Infinity, -Infinity)).toThrow();
    });
  });

  describe('invalid types - strings', () => {
    it('should throw for string as first parameter', () => {
      expect(() => checkNumhsfgy5('5', 5)).toThrow();
    });

    it('should throw for string as second parameter', () => {
      expect(() => checkNumhsfgy5(5, '5')).toThrow();
    });

    it('should throw for numeric string as first parameter', () => {
      expect(() => checkNumhsfgy5('123', 5)).toThrow();
    });

    it('should throw for both parameters as strings', () => {
      expect(() => checkNumhsfgy5('5', '10')).toThrow();
    });
  });

  describe('invalid types - null and undefined', () => {
    it('should throw for null as first parameter', () => {
      expect(() => checkNumhsfgy5(null, 5)).toThrow();
    });

    it('should throw for null as second parameter', () => {
      expect(() => checkNumhsfgy5(5, null)).toThrow();
    });

    it('should throw for undefined as first parameter', () => {
      expect(() => checkNumhsfgy5(undefined, 5)).toThrow();
    });

    it('should throw for undefined as second parameter', () => {
      expect(() => checkNumhsfgy5(5, undefined)).toThrow();
    });

    it('should throw for both parameters as null', () => {
      expect(() => checkNumhsfgy5(null, null)).toThrow();
    });
  });

  describe('invalid types - objects and arrays', () => {
    it('should throw for object as first parameter', () => {
      expect(() => checkNumhsfgy5({}, 5)).toThrow();
    });

    it('should throw for object as second parameter', () => {
      expect(() => checkNumhsfgy5(5, {})).toThrow();
    });

    it('should throw for array as first parameter', () => {
      expect(() => checkNumhsfgy5([1, 2], 5)).toThrow();
    });

    it('should throw for array as second parameter', () => {
      expect(() => checkNumhsfgy5(5, [1, 2])).toThrow();
    });

    it('should throw for boolean as first parameter', () => {
      expect(() => checkNumhsfgy5(true, 5)).toThrow();
    });

    it('should throw for boolean as second parameter', () => {
      expect(() => checkNumhsfgy5(5, false)).toThrow();
    });
  });

  describe('error messages', () => {
    it('should provide helpful error message for non-numeric first parameter', () => {
      try {
        checkNumhsfgy5('abc', 5);
        fail('Should have thrown an error');
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect((error as Error).message).toContain('not a finite number');
      }
    });

    it('should provide helpful error message for non-numeric second parameter', () => {
      try {
        checkNumhsfgy5(5, 'abc');
        fail('Should have thrown an error');
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect((error as Error).message).toContain('not a finite number');
      }
    });

    it('should provide helpful error message for NaN', () => {
      try {
        checkNumhsfgy5(NaN, 5);
        fail('Should have thrown an error');
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect((error as Error).message).toContain('not a finite number');
      }
    });

    it('should provide helpful error message for Infinity', () => {
      try {
        checkNumhsfgy5(Infinity, 5);
        fail('Should have thrown an error');
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect((error as Error).message).toContain('not a finite number');
      }
    });
  });
});
