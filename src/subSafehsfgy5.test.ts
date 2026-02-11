import { subSafehsfgy5 } from './subSafehsfgy5';

describe('subSafehsfgy5', () => {
  describe('valid subtractions - positive results', () => {
    it('should return 2 for subSafehsfgy5(5, 3)', () => {
      expect(subSafehsfgy5(5, 3)).toBe(2);
    });

    it('should return 5 for subSafehsfgy5(10, 5)', () => {
      expect(subSafehsfgy5(10, 5)).toBe(5);
    });

    it('should return 1 for subSafehsfgy5(100, 99)', () => {
      expect(subSafehsfgy5(100, 99)).toBe(1);
    });
  });

  describe('valid subtractions - negative results', () => {
    it('should return -2 for subSafehsfgy5(3, 5)', () => {
      expect(subSafehsfgy5(3, 5)).toBe(-2);
    });

    it('should return -5 for subSafehsfgy5(5, 10)', () => {
      expect(subSafehsfgy5(5, 10)).toBe(-5);
    });

    it('should return -100 for subSafehsfgy5(0, 100)', () => {
      expect(subSafehsfgy5(0, 100)).toBe(-100);
    });
  });

  describe('valid subtractions - mixed signs', () => {
    it('should return 15 for subSafehsfgy5(10, -5)', () => {
      expect(subSafehsfgy5(10, -5)).toBe(15);
    });

    it('should return -15 for subSafehsfgy5(-10, 5)', () => {
      expect(subSafehsfgy5(-10, 5)).toBe(-15);
    });

    it('should return -5 for subSafehsfgy5(-10, -5)', () => {
      expect(subSafehsfgy5(-10, -5)).toBe(-5);
    });

    it('should return 5 for subSafehsfgy5(-5, -10)', () => {
      expect(subSafehsfgy5(-5, -10)).toBe(5);
    });
  });

  describe('valid subtractions - zero', () => {
    it('should return 0 for subSafehsfgy5(5, 5)', () => {
      expect(subSafehsfgy5(5, 5)).toBe(0);
    });

    it('should return 5 for subSafehsfgy5(5, 0)', () => {
      expect(subSafehsfgy5(5, 0)).toBe(5);
    });

    it('should return -5 for subSafehsfgy5(0, 5)', () => {
      expect(subSafehsfgy5(0, 5)).toBe(-5);
    });

    it('should return 0 for subSafehsfgy5(0, 0)', () => {
      expect(subSafehsfgy5(0, 0)).toBe(0);
    });

    it('should return 0 for subSafehsfgy5(-0, 0)', () => {
      // -0 - 0 = -0 in JavaScript, which is equal to 0 but with different sign bit
      expect(Object.is(subSafehsfgy5(-0, 0), -0) || subSafehsfgy5(-0, 0) === 0).toBe(true);
    });
  });

  describe('valid subtractions - floats', () => {
    it('should return 3 for subSafehsfgy5(5.5, 2.5)', () => {
      expect(subSafehsfgy5(5.5, 2.5)).toBe(3);
    });

    it('should return -1.5 for subSafehsfgy5(1.5, 3)', () => {
      expect(subSafehsfgy5(1.5, 3)).toBe(-1.5);
    });

    it('should return 0 for subSafehsfgy5(0.5, 0.5)', () => {
      expect(subSafehsfgy5(0.5, 0.5)).toBe(0);
    });

    it('should handle very small floats', () => {
      expect(subSafehsfgy5(0.001, 0.0005)).toBeCloseTo(0.0005);
    });

    it('should handle large floats', () => {
      expect(subSafehsfgy5(999.999, 111.111)).toBeCloseTo(888.888);
    });
  });

  describe('valid subtractions - large numbers', () => {
    it('should handle large positive numbers', () => {
      expect(subSafehsfgy5(1e10, 1e9)).toBe(9e9);
    });

    it('should handle large negative numbers', () => {
      expect(subSafehsfgy5(-1e10, -1e9)).toBe(-9e9);
    });

    it('should handle Number.MAX_VALUE and Number.MIN_VALUE', () => {
      expect(subSafehsfgy5(Number.MAX_VALUE, 1)).toBe(Number.MAX_VALUE - 1);
    });
  });

  describe('invalid parameters - NaN', () => {
    it('should throw Error if first argument is NaN', () => {
      expect(() => subSafehsfgy5(NaN, 3)).toThrow();
    });

    it('should throw Error if second argument is NaN', () => {
      expect(() => subSafehsfgy5(5, NaN)).toThrow();
    });

    it('should throw Error if both arguments are NaN', () => {
      expect(() => subSafehsfgy5(NaN, NaN)).toThrow();
    });
  });

  describe('invalid parameters - Infinity', () => {
    it('should throw Error if first argument is positive Infinity', () => {
      expect(() => subSafehsfgy5(Infinity, 3)).toThrow();
    });

    it('should throw Error if first argument is negative Infinity', () => {
      expect(() => subSafehsfgy5(-Infinity, 3)).toThrow();
    });

    it('should throw Error if second argument is positive Infinity', () => {
      expect(() => subSafehsfgy5(5, Infinity)).toThrow();
    });

    it('should throw Error if second argument is negative Infinity', () => {
      expect(() => subSafehsfgy5(5, -Infinity)).toThrow();
    });

    it('should throw Error if both arguments are Infinity', () => {
      expect(() => subSafehsfgy5(Infinity, -Infinity)).toThrow();
    });
  });

  describe('invalid parameters - strings', () => {
    it('should throw Error if first argument is a string', () => {
      expect(() => subSafehsfgy5('not a number' as unknown as number, 3)).toThrow();
    });

    it('should throw Error if second argument is a string', () => {
      expect(() => subSafehsfgy5(5, 'not a number' as unknown as number)).toThrow();
    });

    it('should throw Error if first argument is a numeric string', () => {
      expect(() => subSafehsfgy5('123' as unknown as number, 3)).toThrow();
    });

    it('should throw Error if both arguments are strings', () => {
      expect(() => subSafehsfgy5('5' as unknown as number, '3' as unknown as number)).toThrow();
    });
  });

  describe('invalid parameters - null and undefined', () => {
    it('should throw Error if first argument is null', () => {
      expect(() => subSafehsfgy5(null as unknown as number, 3)).toThrow();
    });

    it('should throw Error if second argument is null', () => {
      expect(() => subSafehsfgy5(5, null as unknown as number)).toThrow();
    });

    it('should throw Error if first argument is undefined', () => {
      expect(() => subSafehsfgy5(undefined as unknown as number, 3)).toThrow();
    });

    it('should throw Error if second argument is undefined', () => {
      expect(() => subSafehsfgy5(5, undefined as unknown as number)).toThrow();
    });

    it('should throw Error if both arguments are null', () => {
      expect(() => subSafehsfgy5(null as unknown as number, null as unknown as number)).toThrow();
    });
  });

  describe('invalid parameters - objects and arrays', () => {
    it('should throw Error if first argument is an object', () => {
      expect(() => subSafehsfgy5({} as unknown as number, 3)).toThrow();
    });

    it('should throw Error if second argument is an object', () => {
      expect(() => subSafehsfgy5(5, {} as unknown as number)).toThrow();
    });

    it('should throw Error if first argument is an array', () => {
      expect(() => subSafehsfgy5([1, 2] as unknown as number, 3)).toThrow();
    });

    it('should throw Error if second argument is an array', () => {
      expect(() => subSafehsfgy5(5, [1, 2] as unknown as number)).toThrow();
    });

    it('should throw Error if first argument is a boolean', () => {
      expect(() => subSafehsfgy5(true as unknown as number, 3)).toThrow();
    });

    it('should throw Error if second argument is a boolean', () => {
      expect(() => subSafehsfgy5(5, false as unknown as number)).toThrow();
    });
  });

  describe('error propagation', () => {
    it('should propagate checkNumhsfgy5 errors', () => {
      try {
        subSafehsfgy5(NaN, 5);
        fail('Should have thrown an error');
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect((error as Error).message).toContain('not a finite number');
      }
    });

    it('should provide helpful error message for invalid first parameter', () => {
      try {
        subSafehsfgy5('abc' as unknown as number, 5);
        fail('Should have thrown an error');
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect((error as Error).message).toContain('Parameter a');
      }
    });

    it('should provide helpful error message for invalid second parameter', () => {
      try {
        subSafehsfgy5(5, 'abc' as unknown as number);
        fail('Should have thrown an error');
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect((error as Error).message).toContain('Parameter b');
      }
    });
  });

  describe('edge cases', () => {
    it('should handle a - a = 0', () => {
      expect(subSafehsfgy5(42, 42)).toBe(0);
      expect(subSafehsfgy5(-7, -7)).toBe(0);
    });

    it('should demonstrate order sensitivity', () => {
      expect(subSafehsfgy5(5, 3)).toBe(2);
      expect(subSafehsfgy5(3, 5)).toBe(-2);
      expect(subSafehsfgy5(5, 3)).not.toBe(subSafehsfgy5(3, 5));
    });

    it('should handle subtraction with negative zero', () => {
      expect(subSafehsfgy5(5, -0)).toBe(5);
      expect(subSafehsfgy5(-0, -5)).toBe(5);
    });
  });
});