import { validateInputhyonkk } from './validator';

describe('validateInputhyonkk', () => {
  describe('valid inputs', () => {
    it('should not throw for two positive finite numbers', () => {
      expect(() => validateInputhyonkk(1, 2)).not.toThrow();
    });

    it('should not throw for two negative finite numbers', () => {
      expect(() => validateInputhyonkk(-5, -10)).not.toThrow();
    });

    it('should not throw for zero values', () => {
      expect(() => validateInputhyonkk(0, 0)).not.toThrow();
    });

    it('should not throw for mixed positive and negative numbers', () => {
      expect(() => validateInputhyonkk(-5, 10)).not.toThrow();
    });

    it('should not throw for floating point numbers', () => {
      expect(() => validateInputhyonkk(1.5, 2.5)).not.toThrow();
    });

    it('should not throw for large finite numbers', () => {
      expect(() => validateInputhyonkk(1000000, 2000000)).not.toThrow();
    });

    it('should not throw for very small finite numbers', () => {
      expect(() => validateInputhyonkk(0.0001, 0.0002)).not.toThrow();
    });
  });

  describe('invalid first parameter', () => {
    it('should throw for NaN as first parameter', () => {
      expect(() => validateInputhyonkk(NaN, 5)).toThrow();
    });

    it('should throw for Infinity as first parameter', () => {
      expect(() => validateInputhyonkk(Infinity, 5)).toThrow();
    });

    it('should throw for -Infinity as first parameter', () => {
      expect(() => validateInputhyonkk(-Infinity, 5)).toThrow();
    });
  });

  describe('invalid second parameter', () => {
    it('should throw for NaN as second parameter', () => {
      expect(() => validateInputhyonkk(5, NaN)).toThrow();
    });

    it('should throw for Infinity as second parameter', () => {
      expect(() => validateInputhyonkk(5, Infinity)).toThrow();
    });

    it('should throw for -Infinity as second parameter', () => {
      expect(() => validateInputhyonkk(5, -Infinity)).toThrow();
    });
  });

  describe('both parameters invalid', () => {
    it('should throw when both parameters are NaN', () => {
      expect(() => validateInputhyonkk(NaN, NaN)).toThrow();
    });

    it('should throw when both parameters are Infinity', () => {
      expect(() => validateInputhyonkk(Infinity, Infinity)).toThrow();
    });

    it('should throw when first is NaN and second is Infinity', () => {
      expect(() => validateInputhyonkk(NaN, Infinity)).toThrow();
    });
  });

  describe('error messages', () => {
    it('should throw descriptive error for invalid first parameter', () => {
      expect(() => validateInputhyonkk(NaN, 5)).toThrow(/[Ff]irst/i);
    });

    it('should throw descriptive error for invalid second parameter', () => {
      expect(() => validateInputhyonkk(5, NaN)).toThrow(/[Ss]econd/i);
    });

    it('should include NaN indicator in error message for NaN', () => {
      expect(() => validateInputhyonkk(NaN, 5)).toThrow(/NaN/i);
    });

    it('should indicate Infinity in error message for Infinity', () => {
      expect(() => validateInputhyonkk(Infinity, 5)).toThrow(/Infinity/i);
    });

    it('should indicate -Infinity in error message for -Infinity', () => {
      expect(() => validateInputhyonkk(5, -Infinity)).toThrow(/Infinity/i);
    });
  });
});
