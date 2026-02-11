import { addCheckedi2pxh7 } from '../src/addCheckedi2pxh7';

describe('addCheckedi2pxh7', () => {
  describe('valid additions', () => {
    it('should add two positive numbers', () => {
      expect(addCheckedi2pxh7(5, 3)).toBe(8);
    });

    it('should add two negative numbers', () => {
      expect(addCheckedi2pxh7(-5, -3)).toBe(-8);
    });

    it('should add positive and negative numbers', () => {
      expect(addCheckedi2pxh7(10, -4)).toBe(6);
    });

    it('should add zero to a number', () => {
      expect(addCheckedi2pxh7(0, 5)).toBe(5);
      expect(addCheckedi2pxh7(5, 0)).toBe(5);
    });

    it('should add zero to zero', () => {
      expect(addCheckedi2pxh7(0, 0)).toBe(0);
    });
  });

  describe('validation errors', () => {
    it('should throw when first argument is NaN', () => {
      expect(() => addCheckedi2pxh7(NaN, 5)).toThrow('first argument must be a finite number');
    });

    it('should throw when second argument is NaN', () => {
      expect(() => addCheckedi2pxh7(5, NaN)).toThrow('second argument must be a finite number');
    });

    it('should throw when first argument is Infinity', () => {
      expect(() => addCheckedi2pxh7(Infinity, 5)).toThrow('first argument must be a finite number');
    });

    it('should throw when first argument is -Infinity', () => {
      expect(() => addCheckedi2pxh7(-Infinity, 5)).toThrow('first argument must be a finite number');
    });

    it('should throw when second argument is Infinity', () => {
      expect(() => addCheckedi2pxh7(5, Infinity)).toThrow('second argument must be a finite number');
    });

    it('should throw when second argument is -Infinity', () => {
      expect(() => addCheckedi2pxh7(5, -Infinity)).toThrow('second argument must be a finite number');
    });
  });
});
