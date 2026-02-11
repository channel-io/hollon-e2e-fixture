import { isValidi2pxh7 } from './isValidi2pxh7';

describe('isValidi2pxh7', () => {
  describe('valid inputs - should NOT throw', () => {
    it('should accept two positive numbers', () => {
      expect(() => isValidi2pxh7(1, 2)).not.toThrow();
    });

    it('should accept two negative numbers', () => {
      expect(() => isValidi2pxh7(-5, -10)).not.toThrow();
    });

    it('should accept mixed positive and negative numbers', () => {
      expect(() => isValidi2pxh7(5, -3)).not.toThrow();
    });

    it('should accept zero values', () => {
      expect(() => isValidi2pxh7(0, 0)).not.toThrow();
      expect(() => isValidi2pxh7(0, 5)).not.toThrow();
    });

    it('should accept decimal numbers', () => {
      expect(() => isValidi2pxh7(1.5, 2.7)).not.toThrow();
    });
  });

  describe('invalid first argument - should throw', () => {
    it('should throw when first argument is NaN', () => {
      expect(() => isValidi2pxh7(NaN, 5)).toThrow('first argument');
    });

    it('should throw when first argument is Infinity', () => {
      expect(() => isValidi2pxh7(Infinity, 5)).toThrow('first argument');
    });

    it('should throw when first argument is -Infinity', () => {
      expect(() => isValidi2pxh7(-Infinity, 5)).toThrow('first argument');
    });

    it('should throw when first argument is null', () => {
      expect(() => isValidi2pxh7(null, 5)).toThrow('first argument');
    });

    it('should throw when first argument is undefined', () => {
      expect(() => isValidi2pxh7(undefined, 5)).toThrow('first argument');
    });

    it('should throw when first argument is a string', () => {
      expect(() => isValidi2pxh7('string', 5)).toThrow('first argument');
    });

    it('should throw when first argument is an object', () => {
      expect(() => isValidi2pxh7({}, 5)).toThrow('first argument');
    });

    it('should throw when first argument is an array', () => {
      expect(() => isValidi2pxh7([], 5)).toThrow('first argument');
    });
  });

  describe('invalid second argument - should throw', () => {
    it('should throw when second argument is NaN', () => {
      expect(() => isValidi2pxh7(5, NaN)).toThrow('second argument');
    });

    it('should throw when second argument is Infinity', () => {
      expect(() => isValidi2pxh7(5, Infinity)).toThrow('second argument');
    });

    it('should throw when second argument is -Infinity', () => {
      expect(() => isValidi2pxh7(5, -Infinity)).toThrow('second argument');
    });

    it('should throw when second argument is null', () => {
      expect(() => isValidi2pxh7(5, null)).toThrow('second argument');
    });

    it('should throw when second argument is undefined', () => {
      expect(() => isValidi2pxh7(5, undefined)).toThrow('second argument');
    });

    it('should throw when second argument is a string', () => {
      expect(() => isValidi2pxh7(5, 'string')).toThrow('second argument');
    });

    it('should throw when second argument is an object', () => {
      expect(() => isValidi2pxh7(5, {})).toThrow('second argument');
    });

    it('should throw when second argument is an array', () => {
      expect(() => isValidi2pxh7(5, [])).toThrow('second argument');
    });
  });

  describe('both arguments invalid - should throw', () => {
    it('should throw when both arguments are NaN', () => {
      expect(() => isValidi2pxh7(NaN, NaN)).toThrow();
    });

    it('should throw when both arguments are invalid', () => {
      expect(() => isValidi2pxh7(Infinity, undefined)).toThrow();
    });
  });

  describe('error messages', () => {
    it('should have descriptive error message for first argument', () => {
      expect(() => isValidi2pxh7(NaN, 5)).toThrow(/first argument.*finite number/i);
    });

    it('should have descriptive error message for second argument', () => {
      expect(() => isValidi2pxh7(5, NaN)).toThrow(/second argument.*finite number/i);
    });
  });
});
