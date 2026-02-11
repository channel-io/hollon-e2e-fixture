import { addCheckedhrx0le } from './addCheckedhrx0le';

describe('addCheckedhrx0le', () => {
  // Valid addition cases
  it('should add two positive numbers', () => {
    expect(addCheckedhrx0le(2, 3)).toBe(5);
    expect(addCheckedhrx0le(10, 20)).toBe(30);
  });

  it('should add two negative numbers', () => {
    expect(addCheckedhrx0le(-2, -3)).toBe(-5);
    expect(addCheckedhrx0le(-10, -20)).toBe(-30);
  });

  it('should add numbers with mixed signs', () => {
    expect(addCheckedhrx0le(-5, 10)).toBe(5);
    expect(addCheckedhrx0le(10, -3)).toBe(7);
    expect(addCheckedhrx0le(-15, 5)).toBe(-10);
  });

  it('should add zero correctly', () => {
    expect(addCheckedhrx0le(0, 0)).toBe(0);
    expect(addCheckedhrx0le(5, 0)).toBe(5);
    expect(addCheckedhrx0le(0, -5)).toBe(-5);
    expect(addCheckedhrx0le(-10, 0)).toBe(-10);
  });

  it('should add floating point numbers', () => {
    expect(addCheckedhrx0le(1.5, 2.5)).toBe(4);
    expect(addCheckedhrx0le(3.2, 1.8)).toBe(5);
  });

  it('should handle floating point precision edge case (0.1 + 0.2)', () => {
    expect(addCheckedhrx0le(0.1, 0.2)).toBeCloseTo(0.3, 10);
  });

  it('should add large numbers', () => {
    expect(addCheckedhrx0le(1000000, 2000000)).toBe(3000000);
    expect(addCheckedhrx0le(-1000000, 1000000)).toBe(0);
  });

  // Error cases - validation failures
  it('should throw error if first parameter is NaN', () => {
    expect(() => addCheckedhrx0le(NaN, 5)).toThrow();
    expect(() => addCheckedhrx0le(NaN, 0)).toThrow();
  });

  it('should throw error if first parameter is Infinity', () => {
    expect(() => addCheckedhrx0le(Infinity, 5)).toThrow();
    expect(() => addCheckedhrx0le(-Infinity, 5)).toThrow();
  });

  it('should throw error if first parameter is not a number', () => {
    expect(() => addCheckedhrx0le('not a number' as unknown as number, 5)).toThrow();
    expect(() => addCheckedhrx0le(null as unknown as number, 5)).toThrow();
    expect(() => addCheckedhrx0le(undefined as unknown as number, 5)).toThrow();
    expect(() => addCheckedhrx0le({} as unknown as number, 5)).toThrow();
    expect(() => addCheckedhrx0le([] as unknown as number, 5)).toThrow();
  });

  it('should throw error if second parameter is NaN', () => {
    expect(() => addCheckedhrx0le(5, NaN)).toThrow();
    expect(() => addCheckedhrx0le(0, NaN)).toThrow();
  });

  it('should throw error if second parameter is Infinity', () => {
    expect(() => addCheckedhrx0le(5, Infinity)).toThrow();
    expect(() => addCheckedhrx0le(5, -Infinity)).toThrow();
  });

  it('should throw error if second parameter is not a number', () => {
    expect(() => addCheckedhrx0le(5, 'not a number' as unknown as number)).toThrow();
    expect(() => addCheckedhrx0le(5, null as unknown as number)).toThrow();
    expect(() => addCheckedhrx0le(5, undefined as unknown as number)).toThrow();
    expect(() => addCheckedhrx0le(5, {} as unknown as number)).toThrow();
    expect(() => addCheckedhrx0le(5, [] as unknown as number)).toThrow();
  });

  it('should throw error if both parameters are invalid', () => {
    expect(() => addCheckedhrx0le(NaN, NaN)).toThrow();
    expect(() => addCheckedhrx0le(Infinity, -Infinity)).toThrow();
  });

  it('should provide helpful error messages mentioning which parameter failed', () => {
    expect(() => addCheckedhrx0le(NaN, 5)).toThrow(/First parameter/);
    expect(() => addCheckedhrx0le(5, NaN)).toThrow(/Second parameter/);
  });
});
