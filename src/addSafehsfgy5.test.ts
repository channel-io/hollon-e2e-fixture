import { addSafehsfgy5 } from './addSafehsfgy5';

describe('addSafehsfgy5', () => {
  describe('valid additions - positive integers', () => {
    it('should add two positive integers correctly', () => {
      expect(addSafehsfgy5(2, 3)).toBe(5);
      expect(addSafehsfgy5(10, 20)).toBe(30);
      expect(addSafehsfgy5(1, 1)).toBe(2);
    });

    it('should add zero and positive integer', () => {
      expect(addSafehsfgy5(0, 5)).toBe(5);
      expect(addSafehsfgy5(5, 0)).toBe(5);
    });
  });

  describe('valid additions - negative integers', () => {
    it('should add two negative integers correctly', () => {
      expect(addSafehsfgy5(-2, -3)).toBe(-5);
      expect(addSafehsfgy5(-10, -20)).toBe(-30);
      expect(addSafehsfgy5(-1, -1)).toBe(-2);
    });

    it('should add negative and positive integers (result positive)', () => {
      expect(addSafehsfgy5(10, -3)).toBe(7);
      expect(addSafehsfgy5(100, -50)).toBe(50);
    });

    it('should add negative and positive integers (result negative)', () => {
      expect(addSafehsfgy5(-10, 3)).toBe(-7);
      expect(addSafehsfgy5(-100, 50)).toBe(-50);
    });

    it('should add two opposite numbers resulting in zero', () => {
      expect(addSafehsfgy5(5, -5)).toBe(0);
      expect(addSafehsfgy5(-100, 100)).toBe(0);
    });
  });

  describe('valid additions - zero', () => {
    it('should add zero with zero', () => {
      expect(addSafehsfgy5(0, 0)).toBe(0);
    });

    it('should handle negative zero and positive zero', () => {
      expect(addSafehsfgy5(-0, 0)).toBe(0);
      expect(addSafehsfgy5(0, -0)).toBe(0);
    });
  });

  describe('valid additions - floating point numbers', () => {
    it('should add two positive floats correctly', () => {
      expect(addSafehsfgy5(1.5, 2.5)).toBe(4);
      expect(addSafehsfgy5(0.1, 0.2)).toBeCloseTo(0.3);
      expect(addSafehsfgy5(3.14, 1.86)).toBeCloseTo(5);
    });

    it('should add two negative floats correctly', () => {
      expect(addSafehsfgy5(-1.5, -2.5)).toBe(-4);
      expect(addSafehsfgy5(-0.1, -0.2)).toBeCloseTo(-0.3);
    });

    it('should add mixed float and integer correctly', () => {
      expect(addSafehsfgy5(2.5, 3)).toBe(5.5);
      expect(addSafehsfgy5(5, 2.5)).toBe(7.5);
      expect(addSafehsfgy5(-1.5, 2)).toBe(0.5);
    });

    it('should add very small floats', () => {
      expect(addSafehsfgy5(0.001, 0.002)).toBeCloseTo(0.003);
      expect(addSafehsfgy5(1e-10, 2e-10)).toBeCloseTo(3e-10);
    });

    it('should add floats with negative zero', () => {
      expect(addSafehsfgy5(1.5, -0)).toBe(1.5);
      expect(addSafehsfgy5(-0, 1.5)).toBe(1.5);
    });
  });

  describe('valid additions - large numbers', () => {
    it('should add large positive numbers correctly', () => {
      expect(addSafehsfgy5(1e10, 2e10)).toBe(3e10);
      expect(addSafehsfgy5(Number.MAX_SAFE_INTEGER - 1, 1)).toBe(Number.MAX_SAFE_INTEGER);
    });

    it('should add large negative numbers correctly', () => {
      expect(addSafehsfgy5(-1e10, -2e10)).toBe(-3e10);
      expect(addSafehsfgy5(-(Number.MAX_SAFE_INTEGER - 1), -1)).toBe(-Number.MAX_SAFE_INTEGER);
    });

    it('should add mixed large and small numbers', () => {
      expect(addSafehsfgy5(1e10, 0.5)).toBe(1e10 + 0.5);
      expect(addSafehsfgy5(1e-10, 1e10)).toBe(1e10 + 1e-10);
    });
  });

  describe('invalid parameters - NaN', () => {
    it('should throw when first parameter is NaN', () => {
      expect(() => addSafehsfgy5(NaN, 5)).toThrow();
    });

    it('should throw when second parameter is NaN', () => {
      expect(() => addSafehsfgy5(5, NaN)).toThrow();
    });

    it('should throw when both parameters are NaN', () => {
      expect(() => addSafehsfgy5(NaN, NaN)).toThrow();
    });
  });

  describe('invalid parameters - Infinity', () => {
    it('should throw when first parameter is positive Infinity', () => {
      expect(() => addSafehsfgy5(Infinity, 5)).toThrow();
    });

    it('should throw when second parameter is positive Infinity', () => {
      expect(() => addSafehsfgy5(5, Infinity)).toThrow();
    });

    it('should throw when first parameter is negative Infinity', () => {
      expect(() => addSafehsfgy5(-Infinity, 5)).toThrow();
    });

    it('should throw when second parameter is negative Infinity', () => {
      expect(() => addSafehsfgy5(5, -Infinity)).toThrow();
    });

    it('should throw when both parameters are Infinity', () => {
      expect(() => addSafehsfgy5(Infinity, Infinity)).toThrow();
      expect(() => addSafehsfgy5(Infinity, -Infinity)).toThrow();
    });
  });

  describe('invalid parameters - strings', () => {
    it('should throw when first parameter is a string', () => {
      expect(() => addSafehsfgy5('5' as unknown as number, 5)).toThrow();
      expect(() => addSafehsfgy5('abc' as unknown as number, 5)).toThrow();
    });

    it('should throw when second parameter is a string', () => {
      expect(() => addSafehsfgy5(5, '5' as unknown as number)).toThrow();
      expect(() => addSafehsfgy5(5, 'abc' as unknown as number)).toThrow();
    });

    it('should throw when both parameters are strings', () => {
      expect(() => addSafehsfgy5('5' as unknown as number, '10' as unknown as number)).toThrow();
    });

    it('should throw for numeric strings', () => {
      expect(() => addSafehsfgy5('123' as unknown as number, 5)).toThrow();
      expect(() => addSafehsfgy5(5, '456' as unknown as number)).toThrow();
    });
  });

  describe('invalid parameters - null and undefined', () => {
    it('should throw when first parameter is null', () => {
      expect(() => addSafehsfgy5(null as unknown as number, 5)).toThrow();
    });

    it('should throw when second parameter is null', () => {
      expect(() => addSafehsfgy5(5, null as unknown as number)).toThrow();
    });

    it('should throw when first parameter is undefined', () => {
      expect(() => addSafehsfgy5(undefined as unknown as number, 5)).toThrow();
    });

    it('should throw when second parameter is undefined', () => {
      expect(() => addSafehsfgy5(5, undefined as unknown as number)).toThrow();
    });

    it('should throw when both parameters are null', () => {
      expect(() => addSafehsfgy5(null as unknown as number, null as unknown as number)).toThrow();
    });

    it('should throw when both parameters are undefined', () => {
      expect(() => addSafehsfgy5(undefined as unknown as number, undefined as unknown as number)).toThrow();
    });
  });

  describe('invalid parameters - objects and arrays', () => {
    it('should throw when first parameter is an object', () => {
      expect(() => addSafehsfgy5({} as unknown as number, 5)).toThrow();
      expect(() => addSafehsfgy5({ value: 5 } as unknown as number, 5)).toThrow();
    });

    it('should throw when second parameter is an object', () => {
      expect(() => addSafehsfgy5(5, {} as unknown as number)).toThrow();
      expect(() => addSafehsfgy5(5, { value: 5 } as unknown as number)).toThrow();
    });

    it('should throw when first parameter is an array', () => {
      expect(() => addSafehsfgy5([1, 2] as unknown as number, 5)).toThrow();
      expect(() => addSafehsfgy5([5] as unknown as number, 5)).toThrow();
    });

    it('should throw when second parameter is an array', () => {
      expect(() => addSafehsfgy5(5, [1, 2] as unknown as number)).toThrow();
      expect(() => addSafehsfgy5(5, [5] as unknown as number)).toThrow();
    });

    it('should throw when first parameter is a boolean', () => {
      expect(() => addSafehsfgy5(true as unknown as number, 5)).toThrow();
      expect(() => addSafehsfgy5(false as unknown as number, 5)).toThrow();
    });

    it('should throw when second parameter is a boolean', () => {
      expect(() => addSafehsfgy5(5, true as unknown as number)).toThrow();
      expect(() => addSafehsfgy5(5, false as unknown as number)).toThrow();
    });
  });

  describe('error messages - helpful and clear', () => {
    it('should provide helpful error message when first parameter is invalid', () => {
      try {
        addSafehsfgy5('abc' as unknown as number, 5);
        fail('Should have thrown an error');
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect((error as Error).message).toContain('not a finite number');
      }
    });

    it('should provide helpful error message when second parameter is invalid', () => {
      try {
        addSafehsfgy5(5, 'abc' as unknown as number);
        fail('Should have thrown an error');
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect((error as Error).message).toContain('not a finite number');
      }
    });

    it('should provide helpful error message for NaN', () => {
      try {
        addSafehsfgy5(NaN, 5);
        fail('Should have thrown an error');
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect((error as Error).message).toContain('not a finite number');
      }
    });

    it('should provide helpful error message for Infinity', () => {
      try {
        addSafehsfgy5(Infinity, 5);
        fail('Should have thrown an error');
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect((error as Error).message).toContain('not a finite number');
      }
    });

    it('should identify which parameter is invalid', () => {
      try {
        addSafehsfgy5(null as unknown as number, 5);
        fail('Should have thrown an error');
      } catch (error) {
        expect((error as Error).message).toContain('a');
      }

      try {
        addSafehsfgy5(5, null as unknown as number);
        fail('Should have thrown an error');
      } catch (error) {
        expect((error as Error).message).toContain('b');
      }
    });
  });

  describe('error propagation', () => {
    it('should propagate error from checkNumhsfgy5', () => {
      expect(() => addSafehsfgy5(1, NaN)).toThrow(Error);
    });

    it('should not catch errors from checkNumhsfgy5', () => {
      expect(() => {
        try {
          addSafehsfgy5(Infinity, 5);
        } catch (e) {
          throw e;
        }
      }).toThrow();
    });
  });

  describe('return type verification', () => {
    it('should always return a number', () => {
      expect(typeof addSafehsfgy5(2, 3)).toBe('number');
      expect(typeof addSafehsfgy5(-5, 10)).toBe('number');
      expect(typeof addSafehsfgy5(0.5, 0.3)).toBe('number');
    });

    it('should return correct arithmetic result', () => {
      const a = 42;
      const b = 58;
      expect(addSafehsfgy5(a, b)).toBe(a + b);
    });
  });
});
